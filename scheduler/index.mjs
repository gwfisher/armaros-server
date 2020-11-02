var cron = require('node-cron');

export function Task(name,time,cmd,args) {
    this.name = name;
    this.time = time;
    this.cmd = cmd;
    this.args = args;

    this.runTask = function() {
        return name;
    }
}


