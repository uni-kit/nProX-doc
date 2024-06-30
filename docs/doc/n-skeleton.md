# n-skeleton

## Props
| Name | Type | Required | Default | Description | Choices |
| --- | --- | --- | --- | --- | --- |
| flex | string | false | 'row' | flex-direction主题 | row,row-reverse,column,column-reverse | 
| align | string | false | 'center' | align-items主题 | start,center,end,stretch,baseline,self-auto,self-start,self-center,self-end,self-stretch,self-baseline,content-start,content-center,content-end,content-between,content-around,content-stretch | 
| justify | string | false | 'center' | justify-content主题 | start,center,end,between,around | 
| space | string | false | '24rpx' | 内容之间的间距 |  | 
| bg | string | false | '#CCC8C8' | 骨架内容项的背景色 |  | 
| avatar | boolean | false | true | 是否有头像 | true, false | 
| avatarWidth | string | false | '120rpx' | 头像宽度 |  | 
| avatarHeight | string | false | '120rpx' | 头像高度 |  | 
| avatarRadius | string | false | '12rpx' | 头像圆角 |  | 
| rows | number | false | 2 | 行数 |  | 
| rowsWidth | string[] | false | ():string[] => ['400rpx'] | 行的宽度。长度可以小于rows，未提供的row宽度使用最后一个宽度数据 |  | 
| rowsHeight | string[] | false | ():string[] => ['12rpx'] | 行的高度。长度可以小于rows，未提供的row高度使用最后一个高度数据 |  | 
| rowsRadius | string | false | '12rpx' | 行的圆角 |  | 
| rowsAlign | string | false | 'center' | 行在盒子中align-items的主题 | start,center,end,stretch,baseline,self-auto,self-start,self-center,self-end,self-stretch,self-baseline,content-start,content-center,content-end,content-between,content-around,content-stretch | 
| rowsJustify | string | false | 'center' | 行在盒子中justify-content的主题 | start,center,end,between,around | 
| rowsSpace | string | false | '20rpx' | 行之间的间距 |  | 
| rowsStyle | string | false | '' | 行的样式 |  | 
| indicator | boolean | false | true | 是否具备指示器 | true, false | 
| indicatorWidth | string | false | '120rpx' | 指示器的宽度 |  | 
| indicatorHeight | string | false | '120rpx' | 指示器的高度 |  | 
| indicatorRadius | string | false | '12rpx' | 指示器的圆角 |  | 
| needAnimate | boolean | false | true | 具备动画 | true, false | 
| boxStyle | string | false | '' | 组件样式 |  | 
| boxClass | string | false | '' | 组件样式类 |  | 
| rowsClass | string | false | '' | 行的样式类 |  | 

