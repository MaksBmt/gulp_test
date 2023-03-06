import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
  path: path,
  gulp: gulp
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

//функция наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy)
}

//Построение задач выполнения сценариев
const dev = gulp.series(reset, copy, watcher);

//выполнение сценария по умолчанию
gulp.task('default', dev);