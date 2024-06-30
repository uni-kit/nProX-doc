# n-icon

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| stop | boolean | false | false | 是否阻止冒泡 | true, false | 
| name | string | false | '' | 图标名字或者图片地址 |  | 
| type | string | false | '' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| size | string | false | '' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| hover | string | false | 'opacity' | 组件hover效果主题 | opacity,bg,bg-dark,bg-opacity | 
| boxClass | string | false | '' | 组件样式类。boxClass与boxStyle均不设置的时候，就不存在外层盒子 |  | 
| boxStyle | string | false | '' | 图标样式。boxClass与boxStyle均不设置的时候，就不存在外层盒子 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| iconClicked | 图标点击事件 | UniPointerEvent - 点击事件 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 其他内容 | No |  |

