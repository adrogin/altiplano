import * as vscode from 'vscode';
import * as path from 'path';
import ALDependencyExplorer from './ALDependencyExplorer.js';
import DiagramBuilder from './DiagramBuilder.js';
import { getWebviewContent } from './WebView';

let previewPanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext) {
    const previewCommand = vscode.commands.registerCommand(
        'altiplano.showDependencyDiagram',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('No active editor found');
                return;
            }

            // if (editor.document.languageId !== 'al') {
            //     vscode.window.showErrorMessage('The active file is not an AL file.');
            //     return;
            // }

        //   const mermaidText = editor.document.getText();
        //   showPreview(context, mermaidText, editor.document.fileName);

            const content = editor.document.getText();
            const explorer = new ALDependencyExplorer();
            explorer.addObject(content);
            const dependencyMap = explorer.getDependencyMap();

            if (dependencyMap.size === 0) {
                vscode.window.showWarningMessage('No dependencies found in the current file.');
                return;
            }

            DiagramBuilder.toMermaidSyntax(dependencyMap).then(mermaidText =>
                showPreview(context, mermaidText, editor.document.fileName)
            );
            // const svg = await DiagramBuilder.draw(dependencyMap);
        }
  );

  context.subscriptions.push(previewCommand);

  // Update preview on document change
  const docChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
    if (previewPanel && event.document === vscode.window.activeTextEditor?.document) {
        const mermaidText = event.document.getText();
        updatePreview(context, mermaidText);
    }
  });

  context.subscriptions.push(docChangeListener);
}

function showPreview(context: vscode.ExtensionContext, mermaidText: string, fileName: string) {
  if (previewPanel) {
    previewPanel.reveal(vscode.ViewColumn.Beside);
    updatePreview(context, mermaidText);
    return;
  }

  previewPanel = vscode.window.createWebviewPanel(
    'mermaidPreview',
    'Mermaid Diagram Preview',
    vscode.ViewColumn.Beside,
    {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
    }
  );

  previewPanel.onDidDispose(() => {
    previewPanel = undefined;
  });

  previewPanel.webview.html = getWebviewContent(mermaidText, previewPanel.webview, context.extensionPath);
}

function updatePreview(context: vscode.ExtensionContext, mermaidText: string) {
  if (previewPanel) {
    previewPanel.webview.html = getWebviewContent(mermaidText, previewPanel.webview, context.extensionPath);
  }
}

export function deactivate() { }
