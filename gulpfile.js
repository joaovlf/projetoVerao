let gulp = require('gulp');
let ImageMin = require('gulp-imagemin');
let autoPrefixer = require('gulp-autoprefixer')
let concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');




gulp.task('imgMinify',async()=>{
    let dirProject = "src/img/*"
    let dirBuild = "public/img/"

     await gulp.src(dirProject)
    .pipe(ImageMin())
    .pipe(gulp.dest(dirBuild))
})

gulp.task('cssMinify', async()=>{
    let dirCss = ["src/css/landingpage/main.css","src/css/obrigado/core.css"]
    let buildCss = "public/css"

    await gulp.src(dirCss)
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildCss))
})


gulp.task('addfonts',async ()=>{
    await gulp.src('src/fonts/*')
    .pipe(gulp.dest('public/fonts'))
})


gulp.task('htmlMinify', async()=>{
    let dirhtml = ["src/index.html","src/obrigada.html","src/bautesprojetoverao.html"]
    let buildhtml = "public/"

    await gulp.src(dirhtml)
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest(buildhtml))
})


