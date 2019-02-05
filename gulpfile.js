import { task } from 'gulp';

// development tasks
task('travis', ['build', 'testServerJS'], function() {
    process.exit(0);
});