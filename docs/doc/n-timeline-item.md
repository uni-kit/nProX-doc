# n-timeline-item

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| bgType | string | false | '' | 背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| centerStyle | string | false | '' | 中间线外层样式 |  | 
| lineBgType | string | false | 'border' | 中间线背景主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| lineStyle | string | false | '' | 中间线样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| centerClass | string | false | '' | 中间线外层样式类 |  | 
| lineClass | string | false | '' | 中间线样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧内容 | No |  |
| badge | badge/标签内容 | No |  |
| right | 右侧内容 | No |  |

