class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="calculator"></div>;
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
