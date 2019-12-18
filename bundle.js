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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/_normalize.scss */ \"./src/scss/_normalize.scss\");\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_fontawesome_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/fontawesome/fontawesome.scss */ \"./src/scss/fontawesome/fontawesome.scss\");\n/* harmony import */ var _scss_fontawesome_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_fontawesome_fontawesome_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/BaseView.js":
/*!****************************!*\
  !*** ./src/js/BaseView.js ***!
  \****************************/
/*! exports provided: getElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getElement\", function() { return getElement; });\nfunction getElement(selector) {\n  return document.querySelector(selector);\n}\n\n\n//# sourceURL=webpack:///./src/js/BaseView.js?");

/***/ }),

/***/ "./src/js/clock.js":
/*!*************************!*\
  !*** ./src/js/clock.js ***!
  \*************************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n\n\nfunction clock() {\n  const timezone = localStorage.getItem('timeZone');\n  if (timezone) {\n    const options = {\n      weekday: 'short', day: 'numeric', month: 'long', timeZone: timezone, hour: '2-digit', minute: '2-digit',\n    };\n    const language = localStorage.getItem('language') || 'EN';\n    const currentTime = new Date().toLocaleString(language, options);\n    _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"DATE\"].innerHTML = currentTime;\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/clock.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  BD: 'Bangladesh', BE: 'Belgium', BF: 'Burkina Faso', BG: 'Bulgaria', BA: 'Bosnia and Herzegovina', BB: 'Barbados', WF: 'Wallis and Futuna', BL: 'Saint Barthelemy', BM: 'Bermuda', BN: 'Brunei', BO: 'Bolivia', BH: 'Bahrain', BI: 'Burundi', BJ: 'Benin', BT: 'Bhutan', JM: 'Jamaica', BV: 'Bouvet Island', BW: 'Botswana', WS: 'Samoa', BQ: 'Bonaire, Saint Eustatius and Saba ', BR: 'Brazil', BS: 'Bahamas', JE: 'Jersey', BY: 'Belarus', BZ: 'Belize', RU: 'Russia', RW: 'Rwanda', RS: 'Serbia', TL: 'East Timor', RE: 'Reunion', TM: 'Turkmenistan', TJ: 'Tajikistan', RO: 'Romania', TK: 'Tokelau', GW: 'Guinea-Bissau', GU: 'Guam', GT: 'Guatemala', GS: 'South Georgia and the South Sandwich Islands', GR: 'Greece', GQ: 'Equatorial Guinea', GP: 'Guadeloupe', JP: 'Japan', GY: 'Guyana', GG: 'Guernsey', GF: 'French Guiana', GE: 'Georgia', GD: 'Grenada', GB: 'United Kingdom', GA: 'Gabon', SV: 'El Salvador', GN: 'Guinea', GM: 'Gambia', GL: 'Greenland', GI: 'Gibraltar', GH: 'Ghana', OM: 'Oman', TN: 'Tunisia', JO: 'Jordan', HR: 'Croatia', HT: 'Haiti', HU: 'Hungary', HK: 'Hong Kong', HN: 'Honduras', HM: 'Heard Island and McDonald Islands', VE: 'Venezuela', PR: 'Puerto Rico', PS: 'Palestinian Territory', PW: 'Palau', PT: 'Portugal', SJ: 'Svalbard and Jan Mayen', PY: 'Paraguay', IQ: 'Iraq', PA: 'Panama', PF: 'French Polynesia', PG: 'Papua New Guinea', PE: 'Peru', PK: 'Pakistan', PH: 'Philippines', PN: 'Pitcairn', PL: 'Poland', PM: 'Saint Pierre and Miquelon', ZM: 'Zambia', EH: 'Western Sahara', EE: 'Estonia', EG: 'Egypt', ZA: 'South Africa', EC: 'Ecuador', IT: 'Italy', VN: 'Vietnam', SB: 'Solomon Islands', ET: 'Ethiopia', SO: 'Somalia', ZW: 'Zimbabwe', SA: 'Saudi Arabia', ES: 'Spain', ER: 'Eritrea', ME: 'Montenegro', MD: 'Moldova', MG: 'Madagascar', MF: 'Saint Martin', MA: 'Morocco', MC: 'Monaco', UZ: 'Uzbekistan', MM: 'Myanmar', ML: 'Mali', MO: 'Macao', MN: 'Mongolia', MH: 'Marshall Islands', MK: 'Macedonia', MU: 'Mauritius', MT: 'Malta', MW: 'Malawi', MV: 'Maldives', MQ: 'Martinique', MP: 'Northern Mariana Islands', MS: 'Montserrat', MR: 'Mauritania', IM: 'Isle of Man', UG: 'Uganda', TZ: 'Tanzania', MY: 'Malaysia', MX: 'Mexico', IL: 'Israel', FR: 'France', IO: 'British Indian Ocean Territory', SH: 'Saint Helena', FI: 'Finland', FJ: 'Fiji', FK: 'Falkland Islands', FM: 'Micronesia', FO: 'Faroe Islands', NI: 'Nicaragua', NL: 'Netherlands', NO: 'Norway', NA: 'Namibia', VU: 'Vanuatu', NC: 'New Caledonia', NE: 'Niger', NF: 'Norfolk Island', NG: 'Nigeria', NZ: 'New Zealand', NP: 'Nepal', NR: 'Nauru', NU: 'Niue', CK: 'Cook Islands', XK: 'Kosovo', CI: 'Ivory Coast', CH: 'Switzerland', CO: 'Colombia', CN: 'China', CM: 'Cameroon', CL: 'Chile', CC: 'Cocos Islands', CA: 'Canada', CG: 'Republic of the Congo', CF: 'Central African Republic', CD: 'Democratic Republic of the Congo', CZ: 'Czech Republic', CY: 'Cyprus', CX: 'Christmas Island', CR: 'Costa Rica', CW: 'Curacao', CV: 'Cape Verde', CU: 'Cuba', SZ: 'Swaziland', SY: 'Syria', SX: 'Sint Maarten', KG: 'Kyrgyzstan', KE: 'Kenya', SS: 'South Sudan', SR: 'Suriname', KI: 'Kiribati', KH: 'Cambodia', KN: 'Saint Kitts and Nevis', KM: 'Comoros', ST: 'Sao Tome and Principe', SK: 'Slovakia', KR: 'South Korea', SI: 'Slovenia', KP: 'North Korea', KW: 'Kuwait', SN: 'Senegal', SM: 'San Marino', SL: 'Sierra Leone', SC: 'Seychelles', KZ: 'Kazakhstan', KY: 'Cayman Islands', SG: 'Singapore', SE: 'Sweden', SD: 'Sudan', DO: 'Dominican Republic', DM: 'Dominica', DJ: 'Djibouti', DK: 'Denmark', VG: 'British Virgin Islands', DE: 'Germany', YE: 'Yemen', DZ: 'Algeria', US: 'United States', UY: 'Uruguay', YT: 'Mayotte', UM: 'United States Minor Outlying Islands', LB: 'Lebanon', LC: 'Saint Lucia', LA: 'Laos', TV: 'Tuvalu', TW: 'Taiwan', TT: 'Trinidad and Tobago', TR: 'Turkey', LK: 'Sri Lanka', LI: 'Liechtenstein', LV: 'Latvia', TO: 'Tonga', LT: 'Lithuania', LU: 'Luxembourg', LR: 'Liberia', LS: 'Lesotho', TH: 'Thailand', TF: 'French Southern Territories', TG: 'Togo', TD: 'Chad', TC: 'Turks and Caicos Islands', LY: 'Libya', VA: 'Vatican', VC: 'Saint Vincent and the Grenadines', AE: 'United Arab Emirates', AD: 'Andorra', AG: 'Antigua and Barbuda', AF: 'Afghanistan', AI: 'Anguilla', VI: 'U.S. Virgin Islands', IS: 'Iceland', IR: 'Iran', AM: 'Armenia', AL: 'Albania', AO: 'Angola', AQ: 'Antarctica', AS: 'American Samoa', AR: 'Argentina', AU: 'Australia', AT: 'Austria', AW: 'Aruba', IN: 'India', AX: 'Aland Islands', AZ: 'Azerbaijan', IE: 'Ireland', ID: 'Indonesia', UA: 'Ukraine', QA: 'Qatar', MZ: 'Mozambique',\n});\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/getDayForecast.js":
/*!**********************************!*\
  !*** ./src/js/getDayForecast.js ***!
  \**********************************/
