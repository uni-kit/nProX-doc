// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({

  // 首页是否博客模式
  blog: false,

  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  mermaid: true,

  // 页脚
  footer: [
    {
      // message 字段支持配置为HTML内容，配置多条可以配置为数组
      message: '基于主题开发的高级组件库',
      copyright: 'nProX | 本人张翠花',
      // icpRecord: {
      //   name: '蜀ICP备19011724号',
      //   link: 'https://beian.miit.gov.cn/'
      // },
      // securityRecord: {
      //   name: '公网安备xxxxx',
      //   link: 'https://www.beian.gov.cn/portal/index.do'
      // },
    },
    {
      // message 字段支持配置为HTML内容，配置多条可以配置为数组
      // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
      copyright: 'MIT License | 粥里有勺糖',
      // icpRecord: {
      //   name: '蜀ICP备19011724号',
      //   link: 'https://beian.miit.gov.cn/'
      // },
      // securityRecord: {
      //   name: '公网安备xxxxx',
      //   link: 'https://www.beian.gov.cn/portal/index.do'
      // },
    }
  ],

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: '本人张翠花',

  // 推荐文章
  recommend: {
    // 当没有推荐文章时的提示，设置为 false 则不展示
    empty: false,
    filter: (page) => {
      // console.log(page)
      if (page.route.startsWith('/doc/') || page.route.startsWith('/api/') || page.route.startsWith('/template/')) {
        return false
      }
      return true
    }
  },

  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 公告
  popover: {
    title: '联系作者',
    body: [
      { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: 'image',
        src: 'https://www.redou.vip/nprox-doc/assets/contact.png',
      },
      {
        type: 'text',
        content: '欢迎大家加群&私信交流'
      },
      {
        type: 'text',
        content: '文章首/文尾有群二维码',
        style: 'padding-top:0'
      },
      {
        type: 'button',
        content: '关于作者博客',
        link: 'https://www.redou.vip'
      },
      {
        type: 'button',
        content: '加群交流',
        props: {
          type: 'success'
        },
        link: 'https://www.redou.vip/nprox-doc/group.html',
      }
    ],
    duration: 0
  },
  authorList: [
    {
      nickname: '本人张翠花',
      url: 'https://www.redou.vip/aboutme.html',
      des: '你的指尖,拥有改变世界的力量'
    }
  ],
  buttonAfterArticle: {
    openTitle: '打赏作者',
    closeTitle: '下次一定',
    content: '<img src="https://www.redou.vip/nprox-doc/assets/pay_wx_68.png">',
    icon: 'wechatPay',
  },
})

export { blogTheme }
