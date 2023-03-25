#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConicTextGradient", {
  enumerable: true,
  get: function get() {
    return _ConicTextGradiant.default;
  }
});
Object.defineProperty(exports, "LinearTextGradient", {
  enumerable: true,
  get: function get() {
    return _LinearTextGradient.default;
  }
});
Object.defineProperty(exports, "RadialTextGradient", {
  enumerable: true,
  get: function get() {
    return _RadialTextGradient.default;
  }
});
var _LinearTextGradient = _interopRequireDefault(require("./components/LinearTextGradient"));
var _RadialTextGradient = _interopRequireDefault(require("./components/RadialTextGradient"));
var _ConicTextGradiant = _interopRequireDefault(require("./components/ConicTextGradiant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }