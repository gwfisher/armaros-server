import {Task} from './scheduler/index.mjs';

var task = new Task("test","now","test","test");

var result = task.runTask();

console.log(result);


