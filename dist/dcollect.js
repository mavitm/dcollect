!function(r){var t={};function a(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=t,a.d=function(n,e,r){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(module,exports){eval('function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction dc_log() {\n  var _console;\n\n  (_console = console).log.apply(_console, arguments);\n}\n\nfunction dc_error() {\n  var _console2;\n\n  (_console2 = console).error.apply(_console2, arguments);\n}\n\nvar dcollect = /*#__PURE__*/function () {\n  function dcollect(data) {\n    _classCallCheck(this, dcollect);\n\n    this.data = data;\n  }\n\n  _createClass(dcollect, [{\n    key: "query",\n    value: function query() {\n      if (Array.isArray(this.data)) {\n        return new _builder(Array.from(this.data));\n      }\n\n      return new _builder(Object.assign({}, this.data), this);\n    }\n  }]);\n\n  return dcollect;\n}();\n\nvar _builder = /*#__PURE__*/function () {\n  function _builder(data) {\n    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n    _classCallCheck(this, _builder);\n\n    this.parent = parent;\n    this.data = data;\n  }\n\n  _createClass(_builder, [{\n    key: "where",\n    value: function where(field, condition, target) {\n      this.data = this.data.filter(function (obj) {\n        var src = obj[field];\n\n        switch (condition) {\n          case \'>\':\n            return src > target;\n\n          case \'<\':\n            return src < target;\n\n          case \'>=\':\n            return src >= target;\n\n          case \'<=\':\n            return src <= target;\n\n          case \'=\':\n            return src == target;\n\n          case \'==\':\n            return src == target;\n\n          case \'!=\':\n            return src != target;\n\n          case \'<>\':\n            return src != target;\n\n          case \'===\':\n            return src === target;\n\n          case \'!==\':\n            return src !== target;\n        }\n\n        return false;\n      });\n      return this;\n    }\n  }, {\n    key: "whereLike",\n    value: function whereLike(field, target) {\n      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      this.data = this.data.filter(function (obj) {\n        if (!i) {\n          return obj[field].indexOf(target) > -1;\n        } else {\n          return obj[field].toLowerCase().indexOf(target.toLowerCase()) > -1;\n        }\n      });\n      return this;\n    }\n  }, {\n    key: "whereIn",\n    value: function whereIn(field, data) {\n      if (!Array.isArray(data)) {\n        data = Object.values(data);\n      }\n\n      this.data = this.data.filter(function (obj) {\n        return data.includes(obj[field]);\n      });\n      return this;\n    }\n  }, {\n    key: "whereNotIn",\n    value: function whereNotIn(field, data) {\n      if (!Array.isArray(data)) {\n        data = Object.values(data);\n      }\n\n      this.data = this.data.filter(function (obj) {\n        return !data.includes(obj[field]);\n      });\n      return this;\n    }\n  }, {\n    key: "rawFilter",\n    value: function rawFilter(callback) {\n      this.data = this.data.filter(callback);\n      return this;\n    }\n  }, {\n    key: "orderBy",\n    value: function orderBy(field, sortType) {\n      sortType = sortType.toLowerCase();\n\n      if (sortType === \'asc\' || sortType === "0") {\n        sortType = 1;\n      } else {\n        sortType = -1;\n      }\n\n      this.data = this.data.sort(function (a, b) {\n        var result = a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;\n        return result * sortType;\n      });\n      return this;\n    }\n  }, {\n    key: "groupBy",\n    value: function groupBy(field) {\n      var rDara = Array.isArray(this.data) ? this.data : Object.values(this.data);\n      var tmp = [];\n      rDara.forEach(function (val) {\n        if (!Array.isArray(tmp[val[field]])) {\n          tmp[val[field]] = [];\n        }\n\n        tmp[val[field]].push(val);\n      });\n      this.data = tmp;\n      return this;\n    }\n  }, {\n    key: "count",\n    value: function count() {\n      var rDara = Array.isArray(this.data) ? this.data : Object.values(this.data);\n      return rDara.length;\n    }\n  }, {\n    key: "sum",\n    value: function sum(field) {\n      var x = 0;\n      var rDara = Array.isArray(this.data) ? this.data : Object.values(this.data);\n      rDara.forEach(function (element) {\n        if (element.hasOwnProperty(field)) {\n          x += parseFloat(element[field]);\n        }\n      });\n      return x;\n    }\n  }, {\n    key: "eq",\n    value: function eq(index) {\n      return this.data[index];\n    }\n  }, {\n    key: "first",\n    value: function first() {\n      var rDara = Array.isArray(this.data) ? this.data : Object.values(this.data);\n      return rDara[0];\n    }\n  }, {\n    key: "last",\n    value: function last() {\n      var rDara = Array.isArray(this.data) ? this.data : Object.values(this.data);\n      return rDara[rDara.length - 1];\n    }\n  }, {\n    key: "find",\n    value: function find(id) {\n      return this.where("id", "=", id);\n    }\n  }, {\n    key: "get",\n    value: function get() {\n      return this.data;\n    }\n  }, {\n    key: "all",\n    value: function all() {\n      return this.get();\n    }\n  }]);\n\n  return _builder;\n}();\n\nvar o = [{\n  make: "audi",\n  model: "r8",\n  year: "2012"\n}, {\n  make: "audi",\n  model: "rs5",\n  year: "2013"\n}, {\n  make: "ford",\n  model: "mustang",\n  year: "2012"\n}, {\n  make: "ford",\n  model: "fusion",\n  year: "2015"\n}, {\n  make: "kia",\n  model: "optima",\n  year: "2012"\n}];\nvar collect = new dcollect(o);\nvar filter = collect.query().where("year", "=", "2012");\nconsole.log(filter);\n\n//# sourceURL=webpack:///./src/index.js?')}});