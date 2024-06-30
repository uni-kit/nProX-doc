# n-input

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| name | string | false | '' | 表单的控件名称 |  | 
| type | string | false | 'text' | 输入类型 | text,number,digit,tel | 
| maxlength | number | false | 140 | 最大输入长度。0表示不限制 |  | 
| password | boolean | false | false | 是否密码输入框 | true, false | 
| autoFocus | boolean | false | false | 是否自动聚焦 | true, false | 
| focus | boolean | false | false | 是否focus | true, false | 
| disabled | boolean | false | false | 是否禁止输入 | true, false | 
| icon | string | false | '' | 左侧图标 |  | 
| label | string | false | '' | 左侧提示label/title |  | 
| placeholder | string | false | '请输入内容' | 占位提示 |  | 
| indicator | string | false | '' | 右侧指示图标 |  | 
| valueAlign | string | false | 'left' | 内容排版方式 | left,center,right | 
| bgType | string | false | '' | 组件背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| height | string | false | 'base' | 组件高度主题 | statusbar,ss,s,base,l,ll,0,auto,1px,100p,100vh,min-100p,min-100vh,any,mp-any | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| radius | string | false | '' | 组件圆角主题 | ss,s,base,l,ll,loading,none | 
| valueType | string | false | 'text' | 内容颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| valueSize | string | false | 'base' | 内容尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconType | string | false | 'text' | 图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'l' | 图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| labelType | string | false | 'text' | 标签颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| labelSize | string | false | 'base' | 标签尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| indicatorType | string | false | 'text' | 指示图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| indicatorSize | string | false | 'l' | 指示图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| placeType | string | false | 'place' | 占位提示颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| placeSize | string | false | 'base' | 占位提示尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| adjust | boolean | false | true | adjust-position.键盘弹起时，是否自动上推页面 | true, false | 
| cursor | number | false | 0 | focus时的光标位置 |  | 
| cursorSpacing | number | false | 0 | 光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |  | 
| cursorColor | string | false | '' | 光标颜色 |  | 
| confirmType | string | false | 'done' | 设置键盘右下角按钮的文字，仅在 type为text 时生效 | send,search,next,go,done | 
| confirmHold | boolean | false | false | 点击键盘右下角按钮时是否保持键盘不收起 | true, false | 
| holdKeyboard | boolean | false | false | focus时，点击页面的时候不收起键盘 | true, false | 
| selectionStart | number | false | -1 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 |  | 
| selectionEnd | number | false | -1 | 光标结束位置，自动聚集时有效，需与selection-satrt搭配使用 |  | 
| iconStyle | string | false | '' | 图标样式 |  | 
| iconBoxStyle | string | false | '' | 图标外层样式 |  | 
| labelStyle | string | false | '' | 标签样式 |  | 
| valueStyle | string | false | '' | 内容样式 |  | 
| indicatorStyle | string | false | '' | 指示图标样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示图标外层样式 |  | 
| boxStyle | string | false | '' | 组件样式 |  | 
| space | string | false | '12rpx' | 图标-标签-内容-指示图标之间的间距 |  | 
| placeStyle | string | false | 'white-space:nowrap;' | 占位提示的样式 |  | 
| iconClass | string | false | '' | 图标样式类 |  | 
| iconBoxClass | string | false | '' | 图标外层样式类 |  | 
| labelClass | string | false | '' | 标签样式类 |  | 
| valueClass | string | false | '' | 内容样式类 |  | 
| indicatorClass | string | false | '' | 指示图标样式类 |  | 
| indicatorBoxClass | string | false | '' | 指示图标外层样式类 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| placeClass | string | false | '' | 提示样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| keyboardHeightChange | 键盘高度改变时触发事件 | UniInputKeyboardHeightChangeEvent - `event.detail = {height, duration}` |
| confirm | 点击完成按钮时触发 | event - `event.detail = {value: value}` |
| focus | 输入框聚焦时触发 | UniInputFocusEvent - `event.detail = { value, height }`，height 为键盘高度 |
| blur | 输入框失去焦点时触发

@@property {UniInputBlurEvent} event `event.detail = {value: value}` |  |
| indicatorClicked | 指示图标点击事件 | UniPointerEvent - 点击事件 |
| inputClicked | 禁用时输入框的点击事件 | UniPointerEvent - 点击事件 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| label | label内容 | No |  |
| extra | 额外内容 | No |  |

