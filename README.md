# 中医智行 — 移动端官网

> 掌上的中医智慧，随时随地的健康服务

## 项目简介

中医智行移动端官网是专为移动设备优化的前端项目，为用户提供便捷的中医健康服务入口。项目采用原生 HTML/CSS/JavaScript 构建，使用 Vite 作为构建工具，确保最佳的加载性能和开发体验。

**在线访问**: [m-zyzx.netlify.app](https://m-zyzx.netlify.app/)

**PC 端**: [zyzx.pro](https://zyzx.pro/)

| 项目 | PC 端 | 移动端 |
|------|-------|--------|
| 仓库 | [zyzx-official-website](https://github.com/bigmanBass666/zyzx-official-website) | [zyzx-official-website-mobile](https://github.com/bigmanBass666/zyzx-official-website-mobile) |
| 构建工具 | 原生 | Vite |
| 响应式策略 | 跳转 | 自适应 |
| 导航 | 顶部导航栏 | 底部 TabBar |

## 技术架构

### 核心技术栈

| 技术 | 说明 |
|------|------|
| **HTML5 + CSS3** | 语义化标签与现代化 CSS |
| **JavaScript (ES6+)** | 原生 JavaScript，模块化开发 |
| **Vite** | 下一代前端构建工具 |
| **iconfont** | 字体图标库 |
| **Lenis** | 平滑滚动库 |
| **Driver.js** | 用户引导/新手导览 |

### 项目特色

- **原生开发**: 无框架依赖，轻量高效
- **移动优先**: 针对移动端屏幕和使用习惯优化
- **组件化**: 页面模块化，便于维护
- **设计系统**: 统一的 CSS 变量和设计规范

## 页面结构

### 1. 首页 (index.html)

#### 顶部定位栏
- 显示当前城市（默认：云浮）
- 顶部 Logo
- 城市切换下拉菜单

#### 搜索区域
- 搜索输入框、搜索图标、消息图标

#### 工具网格
8 个主要功能入口：智能问诊、健康咨询、智能配方、智能识别、药方检测、健康自测、心理健康、睡眠助手

#### 预约卡片
- 预约挂号、线下预约、专家讲解

#### 推荐医生
滚动展示医生信息卡片

#### 热门问题
分类标签（育儿、养生、问诊、保健、减肥）

#### 底部导航 (TabBar)
| 图标 | 名称 | 路径 |
|------|------|------|
| 首页 | /index.html |
| 商城 | /html/mall.html |
| 健康 | /html/healthy.html |
| 社区 | /html/community.html |
| 我的 | /html/mine.html |

### 2. 其他页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 商城 | html/mall.html | 商品展示与购买 |
| 健康 | html/healthy.html | 健康资讯与服务 |
| 社区 | html/community.html | 用户社区互动 |
| 我的 | html/mine.html | 个人中心 |

## 目录结构

```
zyzx-official-website-mobile/
├── index.html                      # 首页
├── package.json                    # 项目配置
├── vite.config.js                  # Vite 配置
├── dist/                           # 构建输出目录
├── css/                            # 样式目录
├── js/                             # 脚本目录
│   └── components/                 # 组件脚本
├── img/                            # 图片资源
├── html/                           # 子页面
├── iconfont/                       # 字体图标
├── less/                           # Less 源文件
├── feature_list.json               # 特性清单
└── PROJECT_CONSTRAINTS.md          # 项目约束文档
```

## 开发命令

```bash
# 安装依赖
npm install

# 开发预览
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行测试
npm run test
```

## 设计规范

### 响应式断点

| 断点 | 设备类型 |
|------|----------|
| < 390px | 小屏手机 |
| 390px - 414px | 普通手机 |
| 415px+ | 大屏手机/平板 |

## 浏览器兼容性

- iOS Safari 14+
- Chrome for Android 90+
- 微信内置浏览器
- 其他主流移动浏览器

## 版权信息

```
copyright © M&T developed by Jason Liu
```

## 作者

- **GitHub**: [bigmanBass666](https://github.com/bigmanBass666)
- **Gitee**: [paeonia-lactiflora](https://gitee.com/paeonia-lactiflora)

---

**声明**: 本项目为学习和演示项目，部分资源来自互联网，仅供学习参考使用。
