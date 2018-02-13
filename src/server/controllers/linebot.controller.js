import config from './../../config/config';

const replyMessage =(event)=>{
  if (event.message.type = 'text') {
    var msg = event.message.text;
    //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(msg).then(function (data) {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(msg);
    }).catch(function (error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：' + error);
    });
  }
}
const test = (req, res) => {
  res.send('測試');
};



export default { replyMessage,test};
