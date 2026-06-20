import mermaid from 'mermaid';

class DiagramBuilder {
    /**
     * Generates and renders a Mermaid class diagram from a map of object relations.
     * @param {Map<string, string[]>} relationsMap - Map where key is object id and value is array of referenced object ids
     * @returns {Promise<{svg: string, code: string}>} Object containing rendered SVG and original Mermaid code
     */
    static async draw(relationsMap) {
        let mermaidCode = 'classDiagram\n';
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
            mermaidCode += `    class ${className}\n`;
        });

        relationships.forEach(rel => {
            mermaidCode += `    ${rel.from} --> ${rel.to}\n`;
        });

        mermaid.initialize({ startOnLoad: false, theme: 'default' });

        try {
            const { svg } = await mermaid.render('diagram', mermaidCode);
            return svg;
        } catch (error) {
            throw new Error(`Failed to render Mermaid diagram: ${error.message}`);
        }
    }
}

export default DiagramBuilder;
