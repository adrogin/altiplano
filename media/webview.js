const darkModeToggle = document.getElementById('darkMode');
let currentScale = 1.0;
let mermaidDiagramDef = '';

function zoom(delta) {
    currentScale = Math.min(4, Math.max(0.1, currentScale + delta));
    const diagram = document.getElementById('mermaid-diagram');
    if (diagram) {
        diagram.style.transform = `scale(${currentScale})`;
        diagram.style.transformOrigin = 'top center';
    }
    document.getElementById('zoom-level').textContent = Math.round(currentScale * 100) + '%';
}

let currentTheme = 'dark';

mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    class: {
        "useMaxWidth": false,
        "hideEmptyMembersBox": true
    },
    flowchart: {
        useMaxWidth: true
    }
});

function setMermaidCode(mermaidCode) {
    mermaidDiagramDef = mermaidCode;
}

async function renderDiagram() {
    const contentDiv = document.getElementById('content');

    if (!mermaidDiagramDef.trim()) {
        contentDiv.innerHTML = '<div class="info">Enter mermaid syntax to preview diagram</div>';
        return;
    }

    // Inject theme only when the diagram has no frontmatter config of its own
    const hasFrontmatter = mermaidDiagramDef.trimStart().startsWith('---');
    const textToRender = hasFrontmatter
        ? mermaidDiagramDef
        : `%%{init: {'theme': '${currentTheme}'}}%%\n${mermaidDiagramDef}`;
    console.log(textToRender);

    try {
        const { svg } = await mermaid.render('mermaid-diagram', textToRender);
        contentDiv.innerHTML = `<div class="diagram-container"><div id="mermaid-diagram">${svg}</div></div>`;
        zoom(currentScale);
    } catch (error) {
        contentDiv.innerHTML = `<div class="error">Error rendering diagram:\n${error.message}</div>`;
        console.error('Mermaid render error:', error);
    }
}

function downloadDiagram() {
    const svg = document.querySelector('#mermaid-diagram svg');
    if (!svg) {
        alert('No diagram to download');
        return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'diagram.svg';
    link.click();
    URL.revokeObjectURL(url);
}

function copyToClipboard() {
    const svg = document.querySelector('#mermaid-diagram svg');
    if (!svg) {
        alert('No diagram to copy');
        return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    navigator.clipboard.writeText(svgData).then(() => {
        alert('SVG copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

darkModeToggle.addEventListener('change', () => {
    currentTheme = darkModeToggle.checked ? 'dark' : 'default';
    renderDiagram();
});

renderDiagram();
