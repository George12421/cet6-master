# CET-6 Master · 六级翻译训练（平板）

一个基于 AI 的英语六级（CET-6）平板翻译练习工具，支持随机出题、智能批改、词汇积累和个人学习记录。

**在线体验：** https://george12421.github.io/cet6-master/

## ✨ 主要功能

- **随机练习：** 支持短句、中句、长句和段落翻译，涵盖多个六级常见主题。
- **AI 出题：** 自动生成中文翻译题，提供英文参考译文。
- **智能批改：** 从语法、词汇、句式和翻译准确性等方面分析译文。
- **词汇学习：** 查询单词、积累高级词汇、固定搭配和例句。
- **错题与收藏：** 保存练习记录、错题及重点词汇。
- **数据备份：** 支持学习数据 JSON 导出与导入。
- **平板适配：** 优化安卓平板横屏布局及 M-Pencil 手写输入体验。

## 🤖 AI 模型配置

支持硅基流动（SiliconFlow）及兼容 OpenAI API 格式的模型服务。

可分别配置出题、翻译、批改、词汇分析和提示搜索模型。

用户需要自行提供 API Key，并承担相应的模型调用费用。

硅基流动 API 地址：

`https://api.siliconflow.cn/v1/chat/completions`

## 💾 数据存储

- 使用 IndexedDB 和 localStorage 保存个人学习数据及配置。
- 学习记录保存在当前设备的浏览器中，不会自动同步到其他设备。
- 支持 JSON 数据备份与恢复。
- 清理浏览器数据前，请先导出备份。

## 🚀 使用方法

直接访问在线网站：

https://george12421.github.io/cet6-master/

也可以下载源码，通过本地 HTTP 服务运行。

本项目无需单独部署后端服务器。

## 🛠️ 技术栈

- HTML5
- CSS3
- JavaScript
- IndexedDB
- localStorage
- PWA
- OpenAI-compatible API

## 🙏 项目来源与致谢

本项目基于 [jmdonbaba/Cet6Translation](https://github.com/jmdonbaba/Cet6Translation) 进行二次开发。

感谢原作者提供的基础代码和功能设计。

本仓库由 [George12421](https://github.com/George12421) 维护，在原项目基础上增加和优化了随机练习、多模型 API 配置、学习记录、数据备份及平板使用体验等功能。如果喜欢可以加个⭐哦，感谢。

## 📄 许可证

本项目沿用原项目的 MIT License。

保留原作者版权声明及许可证文件，详见 [LICENSE](./LICENSE)。
