var gulp =  require ('gulp');

// development tasks
gulp.task('travis', ['build', 'testServerJS'], function() {
    process.exit(0);
});