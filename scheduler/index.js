import cron from 'node-cron';

module.exports = function Task(name,time,type,command,args) {
    this.name = name;
    this.time = time;
    this.type = type;
    this.command = command;
    this.args = args

    this.run = function(){
        cron.schedule(time, () => {
            console.log("Did a thing");
        });
    }
    
}