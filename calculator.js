var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_React$Component) {
  _inherits(Screen, _React$Component);

  function Screen(props) {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, props));
  }

  _createClass(Screen, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "screen" },
        React.createElement(
          "div",
          { id: "expression" },
          this.props.expression
        ),
        React.createElement(
          "div",
          { id: "display" },
          this.props.display
        )
      );
    }
  }]);

  return Screen;
}(React.Component);

var ClearButton = function (_React$Component2) {
  _inherits(ClearButton, _React$Component2);

  function ClearButton(props) {
    _classCallCheck(this, ClearButton);

    return _possibleConstructorReturn(this, (ClearButton.__proto__ || Object.getPrototypeOf(ClearButton)).call(this, props));
  }

  _createClass(ClearButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "clear", "class": "button", onClick: this.props.onClick },
        "AC"
      );
    }
  }]);

  return ClearButton;
}(React.Component);

var DecimalButton = function (_React$Component3) {
  _inherits(DecimalButton, _React$Component3);

  function DecimalButton(props) {
    _classCallCheck(this, DecimalButton);

    return _possibleConstructorReturn(this, (DecimalButton.__proto__ || Object.getPrototypeOf(DecimalButton)).call(this, props));
  }

  _createClass(DecimalButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "decimal", "class": "button", onClick: this.props.onClick },
        "."
      );
    }
  }]);

  return DecimalButton;
}(React.Component);

var EqualsButton = function (_React$Component4) {
  _inherits(EqualsButton, _React$Component4);

  function EqualsButton(props) {
    _classCallCheck(this, EqualsButton);

    return _possibleConstructorReturn(this, (EqualsButton.__proto__ || Object.getPrototypeOf(EqualsButton)).call(this, props));
  }

  _createClass(EqualsButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "equals", "class": "button", onClick: this.props.onClick },
        "="
      );
    }
  }]);

  return EqualsButton;
}(React.Component);

var OperatorButton = function (_React$Component5) {
  _inherits(OperatorButton, _React$Component5);

  function OperatorButton(props) {
    _classCallCheck(this, OperatorButton);

    return _possibleConstructorReturn(this, (OperatorButton.__proto__ || Object.getPrototypeOf(OperatorButton)).call(this, props));
  }

  _createClass(OperatorButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          id: this.props.id,
          operator: this.props.operator,
          "class": "button",
          onClick: this.props.onClick
        },
        this.props.operator
      );
    }
  }]);

  return OperatorButton;
}(React.Component);

var NumberButton = function (_React$Component6) {
  _inherits(NumberButton, _React$Component6);

  function NumberButton(props) {
    _classCallCheck(this, NumberButton);

    return _possibleConstructorReturn(this, (NumberButton.__proto__ || Object.getPrototypeOf(NumberButton)).call(this, props));
  }

  _createClass(NumberButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          id: this.props.id,
          number: this.props.number,
          "class": "button",
          onClick: this.props.onClick
        },
        this.props.number
      );
    }
  }]);

  return NumberButton;
}(React.Component);

var ButtonBank = function (_React$Component7) {
  _inherits(ButtonBank, _React$Component7);

  function ButtonBank(props) {
    _classCallCheck(this, ButtonBank);

    return _possibleConstructorReturn(this, (ButtonBank.__proto__ || Object.getPrototypeOf(ButtonBank)).call(this, props));
  }

  _createClass(ButtonBank, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "table",
        { "class": "button-bank" },
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { "class": "clear", colspan: "2" },
            React.createElement(ClearButton, { onClick: this.props.onClearClick })
          ),
          React.createElement(
            "td",
            { "class": "operator" },
            React.createElement(OperatorButton, {
              id: "divide",
              operator: "/",
              onClick: this.props.onOperatorClick
            })
          ),
          React.createElement(
            "td",
            { "class": "operator" },
            React.createElement(OperatorButton, {
              id: "multiply",
              operator: "x",
              onClick: this.props.onOperatorClick
            })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "seven",
              number: "7",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "eight",
              number: "8",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "nine",
              number: "9",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            { "class": "operator" },
            React.createElement(OperatorButton, {
              id: "subtract",
              operator: "-",
              onClick: this.props.onOperatorClick
            })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "four",
              number: "4",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "five",
              number: "5",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "six",
              number: "6",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            { "class": "operator" },
            React.createElement(OperatorButton, {
              id: "add",
              operator: "+",
              onClick: this.props.onOperatorClick
            })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "one",
              number: "1",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "two",
              number: "2",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(NumberButton, {
              id: "three",
              number: "3",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            { "class": "equals", rowspan: "2" },
            React.createElement(EqualsButton, { onClick: this.props.onEqualsClick })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { colspan: "2" },
            React.createElement(NumberButton, {
              id: "zero",
              number: "0",
              onClick: this.props.onNumberClick
            })
          ),
          React.createElement(
            "td",
            null,
            React.createElement(DecimalButton, { onClick: this.props.onDecimalClick })
          )
        )
      );
    }
  }]);

  return ButtonBank;
}(React.Component);

