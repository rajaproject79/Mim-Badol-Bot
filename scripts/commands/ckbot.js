module.exports.config = {
    name: "ckbot",
  version: "1.0.0",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "MCS-TM",
  prefix: true, 
  category: "usermcs", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`You can use:\n\n${prefix}${this.config.name} user => it will take your own information.\n\n${prefix}${this.config.name} user @[Tag] => it will get friend information tag.\n\n${prefix}${this.config.name} box => it will get your box information (number of members, djt each other,...)\n\n${prefix}${this.config.name} user box [uid || tid.:\n\n${prefix}${this.config.name} admin => Admin Bot's Personal Information]`, event.threadID, event.messageID);
