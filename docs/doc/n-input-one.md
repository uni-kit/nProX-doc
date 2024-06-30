# n-input-one

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| maxlength | number | false | 4 | 最大输入长度。一般为4,5,6 |  | 
| password | boolean | false | false | 是否密码输入框 | true, false | 
| cursor | boolean | false | false | 是否具备光标效果 | true, false | 
| focus | boolean | false | false | 是否聚焦 | true, false | 
| disabled | boolean | false | false | 是否禁止输入 | true, false | 
| mode | string | false | 'middle' | 展示模式。box为输入框，可带光标。middle为中间横线。bottom为下划线 | box,middle,bottom | 
| adjust | boolean | false | true | adjust-position.键盘弹起时，是否自动上推页面 | true, false | 
| width | string | false | '100rpx' | 内容项的宽度。等宽高 |  | 
| space | string | false | '12rpx' | 内容项之间的间距 |  | 
| dotStyle | string | false | 'width:16rpx;height:16rpx;border-radius:16rpx;background-color:#000000;' | 圆点样式。密码输入时生效 |  | 
| lineStyle | string | false | 'width:80rpx;height:8rpx;border-radius:12rpx;background-color:#000000;' | 横线/下划线样式。mode为bottom/line时生效 |  | 
| activeLineStyle | string | false | '' | 即将输入的内容项的横线/下划线样式 |  | 
| cursorStyle | string | false | 'width:1px;height:42rpx;background-color:#8F9CFF;' | 光标样式 |  | 
| valueStyle | string | false | 'font-size:70rpx;font-weight:700;color:#000000;' | 内容文字样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| itemStyle | string | false | '' | 内容项样式 |  | 
| activeItemStyle | string | false | '' | 当前内容项样式 |  | 
| dotClass | string | false | '' | 圆点样式类 |  | 
| lineClass | string | false | '' | 横线样式类 |  | 
| activeLineClass | string | false | '' | 当前输入项横线样式类 |  | 
| cursorClass | string | false | '' | 光标样式类 |  | 
| valueClass | string | false | '' | 内容文字样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| itemClass | string | false | '' | 内容项样式类 |  | 
| activeItemClass | string | false | '' | 当前内容项样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| keyboardHeightChange | 键盘高度改变时触发事件 | UniInputKeyboardHeightChangeEvent - `event.detail = {height, duration}` |
| confirm | 点击完成按钮时触发 | event - `event.detail = {value: value}` |
| focus | 输入框聚焦时触发 | UniInputFocusEvent - `event.detail = { value, height }`，height 为键盘高度 |
| blur | 输入框失去焦点时触发

@@property {UniInputBlurEvent} event `event.detail = {value: value}` |  |
| finish | 输入长度达到最大限制时触发 | string - 输入的内容 |

