# n-button

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| bgType | string | false | '' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| text | string | false | '' | 文字 |  | 
| icon | string | false | '' | 左侧图标 |  | 
| icon2 | string | false | '' | 右侧图标 |  | 
| loading | boolean | false | false | 是否加载中 | true, false | 
| loadingSrc | string | false | '/static/ui/loading.gif' | 加载中gif图片 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| hover | string | false | 'opacity' | hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| radius | string | false | 'base' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| disabled | boolean | false | false | 是否禁用状态。禁用之后不可点击 | true, false | 
| space | string | false | '12rpx' | 组件内图标文字之间内容间距 |  | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 左侧图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 左侧图标大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| icon2Type | string | false | 'text' | 右侧图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| icon2Size | string | false | 'l' | 右侧图标大小主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| boxStyle | string | false | '' | 组件样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| iconBoxStyle | string | false | '' | 左侧图标组件样式 |  | 
| iconStyle | string | false | '' | 左侧图标样式 |  | 
| icon2BoxStyle | string | false | '' | 右侧图标组件样式 |  | 
| icon2Style | string | false | '' | 右侧图标样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| iconBoxClass | string | false | '' | 左侧图标组件样式类 |  | 
| iconClass | string | false | '' | 左侧图标样式类 |  | 
| icon2BoxClass | string | false | '' | 右侧图标组件样式类 |  | 
| icon2Class | string | false | '' | 右侧图标样式类 |  | 
| loadingWidth | string | false | '36rpx' | 加载中图片宽度 |  | 
| loadingHeight | string | false | '36rpx' | 加载中图片高度 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| buttonClicked | 按钮点击事件。disabled状态下不响应 | UniPointerEvent - 点击事件传递的参数 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 默认内容 | No |  |
| extra | 额外内容 | No |  |

