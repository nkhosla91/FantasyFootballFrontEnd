import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import CreateTeam from './components/CreateTeam';


export default class App extends React.Component {

  state = {
    NFL: [],
    navigation: "",
    myTeams: []
  }

  componentDidMount() {
    fetch('https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2019&week=9&format=json')
      .then(response => response.json())
      .then(NFL => this.setState({ NFL }));
  }

  handleNavBar = (event) => {
    this.setState({navigation: event.target.name})
  }
// kjhbsdfkjhbasjhdfbahs 
  addNewTeam = (newTeam) => {
    this.setState({myTeams: [...this.state.myTeams, newTeam] })
  }


  render () {
    console.log(this.state.myTeams)
    if(this.state.navigation === ""){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
          
          </div>
        </div>
      )
    }else if (this.state.navigation === "Create a New Team"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <CreateTeam NFL={this.state.NFL} addNewTeam={this.addNewTeam}/>
          </div>
        </div>
      )
    }
  }//end of render


}