var Calculator = function (_React$Component8) {
  _inherits(Calculator, _React$Component8);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this8 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this8.state = { display: "0", expression: "" };
    _this8.onNumberClick = _this8.onNumberClick.bind(_this8);
    _this8.onClearClick = _this8.onClearClick.bind(_this8);
    _this8.onOperatorClick = _this8.onOperatorClick.bind(_this8);
    _this8.onEqualsClick = _this8.onEqualsClick.bind(_this8);
    _this8.onDecimalClick = _this8.onDecimalClick.bind(_this8);
    return _this8;
  }

  _createClass(Calculator, [{
    key: "onNumberClick",
    value: function onNumberClick(e) {
      var number = $(e.target).attr("number");
      this.setState(function (state) {
        debugger;
        var display = state.display;
        if (state.expression.includes("=") || state.display == "0" || isNaN(state.display)) {
          display = number;
        } else {
          display += number;
        }
        var expression = state.expression;
        if (state.expression.includes("=") || state.expression == "0") {
          expression = number;
        } else if (number != 0 || state.display != "0") {
          expression += number;
        }
        return { display: display, expression: expression };
      });
    }
  }, {
    key: "onClearClick",
    value: function onClearClick() {
      this.setState({
        display: "0",
        expression: ""
      });
    }
  }, {
    key: "isOperator",
    value: function isOperator(char) {
      return ["+", "-", "x", "/"].includes(char);
    }
  }, {
    key: "deleteTrailingOperators",
    value: function deleteTrailingOperators(expression) {
      return expression.replace(/[x\-+/]+$/, "");
    }
  }, {
    key: "onOperatorClick",
    value: function onOperatorClick(e) {
      var _this9 = this;

      var operator = $(e.target).attr("operator");

      this.setState(function (state) {
        var lastChar = state.display.slice(-1);
        if (_this9.isOperator(lastChar) && (operator != "-" || lastChar == "-")) {
          if (operator == "-" && lastChar == "-") {
            return {};
          }
          return {
            display: operator,
            expression: _this9.deleteTrailingOperators(state.expression) + operator
          };
        }
        return {
          display: operator,
          expression: (state.expression.includes("=") ? state.display : state.expression) + operator
        };
      });
    }
  }, {
    key: "onEqualsClick",
    value: function onEqualsClick(e) {
      var _this10 = this;

      if (this.state.expression.includes("=")) {
        return;
      }

      this.setState(function (state) {
        var expression = _this10.deleteTrailingOperators(state.expression);
        var result = eval(expression.replace(/x/g, "*"));

        return {
          display: String(result),
          expression: expression + "=" + result
        };
      });
    }
  }, {
    key: "onDecimalClick",
    value: function onDecimalClick(e) {
      this.setState(function (state) {
        var display = state.display;
        var expression = state.expression;
        if (state.expression.includes("=")) {
          display = "0.";
          expression = "0.";
        } else if (isNaN(state.display)) {
          display = "0.";
          expression += "0.";
        } else if (!state.display.includes(".")) {
          display += ".";
          expression += ".";
        }

        return { display: display, expression: expression };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "calculator" },
          React.createElement(Screen, {
            display: this.state.display,
            expression: this.state.expression
          }),
          React.createElement(ButtonBank, {
            onNumberClick: this.onNumberClick,
            onClearClick: this.onClearClick,
            onOperatorClick: this.onOperatorClick,
            onEqualsClick: this.onEqualsClick,
            onDecimalClick: this.onDecimalClick
          })
        ),
        React.createElement(
          "div",
          { "class": "footer" },
          "by",
          " ",
          React.createElement(
            "a",
            {
              href: "https://github.com/jeremies/javascript-calculator",
              target: "_blank"
            },
            "Joaquim Monserrat"
          )
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));