/*! exports provided: getDayForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDayForecast\", function() { return getDayForecast; });\nfunction getDayForecast(date) {\n  const dateValue = new Date(date);\n  const weekday = new Array(7);\n  const lang = localStorage.getItem('language') || 'EN';\n  if (lang === 'EN') {\n    weekday[0] = 'Sunday';\n    weekday[1] = 'Monday';\n    weekday[2] = 'Tuesday';\n    weekday[3] = 'Wednesday';\n    weekday[4] = 'Thursday';\n    weekday[5] = 'Friday';\n    weekday[6] = 'Saturday';\n  } else if (lang === 'RU') {\n    weekday[0] = 'Воскресенье';\n    weekday[1] = 'Понедельник';\n    weekday[2] = 'Вторник';\n    weekday[3] = 'Среда';\n    weekday[4] = 'Четверг';\n    weekday[5] = 'Пятница';\n    weekday[6] = 'Суббота';\n  } else if (lang === 'BE') {\n    weekday[0] = 'Нядзеля';\n    weekday[1] = 'Панядзелак';\n    weekday[2] = 'Аўторак';\n    weekday[3] = 'Серада';\n    weekday[4] = 'Чацвер';\n    weekday[5] = 'Пятнiца';\n    weekday[6] = 'Субота';\n  }\n  const resultDay = weekday[dateValue.getDay()];\n  return resultDay;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/getDayForecast.js?");

/***/ }),

/***/ "./src/js/getImageUrl.js":
/*!*******************************!*\
  !*** ./src/js/getImageUrl.js ***!
  \*******************************/
/*! exports provided: getImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImageUrl\", function() { return getImageUrl; });\n/* harmony import */ var _variablesAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variablesAPI */ \"./src/js/variablesAPI.js\");\n\n\nconst onSubmitFormHandler = async () => {\n  const city = localStorage.getItem('cityValue');\n  const weather = localStorage.getItem('weatherValue');\n  const url = `${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_UNSPLASH\"]}${city},winter,morning,${weather}&client_id=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_CLIENTID_UNSPLASH\"]}`;\n  console.log(url);\n\n  const response = await fetch(url);\n  const data = await response.json();\n  const { urls: { full } } = data;\n  return full;\n};\n\nasync function getImageUrl() {\n  const imageLoaded = new Image();\n  const imageLoadedSrc = await onSubmitFormHandler();\n\n  imageLoaded.src = imageLoadedSrc;\n  imageLoaded.onload = () => {\n    document.body.style.backgroundImage = `url('${imageLoaded.src}')`;\n  };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/getImageUrl.js?");

/***/ }),

/***/ "./src/js/getMoveTimeZone.js":
/*!***********************************!*\
  !*** ./src/js/getMoveTimeZone.js ***!
  \***********************************/
