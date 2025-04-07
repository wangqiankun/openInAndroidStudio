# Change Log

All notable changes to the "openInAndroidStudio" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.5] - 2024-04-07

### Added
- 添加检查 Android Studio 是否已打开项目的功能
- 优化文件跳转逻辑

### Changed
- 改进打开文件的流程，避免重复打开项目
- 优化错误提示信息

## [0.0.4] - 2024-04-07

### Changed
- 更新 TypeScript 配置，使用 commonjs 模块系统
- 调整目标 ES 版本为 ES2020
- 添加 esModuleInterop 和 skipLibCheck 配置
- 优化编译输出配置

### Fixed
- 修复扩展无法读取的问题
- 修复模块加载兼容性问题

## [0.0.3] - 2024-04-07

### Changed
- 调整 VSCode 引擎版本要求为 `*`，以兼容 Cursor 编辑器
- 更新 @types/vscode 依赖版本为 `*`，以匹配引擎版本要求

## [0.0.2] - 2024-04-07

### Changed
- 调整 VSCode 引擎版本要求为精确版本 `1.96.2`，以匹配 Cursor 编辑器版本
- 更新版本号为 0.0.2

## [0.0.1] - 2024-04-07

### Added
- 初始版本发布
- 支持在 Android Studio 中打开文件
- 支持文件资源管理器和编辑器右键菜单
- 支持通过命令面板打开文件