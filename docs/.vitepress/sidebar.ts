import { type DefaultTheme } from 'vitepress'

function sidebarDoc(): DefaultTheme.SidebarItem[] {
    return [
        {
          text: '简介',
          collapsed: false,
          items: [
            {
              text: 'Why nProX',
              link: 'why'
            },
            {
                text: '快速开始',
                link: 'quick-start'
            },
            {
                text: '全面了解(必读)',
                link: 'global'
            },
          ]
        },
        {
            text: '主题与样式',
            collapsed: false,
            items: [
              {
                text: '主题设计',
                link: 'theme-design'
              },
              {
                text: '样式详解',
                link: 'theme-css'
              },
              {
                  text: '主题定制与扩展',
                  link: 'theme-custom'
              },
              {
                  text: '多皮肤',
                  link: 'theme-skin'
              },
            ]
        },
        {
            text: '类型说明',
            collapsed: false,
            items: [
                {
                    text: '内置类型',
                    link: 'buildin-type'
                }
            ]
        },
        {
            text: '导航',
            collapsed: false,
            items: [
                {
                    text: '导航栏：navbar',
                    link: 'n-navbar'
                }, {
                    text: 'tabbar：tabbar',
                    link: 'n-tabbar'
                }, {
                    text: '步骤条：step-static',
                    link: 'n-step-static'
                }, {
                    text: '横向tabs：tabs-h',
                    link: 'n-tabs-h'
                }, {
                    text: '竖向tabs：tabs-v',
                    link: 'n-tabs-v'
                }
            ]
        },
        {
            text: '列表',
            collapsed: false,
            items: [
                {
                    text: '滚动：scroll',
                    link: 'n-scroll'
                }, {
                    text: '列表：list',
                    link: 'n-list'
                }, {
                    text: '瀑布：waterfall-view',
                    link: 'n-waterfall-view'
                }, {
                    text: '横向列表：scroll-h',
                    link: 'n-scroll-h'
                }, {
                    text: '索引列表',
                    link: 'indexlist'
                }, {
                    text: '聊天列表',
                    link: 'chatlist'
                }
            ]
        },
        {
            text: '盒子',
            collapsed: false,
            items: [
                {
                    text: '抽屉：drawer',
                    link: 'n-drawer'
                }, {
                    text: '切换：tab-container',
                    link: 'n-tab-container'
                }, {
                    text: '滚动：rolling',
                    link: 'n-rolling'
                }, {
                    text: '背景图：bg-view',
                    link: 'n-bg-view'
                }, {
                    text: '背景层/多层：view',
                    link: 'n-view'
                }, {
                    text: 'swiper：swiper',
                    link: 'n-swiper'
                }, {
                    text: '竖向swiper：swiper-v',
                    link: 'n-swiper-v'
                }, {
                    text: '画廊：gallery',
                    link: 'n-gallery'
                }, {
                    text: '竖向画廊：gallery-v',
                    link: 'n-gallery-v'
                }, {
                    text: '高度：height',
                    link: 'n-height'
                }, {
                    text: '定位：position',
                    link: 'n-position'
                }
            ]
        },
        {
            text: '输入',
            collapsed: false,
            items: [
                {
                    text: '按钮：button',
                    link: 'n-button'
                }, {
                    text: '输入：input',
                    link: 'n-input'
                }, {
                    text: '验证码：input-one',
                    link: 'n-input-one'
                }, {
                    text: '开关：switch',
                    link: 'n-switch'
                }, {
                    text: '单多选：check',
                    link: 'n-check'
                }, {
                    text: '单多选：check-static',
                    link: 'n-check-static'
                }, {
                    text: '选择：select-line',
                    link: 'n-select-line'
                }, {
                    text: '步进器：stepper',
                    link: 'n-stepper'
                }, {
                    text: '区间：slider-bar',
                    link: 'n-slider-bar'
                }, {
                    text: '搜索：search',
                    link: 'n-search'
                }, {
                    text: '选择器：picker',
                    link: 'n-picker'
                }, {
                    text: '评分：rate',
                    link: 'n-rate'
                }, {
                    text: '图片删选：image-add',
                    link: 'n-image-add'
                }
            ]
        },
        {
            text: '展示',
            collapsed: false,
            items: [
                {
                    text: '头像群：avatars',
                    link: 'n-avatars'
                }, {
                    text: '单元：cell',
                    link: 'n-cell'
                }, {
                    text: '宫格：grid-static',
                    link: 'n-grid-static'
                }, {
                    text: 'item：item',
                    link: 'n-item'
                }, {
                    text: '图标：icon',
                    link: 'n-icon'
                }, {
                    text: '标题：title',
                    link: 'n-title'
                }, {
                    text: '标签：tag',
                    link: 'n-tag'
                }, {
                    text: '标签群：tag-group',
                    link: 'n-tag-group'
                }, {
                    text: 'badge：badge',
                    link: 'n-badge'
                }, {
                    text: '倒计时：countdown',
                    link: 'n-countdown'
                }, {
                    text: '分割线：divider',
                    link: 'n-divider'
                }, {
                    text: '进度条：progress',
                    link: 'n-progress'
                }, {
                    text: '环状进度条：progress-circle',
                    link: 'n-progress-circle'
                }, {
                    text: '时间轴：timeline-item',
                    link: 'n-timeline-item'
                }, {
                    text: '折叠：collapse',
                    link: 'n-collapse'
                }, {
                    text: '结果：result',
                    link: 'n-result'
                }, {
                    text: '骨架：skeleton',
                    link: 'n-skeleton'
                }
            ]
        },
        {
            text: '弹窗与反馈',
            collapsed: false,
            items: [
                {
                    text: '遮罩：overlay',
                    link: 'n-overlay'
                }, {
                    text: '弹窗：popup',
                    link: 'n-popup'
                }, {
                    text: '弹窗：standout',
                    link: 'n-popup-standout'
                }, {
                    text: '抽屉：drawer',
                    link: 'n-drawer'
                }, {
                    text: '提示：toast',
                    link: 'n-toast'
                }, {
                    text: '提示：notice',
                    link: 'n-notice'
                }, {
                    text: '动态提示：notice-dynamic',
                    link: 'n-notice-dynamic'
                }, {
                    text: '加载中：loading',
                    link: 'n-loading'
                }, {
                    text: '气泡：popover',
                    link: 'n-popover'
                }, {
                    text: '指示器：loading-indicator',
                    link: 'n-loading-indicator'
                }
            ]
        },
        {
            text: '刷新',
            collapsed: false,
            items: [
                {
                    text: '下拉刷新：refresher',
                    link: 'n-refresher'
                }, {
                    text: '加载更多：loader',
                    link: 'n-loader'
                }
            ]
        },
        {
            text: '其他',
            collapsed: false,
            items: [
                {
                    text: '多语言-i18n',
                    link: 'i18n'
                },
                {
                    text: '动画',
                    link: 'animation.md'
                },
                {
                    text: '组件替换',
                    link: 'replace.md'
                }
            ]
        }
      ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
          text: '简介',
          collapsed: false,
          items: [
            {
              text: '指引',
              link: 'guide'
            }
          ]
        }
      ]
}

function sidebarTemplate(): DefaultTheme.SidebarItem[] {
    return [
        {
          text: '简介',
          collapsed: false,
          items: [
            {
              text: 'WHY nProX',
              link: 'guide'
            }
          ]
        }
      ]
}

export {sidebarDoc, sidebarApi, sidebarTemplate}