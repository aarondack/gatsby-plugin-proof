"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, _ref2) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var pixelId = _ref2.pixelId;

  if (typeof pixelId !== "string") {
    console.error("Proof url must be a string");
  }

  if (process.env.NODE_ENV === "production") {
    return setPostBodyComponents([_react2.default.createElement("script", {
      async: true,
      key: "gatsby-plugin-proof",
      dangerouslySetInnerHTML: {
        __html: "https://cdn.useproof.com/proof.js?acc=" + pixelId
      }
    })]);
  }
  return;
};