/*! exports provided: getMoveTimeZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMoveTimeZone\", function() { return getMoveTimeZone; });\n/* harmony import */ var _variablesAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variablesAPI */ \"./src/js/variablesAPI.js\");\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n/* harmony import */ var _searchWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchWeather */ \"./src/js/searchWeather.js\");\n/* harmony import */ var _searchWeatherThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchWeatherThree */ \"./src/js/searchWeatherThree.js\");\n\n\n\n\n\n\nfunction getMoveTimeZone(city, lang) {\n    let language = localStorage.getItem('language') || 'EN';\n    let langChange = language.toLowerCase();\n    \n    fetch(`${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_OPENCAGEDATAURL\"]}${city}&key=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY_OPENCAGEDATAURL\"]}&language=${langChange}`)\n    .then((result) => {\n        return result.json();\n    }).then((res) => {\n        try {\n        let cityLang = res.results[0].components.city || res.results[0].components.city_district || res.results[0].components.county || res.results[0].components.state;\n\n        let coutryLang = res.results[0].components.country;\n        if (!cityLang) {\n            _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"CITY_HEADER\"].innerHTML = coutryLang;\n\n        }\n        else {\n            _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"CITY_HEADER\"].innerHTML = cityLang + ', ' + coutryLang;\n\n        }\n        localStorage.setItem('cityLang', cityLang);\n    }\n    catch {\n        _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"POPUP\"].style.display = 'block';\n        _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"POPUP\"].innerHTML = 'Please enter the correct city';\n        document.addEventListener('click', () => {\n            _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"POPUP\"].style.display = 'none';\n        });\n    }\n    let timezone = res.results[0].annotations.timezone.name;\n        localStorage.setItem('timeZone', timezone);     \n});\n\nfetch(`${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_OPENCAGEDATAURL\"]}${city}&key=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY_OPENCAGEDATAURL\"]}&language=en`)\n    .then((result) => {\n        return result.json();\n    }).then((res) => {\n        let cityLang = res.results[0].components.city || res.results[0].components.city_district || res.results[0].components.county || res.results[0].components.state;\n        let conversionValue = localStorage.getItem('conversion') || 'metric';\n        if (!cityLang) {\n            Object(_searchWeather__WEBPACK_IMPORTED_MODULE_2__[\"searchWeather\"])(coutryLang, conversionValue);\n            Object(_searchWeatherThree__WEBPACK_IMPORTED_MODULE_3__[\"searchWeatherThree\"])(coutryLang, conversionValue);\n        }\n        else {\n            Object(_searchWeather__WEBPACK_IMPORTED_MODULE_2__[\"searchWeather\"])(cityLang, conversionValue);\n            Object(_searchWeatherThree__WEBPACK_IMPORTED_MODULE_3__[\"searchWeatherThree\"])(cityLang, conversionValue);\n        }\n    });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/getMoveTimeZone.js?");

/***/ }),

/***/ "./src/js/htmlElements.js":
/*!********************************!*\
  !*** ./src/js/htmlElements.js ***!
  \********************************/
