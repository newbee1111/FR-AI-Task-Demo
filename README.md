# 说明

本项目由 [Create React App](https://github.com/facebook/create-react-app). 初始化生成

## 相关技术栈

- React
- React-router-dom
- Typescript
- Antd

## 相关命令说明

```bash
# 安装以来，确保已经有node环境
npm install

# 运行项目
npm start

# 执行构建
npm run build
```

## 项目结构说明

```info
|____.vscode // vscode配置文件
|____public // webpack构建用的public文件
|____src // 源码文件
| |____layout // 页面容器
| |____pages // 页面
| |____routes // 路由
| |____index.css // 入口样式
| |____index.tsx // 编译入口
| |____logo.svg // logo
|____.eslintignore // eslint忽视的目录
|____.eslintrc // eslint配置文件
|____.gitignore // git忽视的目录
|____.prettierrc // prettier配置
|____package-lock.json // 依赖版本lock
|____package.json // 项目三方依赖
|____README.md // ReadME
|____tsconfig.json // typescript配置
```

## 代码实现说明

- 实现了代码的样式，基本的交互部分，并且预留了位置给到前后端接口联调
