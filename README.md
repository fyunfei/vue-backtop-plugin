# vue-backtop-plugin

> 返回顶部组件 支持IE10 

> @todo 使用插槽提高扩展性


# API
配置项 | 类型 | 默认值 | 描述
---|---|---|---|
 width | Number | 60 | 按钮容器宽度
 height | Number | 60 | 按钮容器高度
 background | String | #009688 | 按钮容器背景颜色
 visibleHeight | Number | 500 | 当滚动高度超过时显示回到顶部按钮
 speed | Number | 100 | 回到顶部的速度

# Example
```javascript
  import BackToTop from "vue-backtop-plugin/dist/vue-backtop";
  Vue.use(BackToTop);
```

```html
  // nuxt中使用
  // 正常引入插件流程
  // 需要在使用插件时通过 放在no-ssr组件中
  <no-ssr>
    <back-to-top></back-to-top>
  </no-ssr>
```

# HTML
```
  <back-to-top 
      :width="120" 
      :height="120" 
      background="#009688"
      :visible-height="500" 
      :speed="1000"
  >
  </back-to-top>

```