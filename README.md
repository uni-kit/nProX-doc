<h1 align="center"> nProX <br> 高效易用、高质量的uts组件库 </h1>

- uniapp-x/uts 组件库；
- 原生APP、小程序、H5、web等，一套代码多端支持；
- 组件丰富，功能强大。注重性能、体验和优化；

## 联系作者

- 微信：pptpdf
- qq：382006503

## Usage

本地开发node：v21.6.0

先安装 `pnpm`

```sh
npm i -g pnpm
```

安装依赖

```sh
pnpm install
```

开发启动

```sh
pnpm dev
```

构建

```sh
pnpm build
```

预览产物

```sh
pnpm serve
```

## Github Pages 部署

① Github Pages 开启 Git Actions 部署支持

![](https://img.cdn.sugarat.top/mdImg/sugar/8a2454c628d0e2abcc7a0451ddd7d2dc)

② 复制文件 `.github/workflows/deploy.yml` 到自己的项目相同目录下

示例项目已包含，可以直接进行下一步

③ 修改 `docs/.vitepress/config.mts` 里的构建配置

**如果项目名已经为 name.github.io 域名，则不需要修改，保持默认值 `/` 即可**

`base` 改为 `"/仓库名/"` 即可

```ts
// 省略无关代码
const base = '/vitepress-blog-sugar-template/'
export default defineConfig({
  base,
})
```

④ 推送 `main` 分支即可

需要进一步修改部署和构建配置，详见`deploy.yml` 文件。

## 文档主题来源

<h1 align="center"> VitePress @sugarat/theme </h1>

<p align="center">
简约风的 <a href="https://theme.sugarat.top"  target="_blank"target="_blank">VitePress 博客主题</a> 
</p>
