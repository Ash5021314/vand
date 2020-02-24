const CronJob = require("cron").CronJob;
const Admin = require("../models/Admin");
const job = new CronJob("15 00 18 * * *", function() {
  console.log("You will see this message every 15 second");
});
// setTimeout(function() {
//   process.exit(0);
// }, 7000);
// job.start();

module.exports = job;
