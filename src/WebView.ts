import * as vscode from 'vscode';
import * as path from 'path';

export function getWebviewContent(mermaidText: string, webview: vscode.Webview, extensionPath: string): string {
  const scriptUri = webview.asWebviewUri(
    vscode.Uri.file(path.join(extensionPath, 'media', 'webview.js'))
  );
  const escapedMermaid = mermaidText
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r?\n/g, '\\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mermaid Diagram Preview</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: var(--vscode-editor-background);
            color: var(--vscode-editor-foreground);
            padding: 20px;
            overflow: auto;
        }

        .container {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background: var(--vscode-sideBar-background);
            border-radius: 4px;
        }

        .header h1 {
            font-size: 16px;
            font-weight: 600;
        }

        .controls {
            display: flex;
            gap: 8px;
        }

        button {
            padding: 6px 12px;
            background: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            border-radius: 2px;
            cursor: pointer;
            font-size: 12px;
            transition: background 0.2s;
        }

        button:hover {
            background: var(--vscode-button-hoverBackground);
        }

        button:active {
            opacity: 0.8;
        }

        .diagram-container {
            background: var(--vscode-sideBar-background);
            border: 1px solid var(--vscode-sideBar-border);
            border-radius: 4px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            overflow: auto;
        }

        #mermaid-diagram {
            display: flex;
            justify-content: center;
        }

        .error {
            color: var(--vscode-editorError-foreground);
            background: var(--vscode-editorError-background);
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid var(--vscode-editorError-foreground);
            font-family: 'Courier New', monospace;
            font-size: 12px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .info {
            color: var(--vscode-foreground);
            background: var(--vscode-sideBar-background);
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid var(--vscode-textLink-foreground);
            font-size: 12px;
        }

        .theme-toggle {
            display: flex;
            gap: 4px;
            align-items: center;
            padding: 4px;
            background: var(--vscode-editorGroup-background);
            border-radius: 2px;
        }

        .theme-toggle input {
            margin: 0 4px 0 0;
        }

        .theme-toggle label {
            font-size: 12px;
            cursor: pointer;
            user-select: none;
        }

        .zoom-controls {
            display: flex;
            gap: 4px;
            align-items: center;
        }

        .zoom-controls button {
            padding: 4px 8px;
            font-size: 14px;
            line-height: 1;
            min-width: 28px;
        }

        #zoom-level {
            font-size: 12px;
            min-width: 40px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Mermaid Diagram Preview</h1>
            <div class="controls">
                <div class="theme-toggle">
                    <input type="checkbox" id="darkMode" checked>
                    <label for="darkMode">Dark Mode</label>
                </div>
                <div class="zoom-controls">
                    <button onclick="zoom(-0.1)">−</button>
                    <span id="zoom-level">100%</span>
                    <button onclick="zoom(0.1)">+</button>
                </div>
                <button onclick="downloadDiagram()">Download SVG</button>
                <button onclick="copyToClipboard()">Copy SVG</button>
            </div>
        </div>
        <div id="content"></div>
    </div>

    <script src="${scriptUri}"></script>
    <script>setMermaidCode('${escapedMermaid}');</script>
    <script>renderDiagram();</script>
</body>
</html>`;
}