/*! exports provided: CITY_HEADER, DATE, SEARCH_INPUT, POPUP, WEATHER_DESCRIPTION, TEMPERATURE_ELEMENT, HUMIDITY_ELEMENT, WIND_ELEMENT, WEATHER_ICON, FEELS, DAY_ONE_FORECAST, DAY_TWO_FORECAST, DAY_THREE_FORECAST, TEMP_ONE_FORECAST, TEMP_TWO_FORECAST, TEMP_THREE_FORECAST, ICON_ONE_FORECAST, ICON_TWO_FORECAST, ICON_THREE_FORECAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CITY_HEADER\", function() { return CITY_HEADER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DATE\", function() { return DATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCH_INPUT\", function() { return SEARCH_INPUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POPUP\", function() { return POPUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEATHER_DESCRIPTION\", function() { return WEATHER_DESCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEMPERATURE_ELEMENT\", function() { return TEMPERATURE_ELEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HUMIDITY_ELEMENT\", function() { return HUMIDITY_ELEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIND_ELEMENT\", function() { return WIND_ELEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEATHER_ICON\", function() { return WEATHER_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FEELS\", function() { return FEELS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAY_ONE_FORECAST\", function() { return DAY_ONE_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAY_TWO_FORECAST\", function() { return DAY_TWO_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAY_THREE_FORECAST\", function() { return DAY_THREE_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEMP_ONE_FORECAST\", function() { return TEMP_ONE_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEMP_TWO_FORECAST\", function() { return TEMP_TWO_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TEMP_THREE_FORECAST\", function() { return TEMP_THREE_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ICON_ONE_FORECAST\", function() { return ICON_ONE_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ICON_TWO_FORECAST\", function() { return ICON_TWO_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ICON_THREE_FORECAST\", function() { return ICON_THREE_FORECAST; });\n/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseView */ \"./src/js/BaseView.js\");\n\n\nconst CITY_HEADER = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-city');\nconst DATE = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-date');\nconst SEARCH_INPUT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('#search-input');\nconst POPUP = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.popup');\nconst WEATHER_DESCRIPTION = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-bottom_details_header');\nconst TEMPERATURE_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-main_temperature');\nconst HUMIDITY_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-bottom_details_humidity');\nconst WIND_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-bottom_details_wind');\nconst WEATHER_ICON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-main_img_icon');\nconst FEELS = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.weather--today_description-bottom_details_feels');\nconst DAY_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.tomorrow');\nconst DAY_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.two_day');\nconst DAY_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.three_day');\nconst TEMP_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.one_temp');\nconst TEMP_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.two_temp');\nconst TEMP_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.three_temp');\nconst ICON_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.one_icon');\nconst ICON_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.two_icon');\nconst ICON_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_0__[\"getElement\"])('.three_icon');\n\n\n\n\n//# sourceURL=webpack:///./src/js/htmlElements.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/js/template.js\");\n/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseView */ \"./src/js/BaseView.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate */ \"./src/js/translate.js\");\n/* harmony import */ var _getImageUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getImageUrl */ \"./src/js/getImageUrl.js\");\n/* harmony import */ var _setCity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCity */ \"./src/js/setCity.js\");\n/* harmony import */ var _getMoveTimeZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getMoveTimeZone */ \"./src/js/getMoveTimeZone.js\");\n/* harmony import */ var _speechRecognition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speechRecognition */ \"./src/js/speechRecognition.js\");\n/* harmony import */ var _getDayForecast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getDayForecast */ \"./src/js/getDayForecast.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clock */ \"./src/js/clock.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst API_URL_OPENWEATHERMAP = 'http://api.openweathermap.org/data/2.5/weather?';\nconst API_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast?';\nconst API_KEY_OPENWEATHERMAP = 'b4f65cf90d6f560acfd868685df2a907';\nconst UNITS = {\n  metric: 'metric',\n  imperial: 'imperial',\n};\n// let searchMethod; // q or zip\n\nconst SEARCH_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('#search-button');\nconst SEARCH_INPUT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('#search-input');\nconst WEATHER_DESCRIPTION = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-bottom_details_header');\nconst TEMPERATURE_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-main_temperature');\nconst HUMIDITY_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-bottom_details_humidity');\nconst WIND_ELEMENT = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-bottom_details_wind');\nconst CITY_HEADER = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-city');\nconst WEATHER_ICON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-main_img_icon');\nconst REFRESH = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.refresh');\nconst LATITUDE = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.map--latitude');\nconst LONGITUDE = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.map--longitude');\nconst API_URL_IPINFO = 'https://ipinfo.io/json?';\nconst API_KEY_IPINFO = 'token=96f0ed5b780faa';\nconst DATE = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-date');\nconst FEELS = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.weather--today_description-bottom_details_feels');\nconst DAY_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.tomorrow');\nconst DAY_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.two_day');\nconst DAY_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.three_day');\nconst TEMP_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.one_temp');\nconst TEMP_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.two_temp');\nconst TEMP_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.three_temp');\nconst ICON_ONE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.one_icon');\nconst ICON_TWO_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.two_icon');\nconst ICON_THREE_FORECAST = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.three_icon');\n// const API_URL_OPENCAGEDATAURL = 'https://api.opencagedata.com/geocode/v1/json?q=';\n// const API_KEY_OPENCAGEDATAURL = '95581ec720374ee0a895973488b78690';\nconst FARENGEIT_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.temperature_far');\nconst CELCIUM_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.temperature_cel');\nconst VOICE_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.search--control_voice');\nconst RU_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.ru');\nconst EN_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.en');\nconst BE_BUTTON = Object(_BaseView__WEBPACK_IMPORTED_MODULE_1__[\"getElement\"])('.be');\n\n\nasync function getCurrentPosition() {\n  let url;\n  url = API_URL_IPINFO + API_KEY_IPINFO;\n\n  const res = await fetch(url);\n  const data = await res.json();\n  const {\n    city, loc, country, timezone,\n  } = data;\n  const coords = loc.split(',');\n  const conversionValue = localStorage.getItem('conversion') || 'metric';\n  const cityValue = city;\n  searchWeather(cityValue, conversionValue);\n  searchWeatherThree(cityValue, conversionValue);\n  ymaps.ready(initMap(coords));\n  localStorage.setItem('city', cityValue);\n  Object(_setCity__WEBPACK_IMPORTED_MODULE_5__[\"setCity\"])(cityValue);\n  localStorage.setItem('timeZone', timezone);\n}\n\ngetCurrentPosition();\n\nlet myMap;\n\nfunction initMap(coordinates) {\n  return function () {\n    myMap = new ymaps.Map('map', {\n      center: coordinates,\n      zoom: 10,\n    });\n    const latitudeValue = coordinates[0];\n    const longitudeValue = coordinates[1];\n    const lang = localStorage.getItem('language') || 'EN';\n    if (lang === 'RU') {\n      LATITUDE.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].latitude}: ${convertLatitude(latitudeValue)}`;\n      LONGITUDE.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].longitude}: ${convertLongitude(longitudeValue)}`;\n    } else if (lang === 'BE') {\n      LATITUDE.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"].latitude}: ${convertLatitude(latitudeValue)}`;\n      LONGITUDE.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"].longitude}: ${convertLongitude(longitudeValue)}`;\n    } else {\n      LATITUDE.innerHTML = `Latitude: ${convertLatitude(latitudeValue)}`;\n      LONGITUDE.innerHTML = `Longitude: ${convertLongitude(longitudeValue)}`;\n    }\n  };\n}\n\nfunction geoCoder(city) {\n  ymaps.geocode(city, {\n    results: 1,\n  }).then((res) => {\n    const firstGeoObject = res.geoObjects.get(0);\n    const coords = firstGeoObject.geometry.getCoordinates();\n    const bounds = firstGeoObject.properties.get('boundedBy');\n    console.log(firstGeoObject);\n    console.log('geocoder', coords);\n    myMap.geoObjects.add(firstGeoObject);\n    myMap.setBounds(bounds, {\n      checkZoomRange: true,\n    });\n    const latitudeValue = coords[0];\n    const longitudeValue = coords[1];\n    LATITUDE.innerHTML = `Latitude: ${convertLatitude(latitudeValue)}`;\n    LONGITUDE.innerHTML = `Longitude: ${convertLongitude(longitudeValue)}`;\n  });\n}\n\nfunction convertLatitude(lat) {\n  const convertLat = Math.abs(lat);\n  const LatDeg = Math.floor(convertLat);\n  const LatMin = (Math.floor((convertLat - LatDeg) * 60));\n  const LatCardinal = ((lat > 0) ? '°' : 's');\n  return LatDeg + LatCardinal + LatMin;\n}\n\nfunction convertLongitude(lng) {\n  const convertLng = Math.abs(lng);\n  const LngDeg = Math.floor(convertLng);\n  const LngMin = (Math.floor((convertLng - LngDeg) * 60));\n  const LngCardinal = ((lng > 0) ? '°' : '°');\n  return LngDeg + LngCardinal + LngMin;\n}\n\n// вынесла в отдельный модуль\nfunction searchWeather(searchTerm, degreeValue) {\n  const metricTerm = UNITS[degreeValue];\n  const lang = localStorage.getItem('language') || 'EN';\n  fetch(`${API_URL_OPENWEATHERMAP}q=${searchTerm}&APPID=${API_KEY_OPENWEATHERMAP}&units=${metricTerm}&lang=${lang}`)\n    .then((result) => result.json()).then((res) => {\n      init(res);\n    });\n}\n\nObject(_clock__WEBPACK_IMPORTED_MODULE_9__[\"clock\"])();\nsetInterval((() => Object(_clock__WEBPACK_IMPORTED_MODULE_9__[\"clock\"])()), 100);\n\n// вынесла в отдельный модуль\nfunction searchWeatherThree(searchTerm, degreeValue) {\n  // getSearchMethod(searchTerm);\n  const metricTerm = UNITS[degreeValue];\n  const lang = localStorage.getItem('language') || 'EN';\n  fetch(` ${API_URL_FORECAST}q=${searchTerm}&units=${metricTerm}&appid=${API_KEY_OPENWEATHERMAP}&lang=${lang}`)\n    .then((result) => result.json()).then((res) => {\n      initThree(res);\n    });\n}\n\n// add destructing\nfunction init(resultFromServer) {\n  const weatherValue = resultFromServer.weather[0].main.toLowerCase();\n  const cityValue = resultFromServer.name;\n  console.log('погодные условия', weatherValue);\n  localStorage.setItem('cityValue', cityValue);\n  localStorage.setItem('weatherValue', weatherValue);\n  // потом добавить обязательно!!!\n  // getImageUrl(cityValue, weatherValue);\n  // console.log(resultFromServer);localStorage.getItem('language')\n  const lang = localStorage.getItem('language') || 'EN';\n  if (lang === 'RU') {\n    console.log(_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].feelsLike);\n    const resultDescription = resultFromServer.weather[0].description;\n    WEATHER_DESCRIPTION.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n    FEELS.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].feelsLike} ${Math.floor(resultFromServer.main.feels_like)}&#176;`;\n    WIND_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].wind} ${Math.floor(resultFromServer.wind.speed)} m/s`;\n    HUMIDITY_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"RU\"].humidity} ${resultFromServer.main.humidity}%`;\n  } else if (lang === 'EN') {\n    const resultDescription = resultFromServer.weather[0].description;\n    WEATHER_DESCRIPTION.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n    FEELS.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"EN\"].feelsLike} ${Math.floor(resultFromServer.main.feels_like)}&#176;`;\n    WIND_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"EN\"].wind} ${Math.floor(resultFromServer.wind.speed)} m/s`;\n    HUMIDITY_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"EN\"].humidity} ${resultFromServer.main.humidity}%`;\n  } else if (lang === 'BE') {\n    FEELS.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"].feelsLike} ${Math.floor(resultFromServer.main.feels_like)}&#176;`;\n    WIND_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"].wind} ${Math.floor(resultFromServer.wind.speed)} m/s`;\n    HUMIDITY_ELEMENT.innerHTML = `${_translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"].humidity} ${resultFromServer.main.humidity}%`;\n    const resultDescription = _translate__WEBPACK_IMPORTED_MODULE_3__[\"BE\"][resultFromServer.weather[0].description];\n    WEATHER_DESCRIPTION.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n    console.log(resultDescription);\n  }\n  WEATHER_ICON.src = `../assets/img/weather-png/${resultFromServer.weather[0].icon}.png`;\n\n  TEMPERATURE_ELEMENT.innerHTML = `${Math.floor(resultFromServer.main.temp)}&#176;`;\n  CITY_HEADER.innerHTML = `${resultFromServer.name} ${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"][resultFromServer.sys.country]}`;\n}\n\nfunction initThree(data) {\n  const FORECAST_FIVEDAYS = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'));\n  const forecastThreeDays = FORECAST_FIVEDAYS.slice(0, 3);\n  const dateValueOne = forecastThreeDays[0].dt_txt;\n  DAY_ONE_FORECAST.innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_8__[\"getDayForecast\"])(dateValueOne);\n  const dateValueTwo = forecastThreeDays[1].dt_txt;\n  DAY_TWO_FORECAST.innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_8__[\"getDayForecast\"])(dateValueTwo);\n  const dateValueThree = forecastThreeDays[2].dt_txt;\n  DAY_THREE_FORECAST.innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_8__[\"getDayForecast\"])(dateValueThree);\n  const tempValueOne = forecastThreeDays[0].main.temp;\n  TEMP_ONE_FORECAST.innerHTML = `${Math.floor(tempValueOne)}&#176;`;\n  const tempValueTwo = forecastThreeDays[1].main.temp;\n  TEMP_TWO_FORECAST.innerHTML = `${Math.floor(tempValueTwo)}&#176;`;\n  const tempValueThree = forecastThreeDays[2].main.temp;\n  TEMP_THREE_FORECAST.innerHTML = `${Math.floor(tempValueThree)}&#176;`;\n  ICON_ONE_FORECAST.src = `../assets/img/weather-png/${forecastThreeDays[0].weather[0].icon}.png`;\n  ICON_TWO_FORECAST.src = `../assets/img/weather-png/${forecastThreeDays[1].weather[0].icon}.png`;\n  ICON_THREE_FORECAST.src = `../assets/img/weather-png/${forecastThreeDays[2].weather[0].icon}.png`;\n}\n\nObject(_getImageUrl__WEBPACK_IMPORTED_MODULE_4__[\"getImageUrl\"])();\n\nSEARCH_BUTTON.addEventListener('click', () => {\n  const searchValue = SEARCH_INPUT.value;\n\n  if (searchValue) {\n    const conversionValue = localStorage.getItem('conversion') || 'metric';\n    Object(_getMoveTimeZone__WEBPACK_IMPORTED_MODULE_6__[\"getMoveTimeZone\"])(searchValue);\n    const cityValue = localStorage.getItem('cityLang') || searchValue;\n    geoCoder(searchValue);\n    localStorage.setItem('city', searchValue);\n  }\n});\n\ndocument.addEventListener('keypress', ({ key }) => {\n  if (key === 'Enter') {\n    SEARCH_BUTTON.click();\n  }\n});\n\nREFRESH.addEventListener('click', () => {\n  REFRESH.innerHTML = '';\n  REFRESH.classList.add('spinning');\n\n  setTimeout(\n    () => {\n      REFRESH.classList.remove('spinning');\n      REFRESH.innerHTML = '<i class=\"fas fa-sync-alt\"></i>';\n    }, 6000,\n  );\n\n  Object(_getImageUrl__WEBPACK_IMPORTED_MODULE_4__[\"getImageUrl\"])();\n}, false);\n\nFARENGEIT_BUTTON.addEventListener('click', () => {\n  const cityValue = localStorage.getItem('city');\n  localStorage.removeItem('conversion');\n  localStorage.setItem('conversion', 'imperial');\n  searchWeather(cityValue, 'imperial');\n  searchWeatherThree(cityValue, 'imperial');\n  CELCIUM_BUTTON.style.backgroundColor = null;\n  FARENGEIT_BUTTON.style.backgroundColor = 'green';\n});\n\nCELCIUM_BUTTON.addEventListener('click', () => {\n  const cityValue = localStorage.getItem('city');\n  localStorage.removeItem('conversion');\n  localStorage.setItem('conversion', 'metric');\n  searchWeather(cityValue, 'metric');\n  searchWeatherThree(cityValue, 'metric');\n  FARENGEIT_BUTTON.style.backgroundColor = null;\n  CELCIUM_BUTTON.style.backgroundColor = 'green';\n});\n\nVOICE_BUTTON.addEventListener('click', () => {\n  Object(_speechRecognition__WEBPACK_IMPORTED_MODULE_7__[\"speechRecognition\"])();\n  VOICE_BUTTON.style.backgroundColor = 'green';\n});\n\nRU_BUTTON.addEventListener('click', () => {\n  localStorage.setItem('language', 'RU');\n  const cityValue = localStorage.getItem('cityValue');\n  const degreeValue = localStorage.getItem('conversion') || 'metric';\n  Object(_getMoveTimeZone__WEBPACK_IMPORTED_MODULE_6__[\"getMoveTimeZone\"])(cityValue);\n});\n\nEN_BUTTON.addEventListener('click', () => {\n  localStorage.setItem('language', 'EN');\n  const cityValue = localStorage.getItem('cityValue');\n  const degreeValue = localStorage.getItem('conversion') || 'metric';\n  Object(_getMoveTimeZone__WEBPACK_IMPORTED_MODULE_6__[\"getMoveTimeZone\"])(cityValue);\n});\n\nBE_BUTTON.addEventListener('click', () => {\n  localStorage.setItem('language', 'BE');\n  const cityValue = localStorage.getItem('cityValue');\n  const degreeValue = localStorage.getItem('conversion') || 'metric';\n  Object(_getMoveTimeZone__WEBPACK_IMPORTED_MODULE_6__[\"getMoveTimeZone\"])(cityValue);\n});\n\n// [X] todo localStorage добавить настройки температуры\n// [X] map\n// [X] langitude\n// [X] to do poisk po karte, чтобы с Минска перескакивало на другой город\n// [X] подправить latitude longitude для перескакивания карты\n// [X] change date according to timezone\n// [X] resolution 320px\n// [X] пересчет farengeit celcium\n// [X] перевод на языки\n// [X] перевод по поиску города\n// [X] openweather не переводит описание погоды на белорусский?? что делать? done\n// [X] todo localStorage добавить настройки языка\n// [X] unsplash добавить в api время суток и сезон\n// [X] голосовой поиск работает\n// [X] если будет время допилить голосовой поиск, working!!!\n// [X] iso коды стран заменить на полное название\n// [] тесты\n// [X] button refresh - проверить когда api заработает\n// [] eslint проверить\n// [] editorconfig, eslint, eslint-config-airbnb-base, babel\n// [] разбить на модули\n// [] destructing\n// [] search city only in English because of openweatherAPI\n// [X] speech recognition in english\n// [] перевод даты на белорусский\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n/* harmony import */ var _translate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.js */ \"./src/js/translate.js\");\n\n\n\nfunction init(resultFromServer) {\n    try {resultFromServer.weather[0].main.toLowerCase();}\n    catch {alert('Sorry! Openweathermap did not find weather for this location');}\n        let weatherValue = resultFromServer.weather[0].main.toLowerCase();\n        let cityValue = resultFromServer.name;\n        console.log('погодные условия', weatherValue);\n        localStorage.setItem('cityValue', cityValue);\n        localStorage.setItem('weatherValue', weatherValue);\n        //потом добавить обязательно!!!\n        //getImageUrl(cityValue, weatherValue);\n        //console.log(resultFromServer);localStorage.getItem('language')\n        let lang = localStorage.getItem('language') || 'EN';\n        if(lang === 'RU') {\n            console.log(_translate_js__WEBPACK_IMPORTED_MODULE_1__[\"RU\"].feelsLike);\n            let resultDescription = resultFromServer.weather[0].description;\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WEATHER_DESCRIPTION\"].innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"FEELS\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"RU\"].feelsLike + ' ' + Math.floor(resultFromServer.main.feels_like) + '&#176;';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WIND_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"RU\"].wind + ' ' + Math.floor(resultFromServer.wind.speed) + ' m/s';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"HUMIDITY_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"RU\"].humidity + ' ' + resultFromServer.main.humidity +  '%';\n        }\n        else if (lang === 'EN') {\n            let resultDescription = resultFromServer.weather[0].description;\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WEATHER_DESCRIPTION\"].innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"FEELS\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"EN\"].feelsLike + ' ' + Math.floor(resultFromServer.main.feels_like) + '&#176;';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WIND_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"EN\"].wind + ' ' + Math.floor(resultFromServer.wind.speed) + ' m/s';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"HUMIDITY_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"EN\"].humidity + ' ' + resultFromServer.main.humidity +  '%';\n        }\n        else if (lang === 'BE') {\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"FEELS\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"BE\"].feelsLike + ' ' + Math.floor(resultFromServer.main.feels_like) + '&#176;';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WIND_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"BE\"].wind + ' ' + Math.floor(resultFromServer.wind.speed) + ' m/s';\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"HUMIDITY_ELEMENT\"].innerHTML = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"BE\"].humidity + ' ' + resultFromServer.main.humidity +  '%';\n            let resultDescription = _translate_js__WEBPACK_IMPORTED_MODULE_1__[\"BE\"][resultFromServer.weather[0].description];\n            _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WEATHER_DESCRIPTION\"].innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);\n            console.log(resultDescription);\n        }\n        _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"WEATHER_ICON\"].src = '../assets/img/weather-png/' + resultFromServer.weather[0].icon + '.png';\n        \n        _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"TEMPERATURE_ELEMENT\"].innerHTML = Math.floor(resultFromServer.main.temp) + '&#176;';\n        //CITY_HEADER.innerHTML = resultFromServer.name + ' ' + config[resultFromServer.sys.country];\n        \n    }\n\n    \n\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/initThree.js":
/*!*****************************!*\
  !*** ./src/js/initThree.js ***!
  \*****************************/
