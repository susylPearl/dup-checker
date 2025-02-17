"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractIdentifiers = void 0;
var babelTraverse = _interopRequireWildcard(require("@babel/traverse"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//const traverse = require('@babel/traverse').default;

var traverse = babelTraverse["default"];
var extractIdentifiers = exports.extractIdentifiers = function extractIdentifiers(ast) {
  var identifiers = [];
  console.log("Traversing AST...");
  traverse["default"](ast, {
    VariableDeclarator: function VariableDeclarator(path) {
      console.log("Found VariableDeclarator:", path.node.id.name);
      identifiers.push(path.node.id.name);
    },
    FunctionDeclaration: function FunctionDeclaration(path) {
      console.log("Found FunctionDeclaration:", path.node.id.name);
      identifiers.push(path.node.id.name);
    }
  });
  return identifiers;
};