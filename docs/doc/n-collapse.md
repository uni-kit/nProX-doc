# n-collapse

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | string | false | '' | 该内容的唯一值，手风琴效果时必须设置 |  | 
| current | string | false | '' | 当前打开内容的唯一值。手风琴效果就是通过current和value来控制关闭和打开 |  | 
| show | boolean | false | false | 是否打开 | true, false | 
| duration | number | false | 300 | 打开/关闭的动画周期 |  | 
| timingFunction | string | false | 'ease' | 打开/关闭的动画函数 |  | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| auto | boolean | false | false | 点击头部内容时，是否自动打开/关闭 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| headStyle | string | false | '' | 头部样式 |  | 
| bodyStyle | string | false | '' | 主体内容样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| headClass | string | false | '' | 头部样式类 |  | 
| bodyClass | string | false | '' | 主体样式类 |  | 
| icon | string | false | '' | 关闭图标 |  | 
| iconType | string | false | 'third' | 关闭图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'base' | 关闭图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| delay | number | false | 0 | onMounted之后延迟delay毫秒之后开始初始化打开/收起状态 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| toggle | 切换打开/收起状态 | boolean - 点击未变化前，内容处于的状态 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| head | 头部内容 | No |  |
| default | 主体内容区域 | No |  |
| extra | 额外补充内容 | No |  |

