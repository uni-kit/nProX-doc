# n-rolling

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| times | number | false | 0 | 循环次数。0表示无限循环 |  | 
| auto | boolean | false | true | 是否自动滚动 | true, false | 
| text | string | false | '' | 文字内容 |  | 
| textType | string | false | 'error' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| textStyle | string | false | '' | 文字样式 |  | 
| height | string | false | 'base' | 高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| duration | number | false | 20000 | 滚动周期 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| start | 手动开启滚动 |  |
| stop | 关闭滚动 |  |

