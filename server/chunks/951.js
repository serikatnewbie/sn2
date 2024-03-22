"use strict";
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(5741);
// EXTERNAL MODULE: ./components/Tag.tsx
var Tag = __webpack_require__(5437);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Pagination.tsx


function Pagination({ totalPages , currentPage  }) {
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-6 pb-8 space-y-2 md:space-y-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex justify-between",
            children: [
                !prevPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !prevPage,
                    children: "Previous"
                }),
                prevPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Previous"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        currentPage,
                        " of ",
                        totalPages
                    ]
                }),
                !nextPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !nextPage,
                    children: "Next"
                }),
                nextPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: `/blog/page/${currentPage + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Next"
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./lib/utils/formatDate.ts
var formatDate = __webpack_require__(2497);
;// CONCATENATED MODULE: ./layouts/ListLayout.tsx






function ListLayout({ posts , title: title1 , initialDisplayPosts =[] , pagination  }) {
    const { 0: searchValue , 1: setSearchValue  } = (0,external_react_.useState)('');
    const filteredBlogPosts = posts.filter((frontMatter)=>{
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "divide-y",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pt-6 pb-8 space-y-2 md:space-y-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                                children: title1
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative max-w-lg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        "aria-label": "Search articles",
                                        type: "text",
                                        onChange: (e)=>setSearchValue(e.target.value)
                                        ,
                                        placeholder: "Search articles",
                                        className: "block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            !filteredBlogPosts.length && 'No posts found.',
                            displayPosts.map((frontMatter)=>{
                                const { slug , date , title , summary , tags  } = frontMatter;
                                return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "py-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                        className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                        className: "sr-only",
                                                        children: "Published on"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                        className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                            dateTime: date,
                                                            children: (0,formatDate/* default */.Z)(date)
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "space-y-3 xl:col-span-3",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-2xl font-bold leading-8 tracking-tight",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                    href: `/blog/${slug}`,
                                                                    className: "text-gray-900 dark:text-gray-100",
                                                                    children: title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex flex-wrap",
                                                                children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(Tag/* default */.Z, {
                                                                        text: tag
                                                                    }, tag)
                                                                )
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "prose text-gray-500 max-w-none dark:text-gray-400",
                                                        children: summary
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, slug));
                            })
                        ]
                    })
                ]
            }),
            pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages
            })
        ]
    }));
};


/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = (date)=>{
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const now = new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().dateLocale), options);
    return now;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ })

};
;