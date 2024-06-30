# n-slider-bar

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| value | number | false | 0 | 当前值，range模式下表示选择范围的左侧值 |  | 
| value2 | number | false | 0 | 当前最大值，range模式下表示选择范围的右侧值 |  | 
| min | number | false | 0 | 最小值 |  | 
| max | number | false | 10 | 最大值 |  | 
| range | boolean | false | false | 是否范围模式 | true, false | 
| crossCenter | boolean | false | true | 可拖动的标记是不是垂直居中于拖动条 | true, false | 
| width | string | false | '' | 拖动条背景条宽度 |  | 
| height | string | false | '2px' | 拖动条背景条高度 |  | 
| bgType | string | false | 'middle' | 拖动条背景条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| activeBgType | string | false | 'primary' | 拖动条活跃条背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| barStyle | string | false | '' | 背景条样式 |  | 
| activeBarStyle | string | false | '' | 活跃条样式 |  | 
| indicatorStyle | string | false | '' | 拖动部件样式 |  | 
| indicator2Style | string | false | '' | 右侧拖动部件样式 |  | 
| barClass | string | false | '' | 背景条样式类 |  | 
| activeBarClass | string | false | '' | 活跃条样式类 |  | 
| indicatorClass | string | false | '' | 拖动部件样式类 |  | 
| indicator2Class | string | false | '' | 右侧拖动部件样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| change | 左侧拖动部件拖动进度改变通知 | number - 值 |
| change1 | 左侧拖动部件拖动进度改变通知 | number - 值 |
| change2 | 右侧拖动部件拖动进度改变通知 | number - 值 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 拖动内容 | No |  |
| other | 拖动内容2 | No |  |

