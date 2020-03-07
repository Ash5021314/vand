const CronJob = require("cron").CronJob;
const Admin = require("../models/Admin");
const job = new CronJob("00 00 00 * * *", async function() {
  let date = Math.floor(Date.now() / 1000);
  await Admin.update(
    { login: "gago" },
    { $pull: { tokens: { expiredAt: { $lt: date } } } },
    { multi: true }
  );
});

module.exports = job;
