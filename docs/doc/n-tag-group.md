# n-tag-group

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string[] | true |  | 选中的值，数组 |  | 
| items | ItemSelectionType[] | true |  | 内容项数组 |  | 
| limits | number | false | 0 | 限制选择数量。0表示没有限制 |  | 
| leastOne | boolean | false | false | 至少选中1项。点按唯一选中的项不会取消选中 | true, false | 
| column | number | false | 0 | 每行展示的tag数 |  | 
| rowSpace | string | false | '16rpx' | 行之间的间距 |  | 
| columnSpace | string | false | '16rpx' | 列之间的间距 |  | 
| disabled | boolean | false | false | 是否禁用 | true, false | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| boxStyle | string | false | '' | 组件样式 |  | 
| dyBoxStyle | string | false | '' | column=0时，包含tags的盒子的样式 |  | 
| tagBgType | string | false | '' | 标签背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| tagSelectedBgType | string | false | '' | 标签选中时背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| tagTextType | string | false | 'text' | 标签文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| tagSelectedTextType | string | false | 'text' | 标签选中时文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| tagTextSize | string | false | 'base' | 标签文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| tagHeight | string | false | 'base' | 标签高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| tagBorder | string | false | 'all' | 标签边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| tagSelectedBorder | string | false | 'all' | 选中时标签边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| tagRadius | string | false | 'base' | 标签圆角主题 | ss,s,base,l,ll,loading,none | 
| tagSpace | string | false | '16rpx' | 标签内左右padding |  | 
| textStyle | string | false | '' | 标签文字样式 |  | 
| selectedTextStyle | string | false | '' | 标签文字选中时样式 |  | 
| disabledTextStyle | string | false | '' | 标签文字禁用时样式 |  | 
| tagStyle | string | false | '' | 标签样式 |  | 
| selectedTagStyle | string | false | '' | 选中时标签样式 |  | 
| disabledTagStyle | string | false | '' | 禁用时标签样式 |  | 
| updateTime | number | false | 0 | 刷新时机。改变此值立马刷新 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| dyBoxClass | string | false | '' | column=0时，tags盒子的样式类 |  | 
| textClass | string | false | '' | 标签文字样式类 |  | 
| selectedTextClass | string | false | '' | 选中时标签文字样式类 |  | 
| disabledTextClass | string | false | '' | 禁用时标签文字样式类 |  | 
| tagClass | string | false | '' | 标签样式类 |  | 
| selectedTagClass | string | false | '' | 选中时标签样式类 |  | 
| disabledTagClass | string | false | '' | 禁用时标签样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| overed | 超过限制数量通知 |  |
| change | 选中的值改变触发的通知 | string[] - 选中的值，数组 |

