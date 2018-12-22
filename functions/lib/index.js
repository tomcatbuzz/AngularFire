"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
admin.initializeApp();
var sendgrid_1 = require("./sendgrid");
exports.sendContactMessage = sendgrid_1.sendContactMessage;
var twilio_1 = require("./twilio");
exports.sendSMS = twilio_1.sendSMS;
var weather_1 = require("./weather");
exports.darkSkyProxy = weather_1.darkSkyProxy;
var blog_1 = require("./blog");
exports.topicNotifications = blog_1.topicNotifications;
//# sourceMappingURL=index.js.map