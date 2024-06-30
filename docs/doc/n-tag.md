# n-tag

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| text | string | false | '' | 文字内容 |  | 
| value | string | false | '' | 唯一值标识 |  | 
| selected | boolean | false | false | 是否选中 | true, false | 
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| selectedBgType | string | false | '' | 选中时的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| selectedTextType | string | false | 'text' | 选中时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| disabledTextType | string | false | 'disabled' | 禁用时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | 'all' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| selectedBorder | string | false | 'all' | 选中时的边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | 'base' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| space | string | false | '16rpx' | 左右两侧padding值 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| selectedTextStyle | string | false | '' | 选中时文字样式 |  | 
| disabledTextStyle | string | false | '' | 禁用时文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| selectedBoxStyle | string | false | '' | 选中时组件样式 |  | 
| disabledBoxStyle | string | false | '' | 禁用时组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| selectedTextClass | string | false | '' | 选中时文字样式类 |  | 
| disabledTextClass | string | false | '' | 禁用时文字样式类 |  | 
| selectedBoxClass | string | false | '' | 选中时组件样式类 |  | 
| disabledBoxClass | string | false | '' | 禁用时组件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| tagClicked | 组件点击事件通知 | string - 唯一值 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |
| extra | 额外补充 | No |  |

