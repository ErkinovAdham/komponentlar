import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: "",
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
    this.setState({
      counter: 0,
    });
  };

  ChangeHandler = (e, name) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    const { firstName, lastName, link } = this.props;
    const { age, counter} = this.state
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt2">
          <h4>
            Mening ismim = {firstName}, sharifim = {lastName}, yoshim ={age}
           
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
              Restart
            </button>
            <p>{counter}</p>
          </div>
          <form action="">
            <span>Yoshingiz</span>
            <input
              type="text"
              className="form-control"
              onChange={e => this.ChangeHandler(e, "Adham")}
            />
          </form>
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
