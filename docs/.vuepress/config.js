import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',

  title: "vennarshulytz's blog",
  description: '欢迎来到我的博客！',

  theme: defaultTheme({
    logo: '/home.webp',

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'JetBrains IDEs Plugin',
        children: [
          {
            text: 'FastBean：依赖注入提效神器',
            link: '/pages/plugin/FastConvert.md'
          },
          {
            text: 'FastCommit：让你的代码提交更优雅！',
            link: '/pages/plugin/FastCommit.md'
          },
          {
            text: 'FastDoc：让 API 文档生成更简单',
            link: '/pages/plugin/FastDoc.md'
          },
          {
            text: 'Go Arrow Functions：提升代码可读性！ 让 Go 也有箭头函数',
            link: '/pages/plugin/Go Arrow Functions.md'
          },
          {
            text: 'FastBuild：让你的编译快人一步，效率飙升！',
            link: '/pages/plugin/FastBuild.md'
          },
          {
            text: '喵力全开，拼写稳了！TypingCat Pro 上线护驾',
            link: '/pages/plugin/TypingCat Pro.md'
          },
          {
            text: 'FastConvert：告别冗长代码，体验对象转换的极速飞跃！',
            link: '/pages/plugin/FastConvert.md'
          },
          {
            text: 'FastConvert —— 让你的 Java 对象转换丝滑高效',
            link: '/pages/plugin/Convert.md'
          }
        ]
      },
      {
        text: 'Project',
        children: [
          {
            text: 'json view ext',
            link: '/pages/project/json-view-ext.md'
          },
          {
            text: 'Validation',
            link: '/pages/project/validation.md'
          }
        ]
      },
      {
        text: '关于',
        link: '/pages/about/me.md',
      }],


    // 侧边栏对象 - 不用页面配置不同的
    sidebar: {
      '/pages/plugin/': [
        {
          text: 'JetBrains IDEs Plugin',
          collapsible: true, // 可折叠
          children: [
            {
              text: 'FastBean：依赖注入提效神器',
              link: '/pages/plugin/FastConvert.md'
            },
            {
              text: 'FastCommit：让你的代码提交更优雅！',
              link: '/pages/plugin/FastCommit.md'
            },
            {
              text: 'FastDoc：让 API 文档生成更简单',
              link: '/pages/plugin/FastDoc.md'
            },
            {
              text: 'Go Arrow Functions：提升代码可读性！ 让 Go 也有箭头函数',
              link: '/pages/plugin/Go_Arrow_Functions.md'
            },
            {
              text: 'FastBuild：让你的编译快人一步，效率飙升！',
              link: '/pages/plugin/FastBuild.md'
            },
            {
              text: '喵力全开，拼写稳了！TypingCat Pro 上线护驾',
              link: '/pages/plugin/TypingCat_Pro.md'
            },
            {
              text: 'FastConvert：告别冗长代码，体验对象转换的极速飞跃！',
              link: '/pages/plugin/FastConvert.md'
            },
            {
              text: 'FastConvert —— 让你的 Java 对象转换丝滑高效',
              link: '/pages/plugin/Convert.md'
            }
          ]
        }
      ],
      '/pages/project/': [
        {
          text: 'Project',
          collapsible: true, // 可折叠
          children: [
            {
              text: 'json view ext',
              link: '/pages/project/json-view-ext.md'
            },
            {
              text: 'Validation',
              link: '/pages/project/validation.md'
            }
          ]
        }
      ]
    },
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
    }),
  ],

  bundler: viteBundler(),



})
