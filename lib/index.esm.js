import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".storybook-button {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    letter-spacing: 1px;\r\n    border-radius: 3em;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    color: #000;\r\n    background-color: #fff;\r\n    border: none;\r\n    transition: all 0.3s ease 0s;\r\n    outline: none;\r\n  }\r\n  .storybook-button--small {\r\n    font-size: 12px;\r\n    padding: 10px 16px;\r\n    width: 25%;\r\n  }\r\n  .storybook-button--medium {\r\n    font-size: 14px;\r\n    padding: 11px 20px;\r\n    width: 50%;\r\n  }\r\n  .storybook-button--large {\r\n    font-size: 16px;\r\n    padding: 12px 24px;\r\n    width: 100%;\r\n  }";
styleInject(css_248z);

var Button = function (_a) {
    var backgroundColor = _a.backgroundColor, textColor = _a.textColor, _b = _a.size, size = _b === void 0 ? "medium" : _b, onClick = _a.onClick, label = _a.label;
    var isBack = backgroundColor;
    var isText = textColor;
    return (React.createElement("button", { type: "button", className: ["storybook-button", "storybook-button--".concat(size)].join(" "), style: {
            backgroundColor: isBack ? backgroundColor : "",
            color: isText ? textColor : "",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 15px"
        }, onClick: onClick }, label));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
