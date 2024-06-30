# n-drawer

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| pos | string | false | 'bottom' | 打开/退出的位置/方向 | left,top,right,bottom | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| autoCenter | boolean | false | false | 与pos方向垂直的方向，是否自动局中显示 | true, false | 
| bgType | string | false | '' | 内容背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 打开/收起的动画周期 |  | 
| auto | boolean | false | true | 停止拖动之后是否自动打开/收起 | true, false | 
| allowAll | boolean | false | true | 是否全部内容区域可拖动 | true, false | 
| allowSwipe | boolean | false | true | 是否可以快速swipe打开/关闭 | true, false | 
| onlySwipe | boolean | false | false | 仅允许swipe打开 | true, false | 
| hasOverlay | boolean | false | true | 是否有遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| standout | string | false | '0' | 提前凸出的内容高度 |  | 
| standPosition | string | false | 'relative' | 凸出的定位主题 | relative,absolute,fixed,static,sticky | 
| standClass | string | false | '' | 凸出的样式类 |  | 
| standStyle | string | false | '' | 凸出的样式 |  | 
| timingFunction | string | false | 'ease-in-out' | 动画函数 |  | 
| initWithAni | boolean | false | true | 事先凸出的部分是否有弹出动画效果 | true, false | 
| initDelay | number | false | 200 | onMounted之后延迟一段时间再进行初始化弹出动画 |  | 
| initDuration | number | false | 300 | 初始化弹出的动画周期 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| width | string | false | '0' | 内容宽度。pos=left/right的时候必须设置 |  | 
| height | string | false | '0' | 内容高度。pos=top/bottom的时候必须设置 |  | 
| leftOffset | string | false | '' | 内容的左侧定位 |  | 
| rightOffset | string | false | '' | 内容的右侧定位 |  | 
| topOffset | string | false | '' | 内容的顶部定位 |  | 
| bottomOffset | string | false | '' | 内容的底部定位 |  | 
| openRate | number | false | 0.4 | 打开多少占比可以自动打开 |  | 
| closeRate | number | false | 0.4 | 收起多少占比可以自动收起 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| start | 开始拖动事件 |  |
| end | 拖动结束事件 | DrawerEndType - `{offset: number; max: number}` |
| overlayClicked | 遮罩层点击事件 |  |
| open | 打开通知 |  |
| close | 关闭通知 |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| overlay | 遮罩层内插槽 | No |  |
| standout | standout突出内容插槽。仅在局部拖动时有效 | No |  |
| default | 内容 | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| initShow | 初始化动画展示 |  |
| show | 打开抽屉 |  |
| hide | 关闭抽屉 |  |

