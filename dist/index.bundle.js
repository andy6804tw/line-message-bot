module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);


// require and configure dotenv, will load vars in .env in process.env
__webpack_require__(7).config();

const envVarSchema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
  NODE_ENV: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default('development').allow(['development', 'production']), // 字串且預設值為development 並只允許兩種參數
  PORT: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number().default(8080), // 數字且預設值為 8080
  CHANNEL_ID: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number(), // 字串
  CHANNEL_SERECT: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string(), // 字串
  CHANNEL_ACCESS_TOKEN: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string(), // 字串
  VERSION: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string() // 字串
}).unknown().required();

// process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(process.env, envVarSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  version: envVars.VERSION, // API版本
  env: envVars.NODE_ENV, // 開發模式(development、production)
  port: envVars.PORT, // API 阜號
  channelId: envVars.CHANNEL_ID, // line bot channelId
  channelSecret: envVars.CHANNEL_SERECT, // line bot channelSecret
  channelAccessToken: envVars.CHANNEL_ACCESS_TOKEN // line bot channelAccessToken
};

/* harmony default export */ __webpack_exports__["a"] = (config); // 匯出共用

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http-status");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express-validation");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_express__ = __webpack_require__(8);



if (!module.parent) {
  // listen on port config.port
  __WEBPACK_IMPORTED_MODULE_1__config_express__["a" /* default */].listen(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].port, () => {
    console.log(`server started on  port http://127.0.0.1:${__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].port} (${__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].env})`);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__config_express__["a" /* default */]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_http_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_validation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__server_helper_AppError__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_routes_index_route__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_linebot__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_linebot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_linebot__);










const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// parse body params and attache them to req.body
const parser = __WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json({
  verify: function (req, res, buf, encoding) {
    req.rawBody = buf.toString(encoding);
  }
});
app.use(parser);
// enable CORS - Cross Origin Resource Sharing
app.use(__WEBPACK_IMPORTED_MODULE_2_cors___default()());
// HTTP request logger middleware for node.js
app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default()('dev'));
// lint bot

// config
const bot = __WEBPACK_IMPORTED_MODULE_9_linebot___default()({
  channelId: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].channelId,
  channelSecret: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].channelSecret,
  channelAccessToken: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].channelAccessToken
});
// const linebotParser = bot.parser();
// app.use(linebotParser);


/* GET home page. */
// app.get('/', (req, res) => {
//   res.send(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
// });

app.use('/', __WEBPACK_IMPORTED_MODULE_8__server_routes_index_route__["a" /* default */]);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  console.log('1');
  let errorMessage;
  let errorCode;
  let errorStatus;
  // express validation error 所有傳入參數驗證錯誤
  if (err instanceof __WEBPACK_IMPORTED_MODULE_5_express_validation___default.a.ValidationError) {
    if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
      errorMessage = err.errors[0].messages;
      errorCode = 400;
      errorStatus = __WEBPACK_IMPORTED_MODULE_4_http_status___default.a.BAD_REQUEST;
    }
    const error = new __WEBPACK_IMPORTED_MODULE_6__server_helper_AppError__["a" /* default */].APIError(errorMessage, errorStatus, true, errorCode);
    return next(error);
  }
  return next(err);
});

// error handler, send stacktrace only during development 錯誤後最後才跑這邊
app.use((err, req, res, next) => {
  console.log('2');
  res.status(err.status).json({
    message: err.isPublic ? err.message : __WEBPACK_IMPORTED_MODULE_4_http_status___default.a[err.status],
    code: err.code ? err.code : __WEBPACK_IMPORTED_MODULE_4_http_status___default.a[err.status],
    stack: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* default */].env === 'development' ? err.stack : {}
  });
  next();
});

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_status__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http_status__);


/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor(message, status, isPublic, code) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    this.status = status;
    this.isPublic = isPublic;
    this.code = code;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = __WEBPACK_IMPORTED_MODULE_0_http_status___default.a.INTERNAL_SERVER_ERROR, isPublic = false, code) {
    super(message, status, isPublic, code);
    this.name = 'APIError';
  }
}

/**
 * Class representing an MySQL error.
 * @extends ExtendableError
 */
class MySQLError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message = 'Backend Error', status = __WEBPACK_IMPORTED_MODULE_0_http_status___default.a.INTERNAL_SERVER_ERROR, isPublic = true, code = 500) {
    super(message, status, isPublic, code);
    this.name = 'MySQLError';
  }
}

/**
 * 信箱尚未註冊 Error
 * @extends ExtendableError
 */
class LoginError1 extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message = '信箱尚未註冊！', status = __WEBPACK_IMPORTED_MODULE_0_http_status___default.a.UNAUTHORIZED, isPublic = true, code = 401) {
    super(message, status, isPublic, code);
    this.name = 'LoginError';
  }
}
/**
 * 密碼錯誤 Error.
 * @extends ExtendableError
 */
class LoginError2 extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message = '您輸入的密碼有誤！', status = __WEBPACK_IMPORTED_MODULE_0_http_status___default.a.UNAUTHORIZED, isPublic = true, code = 401) {
    super(message, status, isPublic, code);
    this.name = 'LoginError';
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  APIError,
  MySQLError,
  LoginError1,
  LoginError2
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linebot_route__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(0);




const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.send(`此路徑是: localhost:${__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].port}/api`);
});
/** linebot Router */
router.use('/webhook', __WEBPACK_IMPORTED_MODULE_1__linebot_route__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("linebot");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linebot__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linebot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_linebot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_linebot_controller__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(0);





// config
const bot = __WEBPACK_IMPORTED_MODULE_1_linebot___default()({
  channelId: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].channelId,
  channelSecret: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].channelSecret,
  channelAccessToken: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* default */].channelAccessToken
});
const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

/* Webhook linebot POST */
router.use(bot.parser());

// reply text message
bot.on('message', __WEBPACK_IMPORTED_MODULE_2__controllers_linebot_controller__["a" /* default */].replyMessage);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);


const replyMessage = event => {
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
};
const test = (req, res) => {
  res.send('測試');
};

/* harmony default export */ __webpack_exports__["a"] = ({ replyMessage, test });

/***/ })
/******/ ]);