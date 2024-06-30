# n-countdown

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| time | number | false | 0 | 目标时间戳 |  | 
| interval | number | false | 1000 | 计时周期。默认1s计时一次 |  | 
| tpl | string | false | '{h}:{m}:{s}' | 解析格式{d}天{h}:{m}:{s} |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| itemBgType | string | false | '' | 内容项背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| itemBorder | string | false | '' | 内容项边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| itemRadius | string | false | '' | 内容项圆角主题 | ss,s,base,l,ll,loading,none | 
| itemTextType | string | false | 'text' | 内容文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| itemTextSize | string | false | 'l' | 内容文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| itemHeight | string | false | 'base' | 内容高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| itemWidth | string | false | '0' | 内容项宽度。0的时候默认会带上padding-left:24rpx;padding-right:24rpx; |  | 
| indicatorTextType | string | false | 'text' | 指示器颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorTextSize | string | false | 'l' | 指示器文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorWidth | string | false | '60rpx' | 指示器文字宽度。0的时候就是默认文字宽度 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| itemBoxStyle | string | false | '' | 内容项样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示器样式 |  | 
| itemTextStyle | string | false | '' | 内容项文字样式 |  | 
| indicatorTextStyle | string | false | '' | 指示器文字样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| itemBoxClass | string | false | '' | 内容项样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示器样式类 |  | 
| itemTextClass | string | false | '' | 内容项文字样式类 |  | 
| indicatorTextClass | string | false | '' | 指示器文字样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| completed | 倒计时完成事件 |  |

