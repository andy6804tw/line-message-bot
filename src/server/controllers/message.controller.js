import config from './../../config/config';

const request = require('request');
const cheerio = require('cheerio');
const async = require('async');

function getTopPages(callback) {
  request('https://www.ptt.cc/bbs/Beauty/index.html', (err, res, body) => {
    const $ = cheerio.load(body);
    const prev = $('.btn-group-paging a').eq(1).attr('href').match(/\d+/)[0];
    callback(['', prev, prev - 1]);
  });
}

function getPosts(page, callback) {
  request(`https://www.ptt.cc/bbs/Beauty/index${page}.html`, (err, res, body) => {
    const $ = cheerio.load(body);
    const posts = $('.r-ent a').map((index, obj) => {
      return $(obj).attr('href');
    }).get();
    callback(posts);
  });
}

function getImages(post, callback) {
  request(`https://www.ptt.cc${post}`, (err, res, body) => {
    let images = body.match(/imgur.com\/[0-9a-zA-Z]{7}/g);
    images = [...new Set(images)];
    callback(images);
  });
}


const getImgae = () => {
  return new Promise((resolve, reject) => {
    getTopPages((pages) => {
      async.map(pages, (page, callback) => {
        getPosts(page, (posts) => {
          callback(null, posts);
        });
      }, (err, results) => {
        const posts = [].concat.apply([], results);
        async.map(posts, (post, callback) => {
          getImages(post, (images) => {
            callback(null, images);
          });
        }, (err, results) => {
          const images = [].concat.apply([], results).map((image) => {
            //return `https://${image}.jpg`;
            return image.substring(0, 17);
          });
          console.log();
          resolve(images[Math.floor(Math.random() * (images.length + 1))]); // 撈取成功回傳 JSON 資料
        });
      });
    });
  });
};


const replyMessage = (event) => {
  if (event.message.text === '抽') {
    getImgae().then((result) => {
      console.log(`https://${result}.jpg`);
      event.reply({
        type: 'image',
        originalContentUrl: `https://${result}.jpg`,
        previewImageUrl: `https://i.${result}.jpg`
      });
    });
  }
};
const test = (req, res) => {
  res.send('測試');
};


export default {
  replyMessage,
  test
};
