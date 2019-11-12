import React from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CreateTeam from './components/CreateTeam';
import LogInPage from './components/LogInPage';
import TeamContainer from './containers/TeamContainer';
import CompareTeamsContainer from './containers/CompareTeamsContainer';
import EditDeleteContainer from './containers/EditDeleteContainer';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'




class App extends React.Component {

  state = {
    NFL: [],
    navigation: "",
    loggedIn: false,
    username: "",
    myTeams: [
          ]
  }

  removeTeam = (name) => {
    let teams = this.state.myTeams
    teams = teams.filter(team=>{
      return team.name != name
    })
    this.setState({myTeams: teams})
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/players')
      .then(response => response.json())
      .then(NFL => this.setState({ NFL }));

    fetch('http://localhost:4000/api/v1/teams')
      .then(response => response.json())
      .then(myTeams => this.setState({ myTeams }))
  }

  handleNavBar = (event) => {
    this.setState({navigation: event.target.name})
  }

  addNewTeam = (newTeam) => {
    this.setState({myTeams: [...this.state.myTeams, newTeam], navigation: ""})
  }

  signedIn = (username) => {
    // debugger
    this.setState({
      username: username,
      loggedIn: true
    }, () => this.props.history.push('/navbar'))
  }



  render () {
     console.log(this.state.loggedIn, this.state.navigation)
    
    // console.log(this.state.NFL)
    if(!this.state.loggedIn){
      return(
        <Switch>
          <Route path="/login" render={()=> <LogInPage signedIn={this.signedIn} />}/>
          <Redirect from='/' to="/login"/>
       </Switch>
      )
    }
    else if(this.state.navigation === ""){
      return (
          <Switch>
            <Route path="/navbar" render={()=> <NavBar handleNavBar={this.handleNavBar} />}/>
          </Switch>
      
      )
    }else if (this.state.navigation === "Create a New Team"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <CreateTeam NFL={this.state.NFL} addNewTeam={this.addNewTeam} handleNavBar={this.handleNavBar}/>
          </div>
        </div>
      )
    } else if (this.state.navigation === "See All Your Teams"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <TeamContainer myTeams={this.state.myTeams}/>
          </div>
        </div>
      )
    } else if (this.state.navigation === "Compare Teams"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <CompareTeamsContainer myTeams={this.state.myTeams}/>
          </div>
        </div>
      )
    } else if (this.state.navigation === "Edit Teams"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <EditDeleteContainer myTeams={this.state.myTeams} NFL={this.state.NFL} removeTeam={this.removeTeam}/>
          </div>
        </div>
      )
    }
  }//end of render


}

export default withRouter(App)