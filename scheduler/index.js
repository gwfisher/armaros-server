import cron from "node-cron";

cron.schedule('* * * * *', () => {
    console.log("Did a thing");
})