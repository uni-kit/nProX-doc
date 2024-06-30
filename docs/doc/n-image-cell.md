# n-image-cell

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| src | string | false | '' | 图片地址 |  | 
| radius | string | false | 's' | 图片圆角主题 | ss,s,base,l,ll,loading,none | 
| imageStyle | string | false | '' | 图片样式 |  | 
| imageClass | string | false | '' | 图片样式类 |  | 
| icon | string | false | 'close' | 删除图标 |  | 
| iconType | string | false | 'inverse' | 删除图标的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'ss' | 删除图标的尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconRadius | string | false | 'll' | 删除图标的圆角主题 | ss,s,base,l,ll,loading,none | 
| iconBorder | string | false | '' | 删除图标的边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| iconBgType | string | false | 'mask-dark' | 删除图标的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| delete | 删除图片事件 | string - 删除的图片地址 |
| preview | 预览事件 | string - 预览的图片地址 |

