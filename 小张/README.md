# 我的网站

一个简洁、现代、响应式的静态网站模板。

## 文件结构

- `index.html` — 页面结构
- `styles.css` — 样式（含响应式 + 移动端菜单）
- `script.js` — 交互逻辑（年份自动更新、移动端菜单）

## 本地预览

```powershell
cd e:\小张
python -m http.server 8000
```

浏览器访问 http://localhost:8000

## 部署到公网（免费）

1. 打开 https://app.netlify.com/drop
2. 把本目录所有文件拖进去
3. 获得 `xxx.netlify.app` 网址，分享给别人即可访问

或使用 Vercel / GitHub Pages 同样支持。

## 自定义

- 修改 `index.html` 的标题、文案、导航
- 修改 `styles.css` 顶部的 `:root` 变量可一键换色
- 替换邮箱 `hello@example.com` 为你自己的邮箱
