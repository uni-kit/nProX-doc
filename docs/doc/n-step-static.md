# n-step-static

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | IconTextActiveType[] | true |  | 内容 |  | 
| current | number | false | 0 | 当前位置 |  | 
| width | string | false | '750rpx' | 整体宽度 |  | 
| left | string | false | '84rpx' | 线条部分，左右两边与整体盒子的间距/空白 |  | 
| space | string | false | '48rpx' | 线条之间的间隙 |  | 
| lineHeight | string | false | '6rpx' | 线条高度 |  | 
| lineBgType | string | false | 'middle' | 线条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeLineBgType | string | false | 'primary' | 活跃线条的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| hasText | boolean | false | true | 是否具备描述文字 | true, false | 
| iconTextSpace | string | false | '18rpx' | 图标与文字之间的间隙 |  | 
| iconSize | string | false | '48rpx' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'inverse' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeIconType | string | false | 'inverse' | 活跃图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconRadius | string | false | 'll' | 图标圆角 | ss,s,base,l,ll,loading,none | 
| iconBgType | string | false | '' | 图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeIconBgType | string | false | '' | 活跃图标背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| textType | string | false | 'second' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeTextType | string | false | 'text' | 活跃文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| linesBoxStyle | string | false | '' | 线条外层盒子样式 |  | 
| itemsBoxStyle | string | false | '' | 内容项外层盒子样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| linesBoxClass | string | false | '' | 线条外层盒子样式类 |  | 
| itemsBoxClass | string | false | '' | 内容项外层盒子样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| itemClicked | 步骤项点击事件 | number - 点击的索引 |