/*! exports provided: initThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initThree\", function() { return initThree; });\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n/* harmony import */ var _getDayForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDayForecast */ \"./src/js/getDayForecast.js\");\n\n\n\nfunction initThree(data) {\n  const FORECAST_FIVEDAYS = data.list.filter((reading) => reading.dt_txt.includes('12:00:00'));\n  const forecastThreeDays = FORECAST_FIVEDAYS.slice(0, 3);\n  const dateValueOne = forecastThreeDays[0].dt_txt;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"DAY_ONE_FORECAST\"].innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_1__[\"getDayForecast\"])(dateValueOne);\n  const dateValueTwo = forecastThreeDays[1].dt_txt;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"DAY_TWO_FORECAST\"].innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_1__[\"getDayForecast\"])(dateValueTwo);\n  const dateValueThree = forecastThreeDays[2].dt_txt;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"DAY_THREE_FORECAST\"].innerHTML = Object(_getDayForecast__WEBPACK_IMPORTED_MODULE_1__[\"getDayForecast\"])(dateValueThree);\n  const tempValueOne = forecastThreeDays[0].main.temp;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"TEMP_ONE_FORECAST\"].innerHTML = `${Math.floor(tempValueOne)}&#176;`;\n  const tempValueTwo = forecastThreeDays[1].main.temp;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"TEMP_TWO_FORECAST\"].innerHTML = `${Math.floor(tempValueTwo)}&#176;`;\n  const tempValueThree = forecastThreeDays[2].main.temp;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"TEMP_THREE_FORECAST\"].innerHTML = `${Math.floor(tempValueThree)}&#176;`;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"ICON_ONE_FORECAST\"].src = `../assets/img/weather-png/${forecastThreeDays[0].weather[0].icon}.png`;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"ICON_TWO_FORECAST\"].src = `../assets/img/weather-png/${forecastThreeDays[1].weather[0].icon}.png`;\n  _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"ICON_THREE_FORECAST\"].src = `../assets/img/weather-png/${forecastThreeDays[2].weather[0].icon}.png`;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/initThree.js?");

