# n-switch

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | 'light' | 组件off状态下背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| onBgType | string | false | 'primary' | 组件on状态下背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| ballBgType | string | false | 'inverse' | 移动球/开关的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| animateBgType | string | false | '' | 组件动画效果的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| width | string | false | '102rpx' | 组件宽度 |  | 
| height | string | false | '62rpx' | 组件高度 |  | 
| ballSize | string | false | '58rpx' | 移动球/开关的尺寸 |  | 
| ballBg | string | false | '' | 移动球/开关的背景色 |  | 
| animateBg | string | false | '' | 动画效果的背景色 |  | 
| bg | string | false | '' | off状态下的背景色 |  | 
| onBg | string | false | '' | on状态下的背景色 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| animateClass | string | false | '' | 动画效果的样式类 |  | 
| ballClass | string | false | '' | 移动球/开关的的样式类 |  | 

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| on | 打开时的内容 | No |  |
| off | 关闭时的内容 | No |  |

