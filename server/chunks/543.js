"use strict";
exports.id = 543;
exports.ids = [543];
exports.modules = {

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",
        children: children
    }));
};


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ socialKeys),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(866);


const socialKeys = [
    'email',
    'github',
    'facebook',
    'youtube',
    'linkedin',
    'twitter',
    'ctftime',
    'discord',
    'web',
    'hackerearth',
    'codeforces', 
];
const SocialBar = ({ email , github , facebook , youtube , linkedin , twitter , ctftime , discord , web , hackerearth , codeforces , size  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex mb-3 space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "web",
                href: web,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "mail",
                href: `mailto:${email}`,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "github",
                href: github,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "facebook",
                href: facebook,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "youtube",
                href: youtube,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "linkedin",
                href: linkedin,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "twitter",
                href: twitter,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "ctftime",
                href: ctftime,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "discord",
                href: discord,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "hackerearth",
                href: hackerearth,
                size: size ?? 6
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                kind: "codeforces",
                href: codeforces,
                size: size ?? 6
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialBar);


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ social_icons)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/social-icons/mail.svg
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMail = function SvgMail(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"
  })));
};
/* harmony default export */ const mail = (SvgMail);
;// CONCATENATED MODULE: ./components/social-icons/github.svg
var github_path;
function github_extends() { github_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return github_extends.apply(this, arguments); }

var SvgGithub = function SvgGithub(props) {
  return /*#__PURE__*/external_react_.createElement("svg", github_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), github_path || (github_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })));
};
/* harmony default export */ const github = (SvgGithub);
;// CONCATENATED MODULE: ./components/social-icons/facebook.svg
var facebook_path;
function facebook_extends() { facebook_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return facebook_extends.apply(this, arguments); }

var SvgFacebook = function SvgFacebook(props) {
  return /*#__PURE__*/external_react_.createElement("svg", facebook_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), facebook_path || (facebook_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  })));
};
/* harmony default export */ const facebook = (SvgFacebook);
;// CONCATENATED MODULE: ./components/social-icons/youtube.svg
var youtube_path;
function youtube_extends() { youtube_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return youtube_extends.apply(this, arguments); }

var SvgYoutube = function SvgYoutube(props) {
  return /*#__PURE__*/external_react_.createElement("svg", youtube_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), youtube_path || (youtube_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
  })));
};
/* harmony default export */ const youtube = (SvgYoutube);
;// CONCATENATED MODULE: ./components/social-icons/linkedin.svg
var linkedin_path;
function linkedin_extends() { linkedin_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return linkedin_extends.apply(this, arguments); }

var SvgLinkedin = function SvgLinkedin(props) {
  return /*#__PURE__*/external_react_.createElement("svg", linkedin_extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), linkedin_path || (linkedin_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  })));
};
/* harmony default export */ const linkedin = (SvgLinkedin);
;// CONCATENATED MODULE: ./components/social-icons/twitter.svg
var twitter_path;
function twitter_extends() { twitter_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return twitter_extends.apply(this, arguments); }

var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/external_react_.createElement("svg", twitter_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props), twitter_path || (twitter_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
  })));
};
/* harmony default export */ const twitter = (SvgTwitter);
;// CONCATENATED MODULE: ./components/social-icons/ctftime.svg
var ctftime_path;
function ctftime_extends() { ctftime_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ctftime_extends.apply(this, arguments); }

var SvgCtftime = function SvgCtftime(props) {
  return /*#__PURE__*/external_react_.createElement("svg", ctftime_extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ctftime_path || (ctftime_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M24 0v24H0V0h24Zm-3.077 3.077L7.067 3.076 16 12.816 10.369 19l-2.195-2.612 3.476-3.573-8.574-9.609v17.717h17.847V3.077Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
};
/* harmony default export */ const ctftime = (SvgCtftime);
;// CONCATENATED MODULE: ./components/social-icons/discord.svg
var discord_path, discord_path2;
function discord_extends() { discord_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return discord_extends.apply(this, arguments); }

var SvgDiscord = function SvgDiscord(props) {
  return /*#__PURE__*/external_react_.createElement("svg", discord_extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, props), discord_path || (discord_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), discord_path2 || (discord_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z",
    fill: "currentColor"
  })));
};
/* harmony default export */ const discord = (SvgDiscord);
;// CONCATENATED MODULE: ./components/social-icons/web.svg
var web_path, _g;
function web_extends() { web_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return web_extends.apply(this, arguments); }

var SvgWeb = function SvgWeb(props) {
  return /*#__PURE__*/external_react_.createElement("svg", web_extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, props), web_path || (web_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/external_react_.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }))));
};
/* harmony default export */ const web = (SvgWeb);
;// CONCATENATED MODULE: ./components/social-icons/hackerearth.svg
var hackerearth_path, hackerearth_path2;
function hackerearth_extends() { hackerearth_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hackerearth_extends.apply(this, arguments); }

var SvgHackerearth = function SvgHackerearth(props) {
  return /*#__PURE__*/external_react_.createElement("svg", hackerearth_extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, props), hackerearth_path || (hackerearth_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), hackerearth_path2 || (hackerearth_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M18.447 20.936H5.553V19.66h12.894zM20.973 0H9.511v6.51h.104c.986-1.276 2.206-1.4 3.538-1.306 1.967.117 3.89 1.346 4.017 5.169v7.322c0 .089-.05.177-.138.177h-2.29c-.09 0-.253-.082-.253-.177V10.6c0-1.783-.58-3.115-2.341-3.115-1.282 0-2.637.892-2.637 2.77v7.417c0 .089-.008.072-.102.072h-2.29c-.09 0-.29.022-.29-.072V0H3.178c-.843 0-1.581.673-1.581 1.515v20.996c0 .843.738 1.489 1.58 1.489h17.797c.843 0 1.431-.646 1.431-1.489V1.515c0-.842-.588-1.515-1.43-1.515",
    fill: "currentColor"
  })));
};
/* harmony default export */ const hackerearth = (SvgHackerearth);
;// CONCATENATED MODULE: ./components/social-icons/codeforces.svg
var codeforces_path;
function codeforces_extends() { codeforces_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return codeforces_extends.apply(this, arguments); }

var SvgCodeforces = function SvgCodeforces(props) {
  return /*#__PURE__*/external_react_.createElement("svg", codeforces_extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, props), codeforces_path || (codeforces_path = /*#__PURE__*/external_react_.createElement("path", {
    fill: "currentColor",
    d: "M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"
  })));
};
/* harmony default export */ const codeforces = (SvgCodeforces);
;// CONCATENATED MODULE: ./components/social-icons/index.tsx












// Icons taken from: https://simpleicons.org/
const components = {
    mail: mail,
    github: github,
    facebook: facebook,
    youtube: youtube,
    linkedin: linkedin,
    twitter: twitter,
    ctftime: ctftime,
    discord: discord,
    hackerearth: hackerearth,
    codeforces: codeforces,
    web: web
};
const SocialIcon = ({ kind , href , size =8  })=>{
    if (!href || kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)) return null;
    const SocialSvg = components[kind];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        className: "text-sm text-gray-500 transition hover:text-gray-600",
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "w-6",
                    children: kind
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialSvg, {
                className: `fill-current text-gray-700 w-${size} h-${size} dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400`
            })
        ]
    }));
};
/* harmony default export */ const social_icons = (SocialIcon);


/***/ })

};
;