/***/ }),

/***/ "./src/js/searchWeather.js":
/*!*********************************!*\
  !*** ./src/js/searchWeather.js ***!
  \*********************************/
/*! exports provided: searchWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchWeather\", function() { return searchWeather; });\n/* harmony import */ var _variablesAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variablesAPI */ \"./src/js/variablesAPI.js\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ \"./src/js/init.js\");\n\n\n\nfunction searchWeather(searchTerm, degreeValue) {\n  const metricTerm = _variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"UNITS\"][degreeValue];\n  const lang = localStorage.getItem('language') || 'EN';\n  fetch(`${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_OPENWEATHERMAP\"]}q=${searchTerm}&APPID=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY_OPENWEATHERMAP\"]}&units=${metricTerm}&lang=${lang}`)\n    .then((result) => result.json()).then((res) => {\n      Object(_init__WEBPACK_IMPORTED_MODULE_1__[\"init\"])(res);\n    });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/searchWeather.js?");

/***/ }),

/***/ "./src/js/searchWeatherThree.js":
/*!**************************************!*\
  !*** ./src/js/searchWeatherThree.js ***!
  \**************************************/
/*! exports provided: searchWeatherThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchWeatherThree\", function() { return searchWeatherThree; });\n/* harmony import */ var _variablesAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variablesAPI */ \"./src/js/variablesAPI.js\");\n/* harmony import */ var _initThree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initThree */ \"./src/js/initThree.js\");\n\n\n\nfunction searchWeatherThree(searchTerm, degreeValue) {\n  // getSearchMethod(searchTerm);\n  const metricTerm = _variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"UNITS\"][degreeValue];\n  const lang = localStorage.getItem('language') || 'EN';\n  fetch(` ${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_FORECAST\"]}q=${searchTerm}&units=${metricTerm}&appid=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY_OPENWEATHERMAP\"]}&lang=${lang}`)\n    .then((result) => result.json()).then((res) => {\n      Object(_initThree__WEBPACK_IMPORTED_MODULE_1__[\"initThree\"])(res);\n    });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/searchWeatherThree.js?");

