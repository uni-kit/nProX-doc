# n-cell

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| icon | string | false | '' | 图标 |  | 
| title | string | false | '' | 标题 |  | 
| value | string | false | '' | 内容/描述 |  | 
| indicator | string | false | '' | 右侧图标或指示器 |  | 
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| titleType | string | false | 'text' | 标题颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| valueType | string | false | 'second' | 内容/描述颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorType | string | false | 'second' | 指示器颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| ps | string | false | 'l' | 组件padding主题 | 32rpx,ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll | 
| ms | string | false | '' | 组件margin主题 | ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll,auto | 
| titleSize | string | false | 'base' | 标题文字大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| valueSize | string | false | 's' | 内容/描述文字大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| valueAlign | string | false | 'right' | 内容/描述文字排版主题 | left,center,right | 
| valueLines | string | false | '1' | 内容/描述文字行数主题 | nowrap,1,2,3,4,5 | 
| valueLh | string | false | 's' | 内容/描述文字行高主题 | ss,s,base,l,ll | 
| iconSize | string | false | 'base' | 图标大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorSize | string | false | 'base' | 指示器大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| height | string | false | 'l' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| radius | string | false | 'base' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| hover | string | false | 'bg' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| space | string | false | '12rpx' | 组件内内容之间的间距 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| indicatorStyle | string | false | '' | 指示器样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| titleStyle | string | false | '' | 标题样式 |  | 
| valueStyle | string | false | '' | 内容/描述样式 |  | 
| iconBoxStyle | string | false | '' | 图标组件样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示器图标组件样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| indicatorClass | string | false | '' | 指示器图标样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| titleClass | string | false | '' | 标题样式类 |  | 
| valueClass | string | false | '' | 内容/描述样式类 |  | 
| iconBoxClass | string | false | '' | 图标组件样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示器图标组件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| cellClicked | click event | UniPointerEvent - 点击事件 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| label |  | No |  |
| default |  | No |  |
| extra |  | No |  |
| more |  | No |  |

