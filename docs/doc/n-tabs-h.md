# n-tabs-h

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| items | ItemBadgeType[] | true |  | tabs内容数组 |  | 
| value | number | false | 0 | 当前位置 |  | 
| last | number | false | 0 | 上次位置 |  | 
| swiperWidth | string | false | '750rpx' | 与swiper进度联动时swiper的宽度 |  | 
| isTap | boolean | false | true | 是否处于点击tab项的切换 | true, false | 
| justify | string | false | 'start' | justify-content主题值 | start,center,end,between,around | 
| scrollSize | string | false | '750rpx' | 滚动区域的宽度 |  | 
| textSize | string | false | 'base' | 文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| activeTextSize | string | false | 'base' | 当前文字的尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| bgType | string | false | 'inverse' | 组件的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| textType | string | false | 'text' | 文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| activeTextType | string | false | 'primary' | 当前文字的颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| height | string | false | '80rpx' | 高度 |  | 
| width | string | false | '120rpx' | tab项的宽度。0表示动态宽度，跟随内容 |  | 
| left | string | false | '0' | 左侧空白区域的宽度 |  | 
| right | string | false | '0' | 右侧空白区域的宽度 |  | 
| space | string | false | '0px' | tab项之间的间隙 |  | 
| border | string | false | '' | 组件边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| badgeConfig | BadgeType | false |  | tab项的badge设置 |  | 
| hasIndicator | boolean | false | true | 是否具备指示内容 | true, false | 
| indicatorType | string | false | 'primary' | 指示内容的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| indicatorWidth | string | false | '80rpx' | 指示内容的宽度。0表示动态宽度，跟随内容 |  | 
| indicatorHeight | string | false | '5rpx' | 指示内容的高度 |  | 
| indicatorRadius | string | false | '4rpx' | 指示内容的圆角 |  | 
| absIndicator | boolean | false | true | 指示内容是否使用定位 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| tabsStyle | string | false | '' | tabs选项盒子样式 |  | 
| textStyle | string | false | '' | 文字样式 |  | 
| activeTextStyle | string | false | '' | 当前文字样式 |  | 
| itemStyle | string | false | '' | tab项样式 |  | 
| activeItemStyle | string | false | '' | 当前tab项样式 |  | 
| indicatorStyle | string | false | '' | 指示内容样式 |  | 
| updateTime | number | false | 0 | 刷新时机。改变会引起组件刷新 |  | 
| delay | number | false | -1 | onMounted中延迟delay再进行初始化 |  | 
| updateDelay | number | false | -1 | tabs改变后延迟updateDelay再进行初始化 |  | 
| hoverTop | boolean | false | false | 指示内容是否处于顶部 | true, false | 
| boxClass | string | false | '' | 组件样式类 |  | 
| tabsClass | string | false | '' | tabs盒子样式类 |  | 
| textClass | string | false | '' | 文字样式类 |  | 
| activeTextClass | string | false | '' | 当前文字样式类 |  | 
| itemClass | string | false | '' | tab项样式类 |  | 
| activeItemClass | string | false | '' | 当前tab项样式类 |  | 
| indicatorClass | string | false | '' | 指示内容样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| change | 点击tab时的通知 | number - 点击的tab位置索引 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| indicator | 自定义指示内容 | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| toCurrentIndex | 滚动到某个位置 | index: number - 位置索引 |
| onSwiperTransition | 跟随swiper进度联动 | dx: number - swiper移动距离 |

