import mermaid from 'mermaid';

class DiagramBuilder {
    static async toMermaidSyntax(relationsMap) {
        let mermaidCode = `---\n` +
                          `  config:\n` +
                          `    theme: dark\n` +
                          `    class:\n` +
                          `      hideEmptyMembersBox: true\n` +
                          `---\n` +
                          `\n` +
                          `classDiagram\n`;

        const classes = new Set();
        const relationships = [];

        relationsMap.forEach((references, id) => {
            classes.add(id);
            if (Array.isArray(references)) {
                references.forEach(ref => {
                    classes.add(ref);
                    relationships.push({ from: id, to: ref });
                });
            }
        });

        classes.forEach(className => {
            mermaidCode += `    class \`${className}\`\n`;
        });

        relationships.forEach(rel => {
            mermaidCode += `    \`${rel.from}\` --> \`${rel.to}\`\n`;
        });

        return mermaidCode;
    }
}

export default DiagramBuilder;
