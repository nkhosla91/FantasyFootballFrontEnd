import React from 'react'
// import { EventEmitter } from 'events'

export default class LogIn extends React.Component {

    state = {
      currentView: "signUp",
      createUsername: "",
      signedInUsername: "",
      email: "",
      password: ""
    }
  

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  createUser = (event) => {
    event.preventDefault()
    const body = {
      email: this.state.email,
      username: this.state.signedInUsername,
      password: this.state.password
    }

    console.log(body)

    return fetch("http://localhost:4000/api/v1/users", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
      })
      .then(response => response.json())


  }

  handleChange = (event) => {
      event.preventDefault()
      this.setState({
          [event.target.name]: event.target.value
        })
  }

  handleSignIn = (event) => {
      event.preventDefault()

      this.props.signedIn(this.state.signedInUsername)

  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <form onSubmit={this.createUser}>
              <ul>
                <li>
                  <label name="createUsername">Username:</label>
                  <input type="text" id="createUsername" required name="createUsername" onChange={this.handleChange} value={this.state.createUsername}/>
                </li>
                <li>
                  <label name="email">Email:</label>
                  <input type="email" id="email" required name="email" onChange={this.handleChange} value={this.state.email}/>
                </li>
                <li>
                  <label name="password">Password:</label>
                  <input type="password" id="password" required name="password" onChange={this.handleChange} value={this.state.password}/>
                </li>
              </ul>
            <input type="submit" value="Create User"/>
            </form>
            </fieldset>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <form onSubmit={this.handleSignIn}>
                <ul>
                    <li>
                    <label name="signedInUsername">Username:</label>
                    <input type="text" id="signedInUsername" required name="signedInUsername" onChange={this.handleChange} value={this.state.signedInUsername}/>
                    </li>
                    <li>
                    <label name="password">Password:</label>
                    <input type="password" id="password" required/>
                    </li>
                </ul>
                <input type="submit" value="Log In"/>
              </form>
            </fieldset>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
      default:
        break
    }
  }


  render() {
      // console.log(this.state)
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}