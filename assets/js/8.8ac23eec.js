(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{338:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("版本: 1.2 | 发布日期: 07/02/2024")])]),t._v(" "),a("h2",{attrs:{id:"ebi的创建的步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ebi的创建的步骤"}},[t._v("#")]),t._v(" EBI的创建的步骤")]),t._v(" "),a("ol",[a("li",[t._v("创建Query，Query用来直接从数据库中获取数据")]),t._v(" "),a("li",[t._v("创建QuerySet，QuerySet将多个Query获取的数据链接在一起, 输出为EBI / Combined Set所需要的结果集。")]),t._v(" "),a("li",[t._v("创建Combined Set， 将多个QuerySet的结果汇集在一起，输出为EBI的所需要的结果集。")]),t._v(" "),a("li",[t._v("创建EBI，通过EBIBuilder创建EBI。EbiBuilder的结果集来源可以是QuerySet，也可以是Combined Set。")]),t._v(" "),a("li",[t._v("导出EBI")])]),t._v(" "),a("h2",{attrs:{id:"创建query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建query"}},[t._v("#")]),t._v(" 创建Query")]),t._v(" "),a("p",[t._v("Query脚本由标准的SQL+参数组成")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi1.jpg",alt:"ebi1"}})]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTimeStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12:08:34'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employee a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.dept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_deptFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.position'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_posFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.sex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_sexFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.createDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_createDateFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_idFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" ${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.expired'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_expiredFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_empCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("} "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_empCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("以上的脚本经过渲染之后，最后到数据执行的执行如下所示")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTimeStamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12:08:34'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" testTime\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employee a\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_IBSWTCIQGG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_HBDTYCMZAC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ?\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_GUAEMVFIDM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("? "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n {"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'male'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("09")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.549")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("}\n")])])]),a("p",[t._v("SQL中使用参数的语法为@D_XXXX，XXXX 为Input Parameter的Code。总共有三种类型的参数")]),t._v(" "),a("ol",[a("li",[t._v("Lookup(模块条件)")]),t._v(" "),a("li",[t._v("Criteria(筛选条件)")]),t._v(" "),a("li",[t._v("Primitive")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi2.jpg",alt:"ebi1"}})]),t._v(" "),a("p",[t._v("这些参数可以在EBI Builder中用于配置生成的EBI界面")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi5.jpg",alt:"ebi5"}})]),t._v(" "),a("h3",{attrs:{id:"lookup-parameter-模块条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lookup-parameter-模块条件"}},[t._v("#")]),t._v(" Lookup Parameter(模块条件)")]),t._v(" "),a("p",[t._v("一个Lookup类型的Input Parameter对应界面上的一个Turbo Filter，使用的语法为")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lookupCond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.dept'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_deptFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n")])])]),a("p",[t._v("最终生成如下的脚本, 用户在Turbo Filter设置的条件，会被加到括号内 "),a("code",[t._v("id != 0")]),t._v(" 后面")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dept "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_qt_IBSWTCIQGG "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"criteria-parameter-筛选条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#criteria-parameter-筛选条件"}},[t._v("#")]),t._v(" Criteria Parameter(筛选条件)")]),t._v(" "),a("p",[t._v("筛选条件需要进一步选择筛选条件类型 (Text-文本、Integer-整数、Decimal-分数、Logical\\Boolean-布尔、Date-日期、Datetime-时间)，使用的语法如为")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("${"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("criteriaForMySQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.createDate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@D_createDateFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("}\n")])])]),a("p",[t._v("最终生成如下脚本，"),a("code",[t._v("?")]),t._v(" 表示sql script占位符，"),a("code",[t._v("<")]),t._v(" 是用户在界面选择的操作符")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a.createDate < ?\n")])])]),a("p",[t._v("筛选条件出现在Report Option中，它的类型决定了界面上可以使用的操作符,比如对于日期类型，可以用的操作符如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi6.jpg",alt:"ebi6"}})]),t._v(" "),a("h3",{attrs:{id:"primitive-parameter-原型参数条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primitive-parameter-原型参数条件"}},[t._v("#")]),t._v(" Primitive Parameter(原型参数条件)")]),t._v(" "),a("p",[t._v("支持 Text-文本、Integer-整数、Decimal-分数、Logical\\Boolean-布尔、Date-日期、Datetime-时间，")]),t._v(" "),a("p",[t._v("Primitive Parameter也同样出现在Report Option中，它的操作符固定为"),a("code",[t._v("=")])]),t._v(" "),a("p",[t._v("引用参数的语法为")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("?{[@D_empCode]}\n")])])]),a("h3",{attrs:{id:"data-handler-数据处理函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-handler-数据处理函数"}},[t._v("#")]),t._v(" Data Handler(数据处理函数)")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi4.jpg",alt:"ebi4"}})]),t._v(" "),a("p",[t._v("该功能用于对Query的结果进行Java层级的过滤和处理，可以在Java中逐行对Query结果进行复杂计算。")]),t._v(" "),a("p",[t._v("使用时只需要指定class名称即可（内部类需要使用$符号指定），该Class必须实现QueryRowHandler接口")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QueryRowHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SqlTable")]),t._v(" rowData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"创建queryset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建queryset"}},[t._v("#")]),t._v(" 创建QuerySet")]),t._v(" "),a("p",[t._v("将多个Query通过水平链接进行扩展")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi7.jpg",alt:"ebi7"}})]),t._v(" "),a("h2",{attrs:{id:"创建combined-queryset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建combined-queryset"}},[t._v("#")]),t._v(" 创建Combined QuerySet")]),t._v(" "),a("p",[t._v("将多个QuerySet进行集合操作")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi8.jpg",alt:"ebi8"}})]),t._v(" "),a("h2",{attrs:{id:"创建ebi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ebi"}},[t._v("#")]),t._v(" 创建EBI")]),t._v(" "),a("p",[t._v("通过【EBI Builder】创建EBI，目前的Query Source Type 只有QuerySet和 Combined QuerySet")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi9.jpg",alt:"ebi9"}})]),t._v(" "),a("p",[t._v("创建之后的EBI可以通过UDF Menu添加到Menu中作为入口")]),t._v(" "),a("p",[a("img",{attrs:{src:"/zh/assets/ebi10.jpg",alt:"ebi10"}})]),t._v(" "),a("p",[t._v("开发者也可以通过xml的方式进行修改，注意Menu code= EBI Builder创建的EBI的Code")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("menu")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("raindrop_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("messCode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("empbi.hr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("view/module/ebi/ebi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EBI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("apDebug")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("inherit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ebi_module_fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("inherit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("menu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"导出ebi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出ebi"}},[t._v("#")]),t._v(" 导出EBI")]),t._v(" "),a("p",[t._v("通过【EBI XML Console】可以导入/导出 EBI")])])}),[],!1,null,null,null);a.default=n.exports}}]);