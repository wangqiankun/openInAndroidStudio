// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "openInAndroidStudio" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('openInAndroidStudio.openFile', async (uri: vscode.Uri) => {
		try {
			// 获取文件路径
			const filePath = uri ? uri.fsPath : vscode.window.activeTextEditor?.document.uri.fsPath;
			
			if (!filePath) {
				vscode.window.showErrorMessage('请选择一个文件');
				return;
			}

			// 获取项目根目录
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (!workspaceFolders || workspaceFolders.length === 0) {
				vscode.window.showErrorMessage('请先打开一个工作区');
				return;
			}

			const projectRoot = workspaceFolders[0].uri.fsPath;
			
			// 构建 Android Studio 命令
			// 注意：这里假设 Android Studio 已经添加到系统环境变量中
			const command = `open -a "Android Studio" "${projectRoot}" --args "${filePath}"`;
			
			await execAsync(command);
			vscode.window.showInformationMessage('已在 Android Studio 中打开文件');
		} catch (error) {
			vscode.window.showErrorMessage(`打开文件失败: ${error}`);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
