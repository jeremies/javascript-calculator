class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="screen">
        <div id="expression">{this.props.expression}</div>
        <div id="display">{this.props.display}</div>
      </div>
    );
  }
}

class ClearButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="clear" class="button" onClick={this.props.onClick}>
        AC
      </div>
    );
  }
}

class DecimalButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="decimal" class="button" onClick={this.props.onClick}>
        .
      </div>
    );
  }
}

class EqualsButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="equals" class="button" onClick={this.props.onClick}>
        =
      </div>
    );
  }
}

class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        operator={this.props.operator}
        class="button"
        onClick={this.props.onClick}
      >
        {this.props.operator}
      </div>
    );
  }
}

class NumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        number={this.props.number}
        class="button"
        onClick={this.props.onClick}
      >
        {this.props.number}
      </div>
    );
  }
}

class ButtonBank extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table class="button-bank">
        <tr>
          <td class="clear" colspan="2">
            <ClearButton onClick={this.props.onClearClick} />
          </td>
          <td class="operator">
            <OperatorButton
              id="divide"
              operator="/"
              onClick={this.props.onOperatorClick}
            />
          </td>
          <td class="operator">
            <OperatorButton
              id="multiply"
              operator="x"
              onClick={this.props.onOperatorClick}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton
              id="seven"
              number="7"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="eight"
              number="8"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="nine"
              number="9"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td class="operator">
            <OperatorButton
              id="subtract"
              operator="-"
              onClick={this.props.onOperatorClick}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton
              id="four"
              number="4"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="five"
              number="5"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="six"
              number="6"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td class="operator">
            <OperatorButton
              id="add"
              operator="+"
              onClick={this.props.onOperatorClick}
            />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton
              id="one"
              number="1"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="two"
              number="2"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <NumberButton
              id="three"
              number="3"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td class="equals" rowspan="2">
            <EqualsButton onClick={this.props.onEqualsClick} />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <NumberButton
              id="zero"
              number="0"
              onClick={this.props.onNumberClick}
            />
          </td>
          <td>
            <DecimalButton onClick={this.props.onDecimalClick} />
          </td>
        </tr>
      </table>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "0", expression: "" };
    this.onNumberClick = this.onNumberClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onOperatorClick = this.onOperatorClick.bind(this);
    this.onEqualsClick = this.onEqualsClick.bind(this);
    this.onDecimalClick = this.onDecimalClick.bind(this);
  }

  onNumberClick(e) {
    var number = $(e.target).attr("number");
    this.setState((state) => {
      debugger;
      let display = state.display;
      if (
        state.expression.includes("=") ||
        state.display == "0" ||
        isNaN(state.display)
      ) {
        display = number;
      } else {
        display += number;
      }
      let expression = state.expression;
      if (state.expression.includes("=") || state.expression == "0") {
        expression = number;
      } else if (number != 0 || state.display != "0") {
        expression += number;
      }
      return { display, expression };
    });
  }

  onClearClick() {
    this.setState({
      display: "0",
      expression: "",
    });
  }

  isOperator(char) {
    return ["+", "-", "x", "/"].includes(char);
  }

  deleteTrailingOperators(expression) {
    return expression.replace(/[x\-+/]+$/, "");
  }

  onOperatorClick(e) {
    var operator = $(e.target).attr("operator");

    this.setState((state) => {
      let lastChar = state.display.slice(-1);
      if (this.isOperator(lastChar) && (operator != "-" || lastChar == "-")) {
        if (operator == "-" && lastChar == "-") {
          return {};
        }
        return {
          display: operator,
          expression: this.deleteTrailingOperators(state.expression) + operator,
        };
      }
      return {
        display: operator,
        expression:
          (state.expression.includes("=") ? state.display : state.expression) +
          operator,
      };
    });
  }

  onEqualsClick(e) {
    if (this.state.expression.includes("=")) {
      return;
    }

    this.setState((state) => {
      let expression = this.deleteTrailingOperators(state.expression);
      let result = eval(expression.replace(/x/g, "*"));

      return {
        display: String(result),
        expression: expression + "=" + result,
      };
    });
  }

  onDecimalClick(e) {
    this.setState((state) => {
      let display = state.display;
      let expression = state.expression;
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

      return { display, expression };
    });
  }

  render() {
    return (
      <div>
        <div class="calculator">
          <Screen
            display={this.state.display}
            expression={this.state.expression}
          />
          <ButtonBank
            onNumberClick={this.onNumberClick}
            onClearClick={this.onClearClick}
            onOperatorClick={this.onOperatorClick}
            onEqualsClick={this.onEqualsClick}
            onDecimalClick={this.onDecimalClick}
          />
        </div>
        <div class="footer">
          by{" "}
          <a
            href="https://github.com/jeremies/javascript-calculator"
            target="_blank"
          >
            Joaquim Monserrat
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
