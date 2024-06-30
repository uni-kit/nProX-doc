# n-tabbar

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| current | number | false | 0 | 当前位置 |  | 
| tabs | TabbarItemType[] | true |  | tabs |  | 
| opacity | number | false | 1 | 组件透明度 |  | 
| tabStyle | TabbarTabStyleType | false | ():TabbarTabStyleType => {<br>        return {<br>            iconStyle: 'font-size: 20px;color: #333232;', selectedIconStyle: 'font-size: 20px;color: #01A9F0;', titleStyle: '', selectedTitleStyle: '', boxStyle: '', tabsStyle: '', itemStyle: '',<br>            height: 50, badgeStyle: '', badgeTextStyle: '', dotStyle: '', iconBoxWidth: '46px', imageStyle: '', imageBoxStyle: '', imageWidthXBar: false<br>        } as TabbarTabStyleType<br>    } | tabs的样式配置 |  | 
| duration | number | false | 300 | 动画周期 |  | 
| timingFunction | string | false | 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' | 动画函数 |  | 
| top | string | false | '0' | 顶部定位 |  | 
| isSeize | boolean | false | true | 是否占位 | true, false | 
| considerXBar | boolean | false | true | 是否考虑底部安全区 | true, false | 
| xBarBgType | string | false | 'inverse' | 底部安全区的背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| xBarStyle | string | false | '' | 底部安全区的样式 |  | 
| hasIndicator | boolean | false | false | 是否包含指示内容 | true, false | 
| indicatorStyle | string | false | '' | 指示内容的样式 |  | 
| indicatorBoxStyle | string | false | '' | 指示内容的外层样式 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| tabClicked | tab项被点击时的通知 | number - 点击位置 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| default | 内容 | No |  |
| bg | tabs bg | No |  |
| tabs | tabs | No |  |
| indicator | 指示内容区域 | No |  |

## Expose
| Name | Description | Params |
| --- | --- | --- |
| prev | 上一页 |  |
| next | 下一页 |  |
| setPage | 跳到某页 | page: number - 跳转到的页码, animated: boolean - 是否带跳转动画 |

