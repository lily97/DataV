module.exports = {
    // publicPath:process.env.NODE_ENV === 'production' ? '/vue_workspac/aihuhuproject/' : '/',

    //基本路径
    publicPath: './', //默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件

    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: true, //启动项目时是否打开浏览器
        // host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 5500,
        hot: true, // 开启热加载
        https: false, // 编译失败时刷新页面
        hotOnly: false, // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败

        /*如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
         你需要在开发环境下将 API 请求代理到 API 服务器。
         这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置*/
        // proxy: {
        //     '/': {
        //         target: 'https://api.dev.guoyuancloud.com', //目标接口域名
        //         secure: true, //false为http访问，true为https访问
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
    },
};