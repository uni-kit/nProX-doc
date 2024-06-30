# n-popup

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 是否显示 | true, false | 
| keepAlive | boolean | false | false | 是否显示一次之后，再次显示不需要重新渲染。只会在第一次显示时渲染一次，该模式下不支持pos=center | true, false | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| pos | string | false | 'bottom' | 弹出方式/位置 | top,right,bottom,left,center,top-center,right-center,bottom-center,left-center,center-scale | 
| autoCenter | boolean | false | true | 在与弹出方向垂直的方向上，内容是否自动局中 | true, false | 
| bgType | string | false | '' | 弹出内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 动画周期 |  | 
| hasOverlay | boolean | false | true | 是否有遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| timingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 动画函数 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部侧定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| width | string | false | '' | 弹出内容的宽度 |  | 
| height | string | false | '' | 弹出内容的高度 |  | 
| leftOffset | string | false | '' | 内容左侧定位 |  | 
| rightOffset | string | false | '' | 内容右侧定位 |  | 
| topOffset | string | false | '' | 内容顶部定位 |  | 
| bottomOffset | string | false | '' | 内容底部定位 |  | 
| delay | number | false | 10 | 改变show之后延迟delay时间再进行显示/隐藏 |  | 
| boxStyle | string | false | '' | 弹出内容样式 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 弹出内容样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked | 遮罩层点击事件 |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

