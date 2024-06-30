# n-bg-view

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| src | string | false | '' | 背景图 |  | 
| mode | string | false | 'aspectFill' | 背景图剪裁、缩放模式 |  | 
| ms | string | false | '' | 组件的margin-space主题 | ss,s,base,l,ll,left-ss,left-s,left-base,left-l,left-ll,top-ss,top-s,top-base,top-l,top-ll,right-ss,right-s,right-base,right-l,right-ll,bottom-ss,bottom-s,bottom-base,bottom-l,bottom-ll,auto | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| imageStyle | string | false | '' | 背景图样式 |  | 
| imageClass | string | false | '' | 背景图样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| error | Image error event. | UniImageErrorEvent - error while load. event.detail = { errMsg } |
| load | Image loaded success event. | UniImageLoadEvent - load success. event.detail = { width: '图片宽度px', height: '图片高度px' } |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default |  | No |  |

