# n-navbar

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| lefts | NavItemType[] | false |  | 左侧按钮组 |  | 
| title | string | false | '' | 标题文字 |  | 
| icon | string | false | '' | 标题图标 |  | 
| rights | NavItemType[] | false |  | 右侧按钮组 |  | 
| bgType | string | false | 'nav' | 背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| border | string | false | '' | 边框主题 | none,white,black,default,light,middle,dark,primary,success,warning,error,inverse,custom,link,text,text-second,text-third,text-forth,text-place,text-disabled,left-white,left-black,top-white,top-black,right-white,right-black,bottom-white,bottom-black,left-default,left-light,left-middle,left-dark,left-primary,left-success,left-warning,left-error,left-inverse,left-custom,left-link,left-text,left-text-second,left-text-third,left-text-forth,left-text-place,left-text-disabled,top-default,top-light,top-middle,top-dark,top-primary,top-success,top-warning,top-error,top-inverse,top-custom,top-link,top-text,top-text-second,top-text-third,top-text-forth,top-text-place,top-text-disabled,right-default,right-light,right-middle,right-dark,right-primary,right-success,right-warning,right-error,right-inverse,right-custom,right-link,right-text,right-text-second,right-text-third,right-text-forth,right-text-place,right-text-disabled,bottom-default,bottom-light,bottom-middle,bottom-dark,bottom-primary,bottom-success,bottom-warning,bottom-error,bottom-inverse,bottom-custom,bottom-link,bottom-text,bottom-text-second,bottom-text-third,bottom-text-forth,bottom-text-place,bottom-text-disabled | 
| titleType | string | false | 'nav-title' | 标题文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| titleSize | string | false | 'nav-title' | 标题文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| titleStyle | string | false | '' | 标题文字样式 |  | 
| iconType | string | false | 'nav-title' | 标题图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| iconSize | string | false | 'nav-title' | 标题图标尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| iconStyle | string | false | '' | 标题图标样式 |  | 
| itemIconType | string | false | 'nav-icon' | 按钮图标颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| itemIconSize | string | false | 'nav-icon' | 按钮图标尺寸出题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| itemIconStyle | string | false | '' | 按钮图标样式 |  | 
| itemTextType | string | false | 'nav-item' | 按钮文字颜色主题 | black,white,transparent,default,primary,success,warning,error,custom,link,text,second,third,forth,place,disabled,inverse,nav-title,nav-icon,nav-item | 
| itemTextSize | string | false | 'nav-item' | 按钮文字尺寸主题 | nav-title,nav-icon,nav-item,ss,s,base,l,ll | 
| itemTextStyle | string | false | '' | 按钮文字样式 |  | 
| height | number | false | 44 | 导航栏高度。px |  | 
| includeStatus | boolean | false | true | 是否包含状态栏 | true, false | 
| isSeize | boolean | false | true | 是否存在占位 | true, false | 
| fixed | boolean | false | true | 是否fixed定位固定 | true, false | 
| zindex | string | false | '' | z-index便捷设置 |  | 
| enableBack | boolean | false | false | 是否左侧第一个按钮默认返回上一页 | true, false | 
| leftStyle | string | false | '' | 左侧区域样式 |  | 
| leftBgType | string | false | '' | 左侧区域背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| leftItemStyle | string | false | '' | 左侧按钮样式 |  | 
| rightStyle | string | false | '' | 右侧区域样式 |  | 
| rightBgType | string | false | '' | 右侧区域背景色主题 | white,black,transparent,nav,default,primary,success,warning,error,custom,link,light,middle,dark,inverse,page,hover,hover-dark,mask,mask-dark,text,text-second,text-third,text-forth,text-inverse,text-place,text-disabled,border,border-light,border-middle,border-dark,none,gradient | 
| rightItemStyle | string | false | '' | 右侧按钮样式 |  | 
| centerStyle | string | false | '' | 中间标题区域样式 |  | 
| statusNavStyle | string | false | '' | 状态栏+导航栏整体样式 |  | 
| navStyle | string | false | '' | 导航栏样式 |  | 
| badgeConfig | BadgeType | false |  | 按钮的badge设置 |  | 
| titleClass | string | false | '' | 标题文字样式类 |  | 
| iconClass | string | false | '' | 标题图标样式类 |  | 
| itemIconClass | string | false | '' | 按钮图标样式类 |  | 
| itemTextClass | string | false | '' | 按钮文字样式类 |  | 
| leftClass | string | false | '' | 左侧区域样式类 |  | 
| leftItemClass | string | false | '' | 左侧按钮项样式类 |  | 
| rightClass | string | false | '' | 右侧区域样式类 |  | 
| rightItemClass | string | false | '' | 右侧按钮项样式类 |  | 
| centerClass | string | false | '' | 中间区域样式类 |  | 
| statusNavClass | string | false | '' | 状态栏+导航栏样式类 |  | 
| navClass | string | false | '' | 导航栏样式类 |  | 

## Emits
| Name | Description | Params |
| --- | --- | --- | 
| leftAction | 左侧按钮点击事件 | number - 左侧按钮位置。从左到右计数 |
| centerAction | 中间标题点击事件 |  |
| rightAction | 右侧按钮点击事件 | number - 右侧按钮位置。从左到右计数 |

## Slots
| Name | Description | Scoped | Bindings |
| --- | --- | --- | --- |
| left | 左侧按钮区域 | No |  |
| center | 中间标题区域 | No |  |
| right | 右侧按钮区域 | No |  |
| extra | 补充内容 | No |  |