/***/ }),

/***/ "./src/js/setCity.js":
/*!***************************!*\
  !*** ./src/js/setCity.js ***!
  \***************************/
/*! exports provided: setCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCity\", function() { return setCity; });\n/* harmony import */ var _variablesAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variablesAPI */ \"./src/js/variablesAPI.js\");\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n\n\n\nfunction setCity(city) {\n  const language = localStorage.getItem('language') || 'EN';\n  const langChange = language.toLowerCase();\n  fetch(`${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_URL_OPENCAGEDATAURL\"]}${city}&key=${_variablesAPI__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY_OPENCAGEDATAURL\"]}&language=${langChange}`)\n    .then((result) => result.json()).then((res) => {\n      const cityLang = res.results[0].formatted;\n      _htmlElements__WEBPACK_IMPORTED_MODULE_1__[\"CITY_HEADER\"].innerHTML = cityLang;\n      // localStorage.setItem('cityValue', cityLang);\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/setCity.js?");

/***/ }),

/***/ "./src/js/speechRecognition.js":
/*!*************************************!*\
  !*** ./src/js/speechRecognition.js ***!
  \*************************************/
/*! exports provided: speechRecognition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"speechRecognition\", function() { return speechRecognition; });\n/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements */ \"./src/js/htmlElements.js\");\n\n\nfunction speechRecognition() {\n  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n  const recognition = new SpeechRecognition();\n  recognition.interimResults = true;\n  const lang = localStorage.getItem('language') || 'EN';\n  recognition.lang = lang;\n  recognition.addEventListener('result', (e) => {\n    const transcript = Array.from(e.results)\n      .map((result) => result[0])\n      .map((result) => result.transcript)\n      .join('');\n\n    _htmlElements__WEBPACK_IMPORTED_MODULE_0__[\"SEARCH_INPUT\"].value = transcript;\n    localStorage.setItem('city', transcript);\n  });\n\n  recognition.addEventListener('end', recognition.start);\n  recognition.start();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/speechRecognition.js?");

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/*! exports provided: getTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTemplate\", function() { return getTemplate; });\nconst getTemplate = () => {\n  const wrapper = `\n    <div class=\"wrapper\">\n    <div class=\"headline\">\n        <div class=\"headline--bar\">\n            <button class=\"headline--bar_button refresh\"><i class=\"fas fa-sync-alt\"></i></button>\n            <button class=\"headline--bar_button lang en\">EN</button>\n            <button class=\"headline--bar_button lang ru\">RU</button>\n            <button class=\"headline--bar_button lang be\">BE</button>\n            <button class=\"headline--bar_button temperature_far\">&deg;F</button>\n            <button class=\"headline--bar_button temperature_cel\">&deg;C</button>\n        </div>\n        <div class=\"search\">\n            <button class=\"search--control_voice headline--bar_button\"><i class=\"fas fa-microphone-alt\"></i></button>\n            <input class=\"search--control_input\" type=\"text\" placeholder=\"Search city\" id=\"search-input\">\n            <button class=\"search--control_submit headline--bar_button\" id=\"search-button\">SEARCH</button>\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"weather--today\">\n            <div class=\"weather--today_description\">\n                <h3 class=\"weather--today_description-city\"></h3>\n                <div class=\"weather--today_description-date\"></div>\n                <div class=\"weather--today_description-main\">\n                    <div class=\"weather--today_description-main_temperature\">&deg;</div>\n                    <div class=\"weather--today_description-main_right\">\n                        <div class=\"weather--today_description-main_img\">\n                            <img class=\"weather--today_description-main_img_icon\">\n                        </div>\n                        <div class=\"weather--today_description-main_bottom\">\n                            <div class=\"weather--today_description-bottom_details_header\"></div>\n                            <div class=\"weather--today_description-bottom_details_feels\"></div>\n                            <div class=\"weather--today_description-bottom_details_wind\"></div>\n                            <div class=\"weather--today_description-bottom_details_humidity\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"weather--today_days\">\n                    <div class=\"weather--today_days-wrapper\">\n                        <div class=\"weather--today_day tomorrow\">Tuesday</div>\n                        <div class=\"weather--today_days-bottom\">\n                            <div class=\"weather--today_days-temperature one_temp\">7</div>\n                            <img class=\"weather--today_days-img one_icon\">\n                        </div>\n                    </div>\n                    <div class=\"weather--today_days-wrapper\">\n                        <div class=\"weather--today_day two_day\">Tuesday</div>\n                        <div class=\"weather--today_days-bottom\">\n                            <div class=\"weather--today_days-temperature two_temp\">7&deg;</div>\n                            <img class=\"weather--today_days-img two_icon\">\n                        </div>\n                    </div>\n                    <div class=\"weather--today_days-wrapper\">\n                        <div class=\"weather--today_day three_day\">Tuesday</div>\n                        <div class=\"weather--today_days-bottom\">\n                            <div class=\"weather--today_days-temperature three_temp\">7&deg;</div>\n                            <img class=\"weather--today_days-img three_icon\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"map--container\">\n            <div class=\"map--item\" id=\"map\"></div>\n            <div class=\"map--coordinates\">\n                <p class=\"map--latitude\"></p>\n                <p class=\"map--longitude\"></p>\n            </div>\n        </div>\n        <div class=\"popup\"></div>\n    </div>\n</div>`;\n  return wrapper;\n};\ndocument.querySelector('.root').innerHTML = getTemplate();\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/template.js?");

/***/ }),

