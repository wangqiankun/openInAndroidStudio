# Change Log

All notable changes to the "openInAndroidStudio" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.5] - 2024-04-07

### Added
- Added functionality to check if Android Studio is already running with the project
- Optimized file navigation logic

### Changed
- Improved file opening process to avoid reopening the project
- Enhanced error message display

## [0.0.4] - 2024-04-07

### Changed
- Updated TypeScript configuration to use commonjs module system
- Adjusted target ES version to ES2020
- Added esModuleInterop and skipLibCheck configurations
- Optimized compilation output settings

### Fixed
- Fixed extension loading issues
- Fixed module compatibility problems

## [0.0.3] - 2024-04-07

### Changed
- Adjusted VSCode engine version requirement to `*` for Cursor editor compatibility
- Updated @types/vscode dependency version to `*` to match engine requirements

## [0.0.2] - 2024-04-07

### Changed
- Set VSCode engine version requirement to exact version `1.96.2` to match Cursor editor version
- Updated version number to 0.0.2

## [0.0.1] - 2024-04-07

### Added
- Initial release
- Support for opening files in Android Studio
- Support for file explorer and editor context menus
- Support for opening files via command palette 