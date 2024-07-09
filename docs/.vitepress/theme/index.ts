import BlogTheme from '@sugarat/theme'

// 自定义样式重载
// import './style.scss'

// 自定义主题色
// import './user-theme.css'

// export default BlogTheme

import { h } from 'vue'
import JoinGroup from './JoinGroup.vue'
import DemoFrame from './DemoFrame.vue'

export default {
  ...BlogTheme,
  Layout: h(BlogTheme.Layout, undefined, {
    'doc-before': () => h(JoinGroup),
    'doc-after': () => h(JoinGroup, { showImg: true }),
  }),
  enhanceApp(ctx: any) {
    BlogTheme?.enhanceApp?.(ctx),
    ctx.app.component('DemoFrame', DemoFrame)
  }
}