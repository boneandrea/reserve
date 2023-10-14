const { defineConfig } = require('@vue/cli-service')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dental/reserve/'
        : '/',
    transpileDependencies: true,
    pages: {
        index: {
            entry: "src/main.js",
            title: "治療予約",
        }
    }
}