/***/ "./src/js/translate.js":
/*!*****************************!*\
  !*** ./src/js/translate.js ***!
  \*****************************/
/*! exports provided: RU, EN, BE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RU\", function() { return RU; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EN\", function() { return EN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BE\", function() { return BE; });\nconst RU = {\n  feelsLike: 'Ощущается как',\n  wind: 'ветер',\n  humidity: 'влажность',\n  latitude: 'широта',\n  longitude: 'долгота',\n};\n\nconst EN = {\n  feelsLike: 'feels like',\n  wind: 'wind',\n  humidity: 'humidity',\n  latitude: 'latitude',\n  longitude: 'longitude',\n};\n\nconst BE = {\n  feelsLike: 'адчуваецца як',\n  wind: 'вецер',\n  humidity: 'вільготнасць',\n  latitude: 'шырата',\n  longitude: 'даўгата',\n  'clear sky': 'яснае неба',\n  'few clouds': 'некалькі аблокаў',\n  'scattered clouds': 'раскіданыя хмары',\n  'broken clouds': 'разбітыя хмары',\n  'shower rain': 'ліўневы дождж',\n  rain: 'дождж',\n  thunderstorm: 'навальніца',\n  snow: 'снег',\n  mist: 'туман',\n  'light snow': 'невялікі снег',\n  'overcast clouds': 'пахмурна',\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/translate.js?");

/***/ }),

/***/ "./src/js/variablesAPI.js":
/*!********************************!*\
  !*** ./src/js/variablesAPI.js ***!
  \********************************/
/*! exports provided: API_CLIENTID_UNSPLASH, API_URL_UNSPLASH, API_URL_OPENCAGEDATAURL, API_KEY_OPENCAGEDATAURL, API_URL_IPINFO, API_KEY_IPINFO, API_URL_OPENWEATHERMAP, API_URL_FORECAST, API_KEY_OPENWEATHERMAP, UNITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_CLIENTID_UNSPLASH\", function() { return API_CLIENTID_UNSPLASH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_UNSPLASH\", function() { return API_URL_UNSPLASH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_OPENCAGEDATAURL\", function() { return API_URL_OPENCAGEDATAURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY_OPENCAGEDATAURL\", function() { return API_KEY_OPENCAGEDATAURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_IPINFO\", function() { return API_URL_IPINFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY_IPINFO\", function() { return API_KEY_IPINFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_OPENWEATHERMAP\", function() { return API_URL_OPENWEATHERMAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL_FORECAST\", function() { return API_URL_FORECAST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY_OPENWEATHERMAP\", function() { return API_KEY_OPENWEATHERMAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNITS\", function() { return UNITS; });\nconst API_CLIENTID_UNSPLASH = 'acf0eb48c421e324eef78b3f06c8f05f160835eb2c07ccb2b4ee81a86a472ad8';\nconst API_URL_UNSPLASH = 'https://api.unsplash.com/photos/random?query=';\nconst API_URL_OPENCAGEDATAURL = 'https://api.opencagedata.com/geocode/v1/json?q=';\nconst API_KEY_OPENCAGEDATAURL = '95581ec720374ee0a895973488b78690';\nconst API_URL_IPINFO = 'https://ipinfo.io/json?';\nconst API_KEY_IPINFO = 'token=96f0ed5b780faa';\nconst API_URL_OPENWEATHERMAP = 'http://api.openweathermap.org/data/2.5/weather?';\nconst API_URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast?';\nconst API_KEY_OPENWEATHERMAP = 'b4f65cf90d6f560acfd868685df2a907';\nconst UNITS = {\n  metric: 'metric',\n  imperial: 'imperial',\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/variablesAPI.js?");

/***/ }),

/***/ "./src/scss/_normalize.scss":
/*!**********************************!*\
  !*** ./src/scss/_normalize.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/_normalize.scss?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/fontawesome/fontawesome.scss":
/*!***********************************************!*\
  !*** ./src/scss/fontawesome/fontawesome.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/fontawesome/fontawesome.scss?");

/***/ })

/******/ });