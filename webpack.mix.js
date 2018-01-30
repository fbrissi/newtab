let mix = require('laravel-mix'),
    tailwindcss = require('tailwindcss'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

mix
    .setPublicPath('dist')
    .js('src/main.js', 'dist')
    .sass('src/app.scss', 'dist')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    .webpackConfig({
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
        ],
    });