import express from 'express';
import linebot from 'linebot';
import linebotCtrl from '../controllers/linebot.controller'
import config from './../../config/config';

// config
const bot = linebot({
  channelId: config.channelId,
  channelSecret: config.channelSecret,
  channelAccessToken: config.channelAccessToken
});
const router = express.Router();


/* Webhook linebot POST */
router.use(bot.parser());

// reply text message
bot.on('message', linebotCtrl.replyMessage);


export default router;
