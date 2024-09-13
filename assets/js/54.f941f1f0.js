(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{384:function(t,s,a){"use strict";a.r(s);var r=a(8),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("版本: 1.2 | 发布日期: 07/02/2024")])]),t._v(" "),s("h2",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),s("p",[t._v("aiM18 系统的主要目的是加强数据管理。")]),t._v(" "),s("p",[t._v("有了 aiM18，数据只需输入一次，即可随处查看。")]),t._v(" "),s("h2",{attrs:{id:"目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),s("p",[t._v("阅读本章后，你应该能够:")]),t._v(" "),s("ol",[s("li",[t._v("从 aiM18 中检索数据")]),t._v(" "),s("li",[t._v("获取模块记录唯一 ID")])]),t._v(" "),s("h2",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),s("p",[t._v("Chris 是 ABC 水果公司的 IT 经理。他负责维护 ABC 水果目录，该目录将进口水果和本地水果分开显示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst01.png",alt:"wst01"}})]),t._v(" "),s("p",[t._v("市场部经理Jane会不时与Chris联系，以增加不同的新产品。")]),t._v(" "),s("p",[t._v("由于Chris的工作繁重，他经常不能按时发布最新的目录。")]),t._v(" "),s("p",[t._v("这阻碍了Jane提出的推广活动。")]),t._v(" "),s("p",[t._v("Chris决定使用 aiM18 数据搜索Web服务来解决这个问题。")]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("p",[t._v("以下内容演示了如何从 aiM18 获取数据。")]),t._v(" "),s("p",[t._v("更多详情，请参阅 “搜索 ”服务的"),s("RouterLink",{attrs:{to:"/pages/c79a4a/#data-search-web-service"}},[t._v("完整文档")]),t._v("。")],1),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OkHttpClient")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OkHttpClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8080/jsf/rfws/search/search?stSearch=employee&startRow=1&endRow=10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer MjZhZGNjMDctODVhZS00MmE0LWI3ZmEtNzRhMTQwZGZiNTY0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C-SGF2aWQncyBhcHBsaWNhdGlvbjIwMTctMDItMTAxNjc="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cache-control"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("HTTP 请求")])]),t._v(" "),s("p",[s("code",[t._v("GET http://[server]/jsf/rfws/search/search?stSearch=[stSearchName]&startRow=[startRow]&endRow=[endRow]")])]),t._v(" "),s("p",[s("strong",[t._v("搜索参数")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名字")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("authorization")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("("),s("em",[t._v("Header")]),t._v(")")]),t._v(" "),s("td",[s("strong",[t._v("必填.")]),t._v(" "),s("RouterLink",{attrs:{to:"/pages/jd4373/#获取访问令牌"}},[t._v("通过 OAuth 获取")]),t._v("的访问令牌")],1)]),t._v(" "),s("tr",[s("td",[t._v("client_id")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("("),s("em",[t._v("Header")]),t._v(")")]),t._v(" "),s("td",[s("strong",[t._v("必填.")]),t._v(" aiM18 "),s("RouterLink",{attrs:{to:"/pages/jd4373/#注册应用程序"}},[t._v("授权应用列表")]),t._v("中的Client ID")],1)]),t._v(" "),s("tr",[s("td",[t._v("stSearch")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("("),s("em",[t._v("Query")]),t._v(")")]),t._v(" "),s("td",[s("strong",[t._v("必填.")]),t._v("  Lookup 类型, 比如 '员工', 可以在数据字典或 UDF Lookup 中找到。")])]),t._v(" "),s("tr",[s("td",[t._v("startRow")]),t._v(" "),s("td",[s("code",[t._v("int")]),t._v("("),s("em",[t._v("Query")]),t._v(")")]),t._v(" "),s("td",[t._v("搜索的起始行")])]),t._v(" "),s("tr",[s("td",[t._v("endRow")]),t._v(" "),s("td",[s("code",[t._v("int")]),t._v("("),s("em",[t._v("Query")]),t._v(")")]),t._v(" "),s("td",[t._v("搜索的最后一行")])]),t._v(" "),s("tr",[s("td",[t._v("beId")]),t._v(" "),s("td",[s("code",[t._v("long")]),t._v("("),s("em",[t._v("Query")]),t._v(")")]),t._v(" "),s("td",[t._v("如果搜索是 BE 特定的，则需要输入beId")])]),t._v(" "),s("tr",[s("td",[t._v("formatId")]),t._v(" "),s("td",[s("code",[t._v("long")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("搜索格式 ID")])]),t._v(" "),s("tr",[s("td",[t._v("conds")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("请查看 "),s("strong",[t._v("条件详情")])])]),t._v(" "),s("tr",[s("td",[t._v("sorts")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("排序字段，以“；”分隔。如果不是升序，请使用“！”；例如：“code;!desc”")])]),t._v(" "),s("tr",[s("td",[t._v("resultFields")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("如果要返回某些字段的值，请使用此参数。")])]),t._v(" "),s("tr",[s("td",[t._v("lookupField")]),t._v(" "),s("td",[s("code",[t._v("boolean")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("如果值为 true，则结果数据将是没失效、没锁定和已批准的。")])]),t._v(" "),s("tr",[s("td",[t._v("quickSearchStr")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("如果要使用快速搜索，请设定此值。")])]),t._v(" "),s("tr",[s("td",[t._v("fieldDesc")]),t._v(" "),s("td",[s("code",[t._v("boolean")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("如果值为 true，将返回字段的名称和mess值。")])]),t._v(" "),s("tr",[s("td",[t._v("viewDeleted")]),t._v(" "),s("td",[s("code",[t._v("boolean")]),t._v("(Query)")]),t._v(" "),s("td",[t._v("如果要搜索已删除的数据，请设置此值为 true。")])])])]),t._v(" "),s("h2",{attrs:{id:"了解-stsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解-stsearch"}},[t._v("#")]),t._v(" 了解 stSearch")]),t._v(" "),s("p",[t._v("aiM18 数据搜索网络服务完全依赖于 "),s("code",[t._v("stSearch")]),t._v(" 参数。")]),t._v(" "),s("p",[t._v("在 aiM18 平台中，"),s("code",[t._v("stSearch")]),t._v("也被称为"),s("RouterLink",{attrs:{to:"/pages/becaba/#lookup"}},[t._v("Lookup")]),t._v(".")],1),t._v(" "),s("p",[t._v("Lookup 是 aiM18 中预定义的一种搜索方案，它包括搜索中涉及的表格信息、排序和表格连接。")]),t._v(" "),s("p",[t._v("你可以通过访问 aiM18 中的 "),s("strong",[t._v("Lookup")]),t._v(" 获取 "),s("code",[t._v("stSearch code")]),t._v("：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst02.png",alt:"wst02"}})]),t._v(" "),s("p",[t._v("在 aiM18 中，同一个模块可以有多种不同的 "),s("code",[t._v("stSearch")]),t._v("。有些设置是系统预定义的，有些则可以由用户自定义。")]),t._v(" "),s("p",[t._v("每个模块都提供一个适用于大多数情况的标准 "),s("code",[t._v("stSearch")]),t._v("。")]),t._v(" "),s("p",[t._v("例如，访问 "),s("code",[t._v("产品/物料")]),t._v(" 编辑器，就可以访问该模块使用的标准 "),s("code",[t._v("stSearch")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst04.png",alt:"wst04"}})]),t._v(" "),s("p",[s("strong",[t._v("1. 点击 "),s("code",[t._v("编辑查询")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst05.png",alt:"wst05"}})]),t._v(" "),s("p",[s("strong",[t._v("2. 点击 "),s("code",[t._v("查询")])])]),t._v(" "),s("p",[t._v("括号中的编号就是我们想要获取的 "),s("code",[t._v("stSearch code")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst06.png",alt:"wst06"}})]),t._v(" "),s("h2",{attrs:{id:"建立查询条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立查询条件"}},[t._v("#")]),t._v(" 建立查询条件")]),t._v(" "),s("p",[t._v("接下来，我们需要准备不同的产品清单，分别显示进口水果和本地水果。")]),t._v(" "),s("p",[t._v("aiM18 数据搜索网络服务允许提供类似 SQL 的 WHERE 子句来过滤数据。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst07.png",alt:"wst07"}})]),t._v(" "),s("p",[t._v("假设 [Series] 是区分产品的字段，我们需要知道它在数据库中对应的列名。")]),t._v(" "),s("p",[t._v("aiM18 提供了一种方便的方法，让你可以直接在界面上了解某个字段对应的数据库列。")]),t._v(" "),s("p",[t._v("首先，你需要在界面设置中启用 [显示字段名称] 选项。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst08.png",alt:"wst08"}})]),t._v(" "),s("p",[t._v("然后，将光标放在要查看的列上，这里是 [Series]，系统将显示相应的字段信息。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst09.png",alt:"wst09"}})]),t._v(" "),s("h2",{attrs:{id:"通过编号获取id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过编号获取id"}},[t._v("#")]),t._v(" 通过编号获取ID")]),t._v(" "),s("p",[t._v("在收集了上述信息后，很容易得出以下条件：")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("进口水果：")]),t._v(" "),s("p",[t._v("seriesId=equals=IMPORT")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("本地水果：")]),t._v(" "),s("p",[t._v("seriesId=equals=LOCAL")])]),t._v(" "),s("p",[t._v("对于 aiM18 中的所有lookup字段，在构建 “搜索条件”时，我们应使用 “记录 id ”而不是 “记录编号”。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pages/c79a4a/#get-id-by-code-web-service"}},[t._v("通过编号获取ID Web服务")]),t._v("可获取记录id。")],1),t._v(" "),s("p",[s("strong",[t._v("查找Series ID 的请求示例")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" `http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jsf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rfws"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("entity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("getIdByCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("series"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("menuCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("series"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMPORT")]),t._v("`\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" `http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jsf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rfws"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("entity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("getIdByCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("series"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("menuCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("series"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL")]),t._v("`\n")])])]),s("p",[s("strong",[t._v("响应示例")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withMulti"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withRight"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withMulti"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"withRight"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"汇总所有步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#汇总所有步骤"}},[t._v("#")]),t._v(" 汇总所有步骤")]),t._v(" "),s("p",[s("strong",[t._v("搜索产品 Series = "),s("code",[t._v("LOCAL")]),t._v("的请求示例")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jsf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rfws"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("stSearch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pro"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("conds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("seriesId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("equals"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("p",[s("strong",[t._v("响应示例")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"values"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orange"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Local Orange"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iRev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Banana"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Local Banana"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iRev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Local Apple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iRev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Peach"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Local Peach"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iRev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("p",[s("strong",[t._v("1. 我如何知道我必须使用 id 而不是编号？")])]),t._v(" "),s("p",[t._v("你可以通过数据字典进行查看。所有带Lookup值的字段都存储了引用 ID。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/zh/assets/wst11.png",alt:"wst11"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);