# n-notice-dynamic

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| position | string | false | 'fixed' | 定位类型主题 | relative,absolute,fixed,static,sticky | 
| holdDuration | number | false | 3000 | 显示后停留时间 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 圆角主题 | ss,s,base,l,ll,loading,none | 
| boxClass | string | false | '' | 组件样式类 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标盒子样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| close |  |  |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容区域 | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| show |  |  |
| hide |  |  |

