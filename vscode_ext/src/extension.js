import * as vscode from 'vscode';
import ALDependencyExplorer from '../../plugin/ALDependencyExplorer.js';
import DiagramBuilder from '../../plugin/DiagramBuilder.js';

let altiplanoPlugin;

export function activate(context) {
    const disposable = vscode.commands.registerCommand('altiplano.showDependencyDiagram', async () => {
        try {
            // Get the active editor
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('No active editor. Please open an .al file.');
                return;
            }

            if (editor.document.languageId !== 'al') {
                vscode.window.showErrorMessage('The active file is not an AL file.');
                return;
            }

            // Show progress message
            await vscode.window.withProgress(
                { location: vscode.ProgressLocation.Notification, title: 'Generating dependency diagram...' },
                async () => {
                    // Get file content
                    const content = editor.document.getText();

                    // Extract dependencies
                    const explorer = new ALDependencyExplorer();
                    explorer.addObject(content);
                    const dependencyMap = explorer.getDependencyMap();

                    if (dependencyMap.size === 0) {
                        vscode.window.showWarningMessage('No dependencies found in the current file.');
                        return;
                    }

                    const svg = await DiagramBuilder.draw(dependencyMap);

                    // Create and show webview panel
                    const fileName = vscode.workspace.asRelativePath(editor.document.uri);
                    const panel = vscode.window.createWebviewPanel(
                        'alDependencyDiagram',
                        `Dependency Diagram: ${fileName}`,
                        vscode.ViewColumn.Beside,
                        { enableScripts: true }
                    );

                    panel.webview.html = getWebviewContent(svg);
                }
            );
        } catch (error) {
            vscode.window.showErrorMessage(`Error generating diagram: ${error.message}`);
            console.error(error);
        }
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent(svg) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AL Dependency Diagram</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: var(--vscode-editor-background);
            font-family: var(--vscode-font-family);
        }
        .diagram-container {
            background-color: var(--vscode-editor-background);
            border: 1px solid var(--vscode-editorGroup-border);
            border-radius: 4px;
            padding: 20px;
            overflow: auto;
            max-width: 90vw;
            max-height: 90vh;
        }
        svg {
            max-width: 100%;
            height: auto;
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
        }
    </style>
</head>
<body>
    <div class="diagram-container">
        ${svg}
    </div>
</body>
</html>`;
}

export function deactivate() {
}

