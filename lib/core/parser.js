"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFile = void 0;
var _fs = _interopRequireDefault(require("fs"));
var parser = _interopRequireWildcard(require("@babel/parser"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// const fs = require("fs");
// const parser = require("@babel/parser");

var parseFile = exports.parseFile = function parseFile(filePath) {
  var code = _fs["default"].readFileSync(filePath, "utf-8");
  return parser.parse(code, {
    sourceType: "module",
    plugins: ['jsx',
    // For JSX support in React components
    'classProperties',
    // For class fields if you have class components
    'optionalChaining',
    // For optional chaining syntax (?.)
    'nullishCoalescingOperator' // For nullish coalescing (??)],
    ]
  });
};