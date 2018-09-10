import React from "react";

const baseUrl = "http://localhost:3002";
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      username: e.target.querySelector('input[name="user_name"]').value,
      password: e.target.querySelector('input[name="password"]').value
    });
    fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    })
      .then(res => {
        if (res.status === 401) {
          alert("login failed");
        } else {
          return res.json();
        }
      })
      .then(json => {
        this.props.updateUser(json.user);
        localStorage.setItem("token", json.token);
      });
  };

  render() {
    return (
      <div className="ui card">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <input
            className="ui field"
            placeholder="username"
            name="username"
            type="text"
          />
          <input
            className="ui field"
            placeholder="password"
            name="password"
            type="text"
          />
          <button className="ui primary button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
