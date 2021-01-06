/* webpack */
const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  // 生成环境部署路径，默认服务器根目录
  publicPath: "/",
  productionSourceMap: false, // 生产环境看不到源码
  assetsDir: "./", // 静态资源存放路径，对应部署路径

  chainWebpack: (config) => {
    // 快捷路径地址，可自定义键值对
    config.resolve.alias.set("@", resolve("src"));
    // 项目启动提示
    console.log("项目正在启动!!!");
    config.plugins.delete("prefetch");
  },

  // 本地环境代理地址
  devServer: {},

  css: {
    loaderOptions: {
      // 全局引入 scss 主题色变量 及 mixin 混合器
      sass: {
        additionalData: `@import "@/assets/style/variable.scss";`
      }
    }
  }
};
