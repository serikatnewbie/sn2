exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 8139,
	"./AuthorLayout.tsx": 8139,
	"./ListLayout": 951,
	"./ListLayout.tsx": 951,
	"./MemberLayout": 8338,
	"./MemberLayout.tsx": 8338,
	"./PostLayout": 5104,
	"./PostLayout.tsx": 5104,
	"./PostSimple": 8218,
	"./PostSimple.tsx": 8218
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "mdx-bundler/client"
var client_ = __webpack_require__(1228);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(5741);
;// CONCATENATED MODULE: ./components/TOCInline.tsx

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ='' , open =true  })=>{
    const re = Array.isArray(exclude) ? new RegExp('^(' + exclude.join('|') + ')$', 'i') : new RegExp('^(' + exclude + ')$', 'i');
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && 'ml-6'}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: open,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "pt-2 pb-2 ml-6 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    }));
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.tsx


const Pre = ({ children  })=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 w-8 h-8 p-1 rounded border-2 bg-gray-700 dark:bg-gray-800 ${copied ? 'focus:outline-none focus:border-green-400 border-green-400' : 'border-gray-300'}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? 'text-green-400' : 'text-gray-300',
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: children
            })
        ]
    }));
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./components/NewsletterForm.tsx
var NewsletterForm = __webpack_require__(1862);
;// CONCATENATED MODULE: ./components/CountryFlag.tsx

// Parameter: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
function CountryFlag({ country  }) {
    if (!country) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: `https://flagcdn.com/20x15/${country}.png`,
        alt: country,
        className: "inline-block align-text-middle bottom m-0"
    }));
};

;// CONCATENATED MODULE: ./components/Tweet.tsx

/**
 * Modified from react-tweet-embed, MIT license
 * react-tweet-embed, Copyright (c) 2016 Jiri Spac
 * https://github.com/capaj/react-tweet-embed/
 */ 
const callbacks = [];
function addScript(src, cb1) {
    if (callbacks.length === 0) {
        callbacks.push(cb1);
        const s = document.createElement('script');
        s.setAttribute('src', src);
        s.onload = ()=>callbacks.forEach((cb)=>cb()
            )
        ;
        document.body.appendChild(s);
    } else {
        callbacks.push(cb1);
    }
}
class Tweet extends (external_react_default()).Component {
    loadTweetForProps({ options , onTweetLoadSuccess , onTweetLoadError  }) {
        const renderTweet = ()=>{
            const twttr = window['twttr'];
            twttr.ready().then(({ widgets  })=>{
                // Clear previously rendered tweet before rendering the updated tweet id
                if (this._div) {
                    this._div.innerHTML = '';
                }
                options = Object.assign({
                }, Tweet.defaultProps, options);
                widgets.createTweetEmbed(this.props.tweetId, this._div, options).then((twitterWidgetElement)=>{
                    this.setState({
                        isLoading: false
                    });
                    onTweetLoadSuccess && onTweetLoadSuccess(twitterWidgetElement);
                }).catch(onTweetLoadError);
            });
        };
        const twttr1 = window['twttr'];
        if (!(twttr1 && twttr1.ready)) {
            const isLocal = window.location.protocol.indexOf('file') >= 0;
            const protocol = isLocal ? this.props.protocol : '';
            addScript(`${protocol}//platform.twitter.com/widgets.js`, renderTweet);
        } else {
            renderTweet();
        }
    }
    componentDidMount() {
        this.loadTweetForProps(this.props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tweetId !== nextProps.tweetId || this.props.className !== nextProps.className;
    }
    componentDidUpdate(nextProps1, nextState1) {
        if (this.props.tweetId !== nextProps1.tweetId) {
            this.loadTweetForProps(nextProps1);
        }
    }
    render() {
        const { props , state  } = this;
        const { tweetId , onTweetLoadError , onTweetLoadSuccess , options , children , protocol , ...restProps } = props;
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ...restProps,
            ref: (c)=>{
                this._div = c;
            },
            children: state.isLoading && props.children
        }));
    }
    constructor(...args){
        super(...args);
        this.state = {
            isLoading: true
        };
    }
}
Tweet.defaultProps = {
    protocol: 'https:',
    options: {
        theme: 'dark',
        align: 'center',
        chrome: 'transparent'
    },
    className: null
};
/* harmony default export */ const components_Tweet = (Tweet);

;// CONCATENATED MODULE: ./components/MDXComponents.tsx

/* eslint-disable react/display-name */ 







const Wrapper = ({ layout , ...rest })=>{
    const Layout = __webpack_require__(9618)(`./${layout}`).default;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        ...rest
    }));
};
const MDXComponents = {
    //@ts-ignore
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    wrapper: Wrapper,
    //@ts-ignore
    BlogNewsletterForm: NewsletterForm/* BlogNewsletterForm */.w,
    CountryFlag: CountryFlag,
    Tweet: components_Tweet
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    }));
};


/***/ }),

/***/ 5941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    }));
};


/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);



const UtterancesComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>{
    return __webpack_require__.e(/* import() */ 147).then(__webpack_require__.bind(__webpack_require__, 6147));
}, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6147)
            ]
        ,
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>{
    return __webpack_require__.e(/* import() */ 414).then(__webpack_require__.bind(__webpack_require__, 6414));
}, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(6414)
            ]
        ,
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>{
    return __webpack_require__.e(/* import() */ 939).then(__webpack_require__.bind(__webpack_require__, 9939));
}, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(9939)
            ]
        ,
        modules: [
            "../components/comments/index.tsx -> " + "@/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    let term;
    switch((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.giscusConfig.mapping) || (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.utterancesConfig.issueTerm)){
        case 'pathname':
            term = frontMatter.slug;
            break;
        case 'url':
            term = window.location.href;
            break;
        case 'title':
            term = frontMatter.title;
            break;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'giscus' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GiscusComponent, {
                mapping: term
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'utterances' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UtterancesComponent, {
                issueTerm: term
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment) && (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) === 'disqus' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ }),

/***/ 8139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(866);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1476);



function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "divide-y",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-6 pb-8 space-y-2 md:space-y-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center pt-8 space-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: avatar,
                                        alt: "avatar",
                                        width: "192px",
                                        height: "192px",
                                        className: "w-48 h-48 rounded-full"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: occupation
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: company
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex pt-6 space-x-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "mail",
                                                href: `mailto:${email}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "github",
                                                href: github
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "linkedin",
                                                href: linkedin
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                kind: "twitter",
                                                href: twitter
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2",
                                children: children
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MemberLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SocialBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9125);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const specialtyColors = {
    Web: 'sky',
    Crypto: 'purple',
    Pwn: 'red',
    Reverse: 'yellow',
    Forensics: 'pink',
    Misc: 'amber',
    OSINT: 'gray'
};
const keepClasses = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    className: "bg-gray-800 bg-red-800 bg-yellow-800 bg-purple-800 bg-pink-800 bg-sky-800 bg-amber-800"
});
function MemberLayout({ frontMatter , children  }) {
    const { name , avatar , specialties  } = frontMatter;
    const socialLinks = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(frontMatter, _components_SocialBar__WEBPACK_IMPORTED_MODULE_1__/* .socialKeys */ .S);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full p-4 md:w-1/2",
        style: {
            maxWidth: '544px'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col h-full gap-6 p-6 overflow-hidden border-2 border-gray-200 rounded-md md:flex-row border-opacity-60 dark:border-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: avatar,
                    className: "w-24 rounded h-auto self-start",
                    alt: `Profile pic of ${name}`
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mb-3 text-2xl font-bold leading-8 tracking-tight",
                            children: name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "flex flex-row flex-wrap items-start gap-2 mb-3 max-w-none",
                            children: specialties.map((specialty)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `inline-block px-3 py-1 text-white rounded-full bg-${specialtyColors[specialty] ?? 'green'}-800`,
                                    children: specialty
                                }, specialty)
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-3 prose text-gray-500 max-w-none dark:text-gray-400",
                            children: children || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: "(Placeholder) Member of Project SEKAI."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SocialBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                ...socialLinks,
                                size: 5
                            })
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 5104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5741);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3653);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1476);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5437);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3044);








const editUrl = (fileName)=>`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteRepo)}/blob/master/data/blog/${fileName}`
;
const discussUrl = (slug)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteUrl)}/blog/${slug}`)}`
;
const postDateTemplate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { slug , fileName , date , title , tags , canonical  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().siteUrl)}/blog/${slug}`,
                authorDetails: authorDetails,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: "pt-6 xl:pb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        className: "space-y-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().dateLocale), postDateTemplate)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",
                            style: {
                                gridTemplateRows: 'auto 1fr'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                    className: "pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "sr-only",
                                            children: "Authors"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",
                                                children: authorDetails.map((author)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: author.avatar,
                                                                width: "38px",
                                                                height: "38px",
                                                                alt: "avatar",
                                                                className: "w-10 h-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                                className: "text-sm font-medium leading-5 whitespace-nowrap",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        children: author.twitter ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                            href: author.twitter,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: author.twitter.replace('https://twitter.com/', '@')
                                                                        }) : author.github ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                            href: author.github,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: author.github.replace('https://github.com/', '@')
                                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: author.description
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, author.name)
                                                )
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
                                            children: children
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: discussUrl(slug),
                                                    rel: "nofollow",
                                                    children: 'Discuss on Twitter'
                                                }),
                                                ` • `,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: editUrl(fileName),
                                                    children: 'View on GitHub'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            frontMatter: frontMatter
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",
                                            children: [
                                                canonical && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                            children: "Originally published on"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-wrap text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                href: canonical,
                                                                children: new URL(canonical).hostname
                                                            })
                                                        })
                                                    ]
                                                }),
                                                tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                            children: "Tags"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex flex-wrap",
                                                            children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    text: tag
                                                                }, tag)
                                                            )
                                                        })
                                                    ]
                                                }),
                                                (next || prev) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                                                    children: [
                                                        prev && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                                    children: "Previous Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${prev.slug}`,
                                                                        children: prev.title
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        next && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                                                                    children: "Next Article"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                                        href: `/blog/${next.slug}`,
                                                                        children: next.title
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-4 xl:pt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                href: "/blog",
                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                children: "← Back to the blog"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 8218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5741);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3653);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1476);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2497);
/* harmony import */ var _components_comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3044);








function PostLayout({ frontMatter , next , prev , children  }) {
    const { slug , date , title  } = frontMatter;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().siteUrl)}/blog/${slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(date)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 ",
                            style: {
                                gridTemplateRows: 'auto 1fr'
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_comments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    frontMatter: frontMatter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "← ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " →"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ })

};
;