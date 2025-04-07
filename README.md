# Open in Android Studio

A simple VSCode extension that allows you to quickly open current files or projects in Android Studio.

## Important Notes
Please test if the `studio` command is available in your terminal first.

## Features

- 🚀 One-click to open current file in Android Studio
- 📁 Support opening from file explorer context menu
- 📝 Support opening from editor context menu
- 🎯 Automatically navigate to the specified file

## Installation

1. Open VSCode
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open the Extensions panel
3. Search for "Open in Android Studio"
4. Click the "Install" button to install the extension

## Usage

### Open from File Explorer

1. Right-click on any file in the VSCode file explorer
2. Select "Open in Android Studio" option

### Open from Editor

1. Right-click in the editor
2. Select "Open in Android Studio" option

### Using Command Palette

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette
2. Type "Open in Android Studio" and select the command

## System Requirements

- VSCode 1.96.0 or higher
- Android Studio installed
- macOS operating system (current version)

## Important Notes

- Ensure Android Studio is properly installed on your system
- Make sure you have opened a VSCode workspace
- If you encounter permission issues, ensure Android Studio has sufficient permissions to access project files

## Feedback

If you encounter any issues or have suggestions while using this extension, please submit an Issue on GitHub:

[Submit Issue](https://github.com/wangqiankun/openInAndroidStudio/issues)

## License

MIT

## Build Commands

```bash
# Clean and reinstall dependencies
rm -rf node_modules package-lock.json out && npm install 

# Compile
npm run compile

# Package
vsce package

# Publish
vsce publish
``` 