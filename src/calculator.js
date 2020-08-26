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
      <div id="clear" class="button">
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
      <div id="decimal" class="button">
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
      <div id="equals" class="button">
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
      <div id={this.props.id} class="button">
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
      <div id={this.props.id} class="button">
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
            <ClearButton />
          </td>
          <td class="operator">
            <OperatorButton id="divide" operator="/" />
          </td>
          <td class="operator">
            <OperatorButton id="multiply" operator="x" />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton id="seven" number="7" />
          </td>
          <td>
            <NumberButton id="eight" number="8" />
          </td>
          <td>
            <NumberButton id="nine" number="9" />
          </td>
          <td class="operator">
            <OperatorButton id="subtract" operator="-" />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton id="four" number="4" />
          </td>
          <td>
            <NumberButton id="five" number="5" />
          </td>
          <td>
            <NumberButton id="six" number="6" />
          </td>
          <td class="operator">
            <OperatorButton id="add" operator="+" />
          </td>
        </tr>
        <tr>
          <td>
            <NumberButton id="one" number="1" />
          </td>
          <td>
            <NumberButton id="two" number="2" />
          </td>
          <td>
            <NumberButton id="three" number="3" />
          </td>
          <td class="equals" rowspan="2">
            <EqualsButton />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <NumberButton id="zero" number="0" />
          </td>
          <td>
            <DecimalButton />
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
  }

  render() {
    return (
      <div>
        <div class="calculator">
          <Screen
            display={this.state.display}
            expression={this.state.expression}
          />
          <ButtonBank />
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
