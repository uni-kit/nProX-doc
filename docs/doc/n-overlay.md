# n-overlay

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | false | 是否显示 | true, false | 
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| duration | number | false | 400 | 动画周期 |  | 
| timingFunction | string[] | false | ():string[] => ['ease-in-out', 'ease-out'] | 动画函数 |  | 
| bgType | string | false | 'mask' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| bg | string | false | '' | 背景色 |  | 
| canAutoClose | boolean | false | false | 是否点击之后自动关闭 | true, false | 
| left | string | false | '0' | 左侧定位 |  | 
| right | string | false | '0' | 右侧定位 |  | 
| top | string | false | '0' | 顶部定位 |  | 
| bottom | string | false | '0' | 底部定位 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| forStandout | boolean | false | false | 是否是standout组件的overlay | true, false | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| overlayClicked |  |  |
| overlayClicking |  |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 定制内容。默认空白 | No |  |

