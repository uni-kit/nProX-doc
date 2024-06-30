# n-popup-standout

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 显示控制 | true, false | 
| pos | string | false | 'bottom' | 弹出方式/位置 | top,right,bottom,left,top-center,right-center,bottom-center,left-center | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| autoCenter | boolean | false | true | 在弹出方向的垂直方向上，是否自动居中内容 | true, false | 
| bgType | string | false | '' | 弹出内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| duration | number | false | 300 | 动画周期 |  | 
| hasOverlay | boolean | false | true | 是否具备遮罩层 | true, false | 
| overlayBgType | string | false | 'mask' | 遮罩层背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| overlayBg | string | false | '' | 遮罩层背景色 |  | 
| overlayDuration | number | false | 300 | 遮罩层动画周期 |  | 
| overlayTimingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 遮罩层动画函数 |  | 
| timingFunction | string[] | false | ():string[]=>['ease-in-out', 'ease-out'] as string[] | 动画函数 |  | 
| left | string | false | '0' | 遮罩层左侧定位 |  | 
| right | string | false | '0' | 遮罩层右侧定位 |  | 
| top | string | false | '0' | 遮罩层顶部定位 |  | 
| bottom | string | false | '0' | 遮罩层底部定位 |  | 
| standout | string | false | '0' | 凸出部分高度 |  | 
| width | string | false | '' | 弹出内容宽度 |  | 
| height | string | false | '' | 弹出内容的高度 |  | 
| leftOffset | string | false | '' | 弹窗的左侧定位 |  | 
| rightOffset | string | false | '' | 弹窗的右侧定位 |  | 
| topOffset | string | false | '' | 弹窗的顶部定位 |  | 
| bottomOffset | string | false | '' | 弹窗的底部定位 |  | 
| initWithAni | boolean | false | true | mounted时是否具备动画效果 | true, false | 
| initDelay | number | false | 200 | mounted中延迟delay时间再显示 |  | 
| initDuration | number | false | 300 | 初始化的动画周期 |  | 
| boxStyle | string | false | '' | 弹窗样式 |  | 
| overlayStyle | string | false | '' | 遮罩层样式 |  | 
| overlayClass | string | false | '' | 遮罩层样式类 |  | 
| boxClass | string | false | '' | 弹窗的样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked | 遮罩层点击事件 |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 弹窗内容 | No |  |

