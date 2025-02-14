"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDuplicates = void 0;
var _fileReader = require("../utils/fileReader.js");
var _parser = require("./parser.js");
var _traverser = require("./traverser.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var findDuplicates = exports.findDuplicates = function findDuplicates(directory) {
  var files = (0, _fileReader.readFiles)(directory);
  var duplicates = [];
  files.forEach(function (file) {
    debugger;
    var ast = (0, _parser.parseFile)(file);
    console.log(ast);
    var identifiers = (0, _traverser.extractIdentifiers)(ast);
    var nameCount = {};
    identifiers.forEach(function (name) {
      nameCount[name] = (nameCount[name] || 0) + 1;
    });
    Object.entries(nameCount).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        count = _ref2[1];
      if (count > 1) {
        duplicates.push({
          name: name,
          file: file
        });
      }
    });
  });
  return duplicates;
};