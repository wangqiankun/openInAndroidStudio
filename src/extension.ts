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
			console.log('openInAndroidStudio.openFile filePath', filePath);
			
			if (!filePath) {
				vscode.window.showErrorMessage('请选择一个文件');
				return;
			}

			// 获取项目根目录
			const workspaceFolders = vscode.workspace.workspaceFolders;
			console.log('openInAndroidStudio.openFile workspaceFolders', workspaceFolders);
			if (!workspaceFolders || workspaceFolders.length === 0) {
				vscode.window.showErrorMessage('请先打开一个工作区');
				return;
			}

			const projectRoot = workspaceFolders[0].uri.fsPath;
			console.log('openInAndroidStudio.openFile projectRoot', projectRoot);
			// 检查 Android Studio 是否已经打开该项目
			const isRunning = await isAndroidStudioRunning(projectRoot);
			console.log('openInAndroidStudio.openFile isRunning', isRunning);
			if (!isRunning) {
				// 如果 Android Studio 没有运行，先打开项目
				await openFileInAndroidStudio(projectRoot, projectRoot);
				vscode.window.showInformationMessage('已在 Android Studio 中打开项目');
			}
			console.log('openInAndroidStudio.openFile openFileInAndroidStudio', projectRoot, filePath);
			// 无论是否已经打开项目，都跳转到指定文件
			await openFileInAndroidStudio(projectRoot, filePath);
			vscode.window.showInformationMessage('已跳转到指定文件');
			
		} catch (error) {
			vscode.window.showErrorMessage(`操作失败: ${error}`);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

async function isAndroidStudioRunning(projectPath: string): Promise<boolean> {
	try {
		// 在 macOS 上检查 Android Studio 是否运行
		const { stdout } = await execAsync('ps aux | grep "[A]ndroid Studio"');
		return stdout.includes(projectPath);
	} catch (error) {
		console.error('检查 Android Studio 状态时出错:', error);
		return false;
	}
}

async function openFileInAndroidStudio(projectPath: string, filePath: string): Promise<void> {
	try {
		// 构建 Android Studio 命令
		const command = `studio "${filePath}"`;
		await execAsync(command);

	} catch (error) {
		console.error('openFileInAndroidStudio error', error);
		throw new Error(`打开文件失败: ${error}`);
	}
}
