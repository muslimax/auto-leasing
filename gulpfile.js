global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    path: {
        serverDir: "./app/build/",
        build: {
            html: "./app/build/",
            style: "./app/build/style/",
            js: "./app/build/script/",
            img: "./app/build/images/",
            fonts: "./app/build/fonts/"
        },
        src: {
            html: "./app/src/*.{html,pug,jade}",
            style: "./app/src/style/*.*",
            img: "./app/src/images/**/*.{png,jpg,jpeg,gif,svg}",
            fonts: "./app/src/fonts/**/**/*.*",
            js: "./app/src/script/common.js"
        },
        watch: {
            html: ["./app/src/*.{html,pug,jade}", "./app/src/view/**/*.{html,pug,jade}"],
            style: "./app/src/style/**/*.*",
            js: "./app/src/script/**/*.*",
            img: "./app/src/images/**/*.{png,jpg,jpeg,gif,svg}",
            fonts: "./app/src/fonts/**/**/*.*"
        },
        tasks: require("./gulp")
    },
    tasksList: {
        build: ["html", "style", "js", "img", "fonts"],
        default: ["html", "style", "js", "img", "fonts", "watch", "server"]
    }
}
$.path.tasks.forEach(function (taskPath) {
    if (typeof require(taskPath) == "function") {
        require(taskPath)()        
    }
})


$.gulp.task("default", $.gulp.parallel($.tasksList.default))