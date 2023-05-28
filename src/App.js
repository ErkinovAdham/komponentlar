import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  clickMenus = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  
  clickReset = () => {
    this.setState((prevState) => ({
      counter: prevState.counter = 0,
    }));
  };

  render() {
    const { firstName, lastName, link } = this.props;

    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt2">
          <h4>
            Mening ismim = {firstName}, sharifim = {lastName}
          </h4>
          <a href={link}>Youtube kanalim</a>
          <div className="mt-3">
            <button onClick={this.clickHandler} className="btn btn-success">
              Increment
            </button>
            <button onClick={this.clickMenus} className="btn btn-danger mx-2">
              Deinkrement
            </button>
            <button onClick={this.clickReset} className="btn btn-info">
              Reset
            </button>
            <p>{this.state.counter}</p>
          </div>
        </div>
      </div>
    );
  }
}
const App = () => {
  return (
    <div>
      <User firstName="Adham" lastName="Erkinov" link="youtube.com" />
      <User firstName="Omar" lastName="abdulloh" link="google.com" />
    </div>
  );
};

export default App;
