module.exports.config = {
  name: "botmake",
  version: "2.0.0",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "control admin lists",
  prefix: false,
  category: "admin",
  usages: "admin [add/remove] [uid]",
  cooldowns: 5,
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
