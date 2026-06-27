import { CharStream, CommonTokenStream, ErrorListener } from 'antlr4';
import ALLexer from "../parser/ALLexer.js";
import ALParser from "../parser/ALParser.js";

class ALObject {
    namespace;
    type;
    name;
    references = [];
}

const ALReferenceableObjects = [
    ALParser.RULE_recordDataType,
    ALParser.RULE_codeunitDataType,
    ALParser.RULE_pageDataType,
    ALParser.RULE_interfaceDataType,
    ALParser.RULE_enumDataType,
    ALParser.RULE_queryDataType,
    ALParser.RULE_xmlPortDataType,
    ALParser.RULE_reportDataType
];

const ALObjectTypes = [
    ALParser.RULE_tableObject,
    ALParser.RULE_codeunitObject,
    ALParser.RULE_pageObject,
    ALParser.RULE_interfaceObject,
    ALParser.RULE_enumObject,
    ALParser.RULE_queryObject,
    ALParser.RULE_xmlportObject,
    ALParser.RULE_reportObject
];

class ALDependencyExplorer {
    #objects = new Map();

    addObject(text) {
        const dedupArray = function(arr) {
            var elements = {};
            return arr.filter(function(item) {
                return elements.hasOwnProperty(item) ? false : (elements[item] = true);
            });
        }

        const objectTree = parse(text);
        this.#objects.set(this.#getObjectId(objectTree), dedupArray(this.#collectReferences(objectTree)));
    }

    getDependencyMap() {
        return this.#objects;
    }

    #getObjectId(objectTree) {
        let type = null;
        let name = null;

        const objectDefIdx = objectTree.children.findIndex(c => c.ruleIndex === ALParser.RULE_objectDefinition);
        if (objectDefIdx === -1) {
            throw new Error("Unable to locate the object definition node");
        }

        const objectDef = objectTree.children[objectDefIdx];
        const objectTypeIdx = objectDef.children.findIndex(c => ALObjectTypes.includes(c.ruleIndex));
        if (objectTypeIdx === -1) {
            throw new Error("Unable to locate the object type node");
        }

        const objectType = objectDef.children[objectTypeIdx];
        type = objectType.children[0]?.symbol?.text;
        name = objectType.children[2]?.children[0]?.symbol?.text;

        if (!type || !name) {
            throw new Error("Unable to determine object id: missing type or name");
        }

        return this.#formatObjectIdFromComponents(type, name);
    }

    #formatObjectIdFromComponents(type, name) {
        return `${type} ${name}`;
    }

    #collectReferences(objectTree) {
        const refs = [];
        this.#collectReferencesIntoArray(objectTree, refs);
        return refs;
    }

    #collectReferencesIntoArray(node, refsArray) {
        if (!node) {
            return;
        }

        if (Array.isArray(node)) {
            for (const child of node) {
                this.#collectReferencesIntoArray(child, refsArray);
            }

            return;
        }

        if (node.ruleIndex === ALParser.RULE_variableDeclaration) {
            if (!node.children) {
                return;
            }
            const dataTypeIdx = node.children.findIndex(child => child.ruleIndex === ALParser.RULE_dataType);
            const dataTypeDecl = dataTypeIdx > -1 ? node.children[dataTypeIdx] : [];

            if (!dataTypeDecl.children || dataTypeDecl.children.length === 0) {
                return;
            }
            const variableType = dataTypeDecl.children[0];

            if (ALReferenceableObjects.includes(variableType.ruleIndex)) {
                const dataTypeParts = variableType.children;
                const objectType = dataTypeParts[0];
                const objectName = dataTypeParts[1].children[0].symbol.text;

                refsArray.push(this.#formatObjectIdFromComponents(objectType, objectName));
            }
        } else if (Array.isArray(node.children)) {
            this.#collectReferencesIntoArray(node.children, refsArray);
        }
    }
}

function parse(text) {
    const input = text;
    const chars = new CharStream(input);
    const lexer = new ALLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new ALParser(tokens);

    parser.addErrorListener(new BreakProcessErrorListener());

    return parser.compilationUnit();
}

class BreakProcessErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const errorMessage = `Parsing error at line ${line}, column ${column}: ${msg}`;
        throw new Error(errorMessage);
    }
}

export default ALDependencyExplorer;
