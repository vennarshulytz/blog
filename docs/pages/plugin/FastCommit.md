# FastCommit：让你的代码提交更优雅！

今天，我想给大家介绍一款针对 `Commit Message`的 idea 插件：[FastCommit](https://plugins.jetbrains.com/plugin/26730-fastcommit)

## 作用

通过预定义提交模板，快速完成 `Git Commit Message ` 的规范化，让你的代码提交更优雅！

## 优势

1. 和类似功能的插件相比，更加轻量、体积小，最新版仅仅 `52.59 KB`
2. 和类似功能的插件相比，更加易于使用
3. 和类似功能的插件相比，效率更高，不会造成 IDE 卡顿
4. 兼容的 idea 版本更多（2018.2+）
4. 支持多国语言（中文、英文、日文、韩文）

## 安装

在` File | Settings | Plugins `中搜索 FastCommit

![image-20250609154258268](img/FastCommit.assets/image-20250609154258268.png)

点击 Install 安装插件

> 注意：需要 idea 版本 大于等于 2018.2，才可在插件市场中搜索到。

## 配置

在`File | Settings | Tools | FastCommit`中配置提交模板，提交模板可以根据实际项目需要灵活编辑

![image-20250609154504936](img/FastCommit.assets/image-20250609154504936.png)

> 预定义变量有三个：
>
> ${type} : 对应提交菜单“提交类型”
> ${body} : 对应提交菜单输入的 message
> ${branchName} : 当前所在分支名

## 用法

填写 `Commit Message` 后，点击 ![image-20250609155522770](img/FastCommit.assets/image-20250609155522770.png) 按钮，即可选择对应的模板

![Screenshot 2](img/FastCommit.assets/screenshot_697478b8-a9a6-4c1b-a106-cfa7aae0e3a0.png)

## 插件推荐

1. **[FastBean](https://plugins.jetbrains.com/plugin/24611-fastbean)**: 在Spring项目中，快速注入bean。

   > [让你的代码提交更优雅！FastCommit 让一切更简单_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HLMGzgEYf)

2. **[FastCommit](https://plugins.jetbrains.com/plugin/26730-fastcommit)**: 简易的git 提交 模板建议。
	
	> [让你的代码提交更优雅！FastCommit 让一切更简单_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HLMGzgEYf)
	
3. **[Fast Doc](https://plugins.jetbrains.com/plugin/27130-fast-doc)**: 基于 spring controller 方法生成 markdown 格式的接口文档
	
	> [轻量高效！FastDoc 让 API 文档生成更简单_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1n2M7zWEo3)
	
4. **[Go Arrow Functions](https://plugins.jetbrains.com/plugin/27297-go-arrow-functions)**: 折叠 Go 匿名函数以将其显示为类似于 Java lambda 的箭头函数。
	
	> [提升代码可读性！Go Arrow Functions 让 Go 也有箭头函数_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1HyM7zRE8k)
	
5. **[FastBuild](https://plugins.jetbrains.com/plugin/27467-fastbuild)**: 快速构建项目。
	
	> [FastBuild：让你的编译快人一步，效率飙升！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1JSM7zHEY7)

## 最后

欢迎通过评论区进行 bug 的反馈和功能上的建议