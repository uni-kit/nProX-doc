# n-notice

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位主题 | relative,absolute,fixed,static,sticky | 
| pos | string | false | 'top' | 出现位置 | top,bottom | 
| offset | string | false | '0' | 定位偏移量 |  | 
| visible | boolean | false | false | 是否可见。控制显示和隐藏 | true, false | 
| icon | string | false | '' | 左侧图标 |  | 
| text | string | false | '' | 文字描述 |  | 
| indicator | string | false | '' | 右侧指示器 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| height | string | false | 'base' | 组件高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| indicatorType | string | false | 'text' | 指示图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorSize | string | false | 'l' | 指示图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorStyle | string | false | '' | 指示图标样式 |  | 
| space | string | false | '12rpx' | 图标-内容-指示图标之间的间距 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示图标外层样式 |  | 
| closable | boolean | false | false | 是否允许关闭 | true, false | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| indicatorClass | string | false | '' | 指示图标样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示图标外层样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| noticeClicked | 组件被点击时通知 | UniPointerEvent - 点击事件 |
| indicatorClicked | 指示图标被点击事件 | UniPointerEvent - 点击事件 |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| show | 显示提示 |  |
| hide | 隐藏提示 |  |

