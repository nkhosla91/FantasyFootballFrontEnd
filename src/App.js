import React from 'react';
import NavBar from './components/NavBar';
import './App.scss';
import CreateTeam from './components/CreateTeam';
import LogInPage from './components/LogInPage';
import TeamContainer from './containers/TeamContainer';
import CompareTeams from './containers/CompareTeams';



export default class App extends React.Component {

  state = {
    NFL: [],
    navigation: "",
    loggedIn: false,
    username: "",
    myTeams: [{ 
                teamName: "Team 1",
                DEF: "Cleveland Browns",
                K: "Harrison Butker",
                QB: "Tom Brady",
                RB1: "Peyton Barber",
                RB2: "Giovani Bernard",
                TE: "Blake Bell",
                WR1: "Marcell Ateman",
                WR2: "Tavon Austin"
                },{
                teamName: "Team 2",
                DEF: "Los Angeles Chargers",
                K: "Aldrick Rosas",
                QB: "Tim Boyle",
                RB1: "Nick Bawden",
                RB2: "Saquon Barkley",
                TE: "Andrew Beck",
                WR1: "Odell Beckham",
                WR2: "Danny Amendola"
                },{
                teamName: "Team 3",
                DEF: "New York Jets",
                K: "Eddy Pineiro",
                QB: "Chase Daniel",
                RB1: "Chris Carson",
                RB2: "Rex Burkhead",
                TE: "Luke Stocker",
                WR1: "A.J. Brown",
                WR2: "Kendrick Bourne"
             },{
                teamName: "Team 4",
                DEF: "New York Jets",
                K: "Eddy Pineiro",
                QB: "Chase Daniel",
                RB1: "Chris Carson",
                RB2: "Rex Burkhead",
                TE: "Luke Stocker",
                WR1: "A.J. Brown",
                WR2: "Kendrick Bourne"
              },{
                teamName: "Team 5",
                DEF: "New York Jets",
                K: "Eddy Pineiro",
                QB: "Chase Daniel",
                RB1: "Chris Carson",
                RB2: "Rex Burkhead",
                TE: "Luke Stocker",
                WR1: "A.J. Brown",
                WR2: "Kendrick Bourne"
              },{
                teamName: "Team 6",
                DEF: "New York Jets",
                K: "Eddy Pineiro",
                QB: "Chase Daniel",
                RB1: "Chris Carson",
                RB2: "Rex Burkhead",
                TE: "Luke Stocker",
                WR1: "A.J. Brown",
                WR2: "Kendrick Bourne"
            }
          ]
  }

  componentDidMount() {
    fetch('https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2019&week=9&format=json')
      .then(response => response.json())
      .then(NFL => this.setState({ NFL }));
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
    })
  }



  render () {
    console.log(this.state.navigation)
    // if(!this.state.loggedIn){
    //   return(
    //     <LogInPage signedIn={this.signedIn}/>
    //   )
    // }
    // else 
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
    }else if (this.state.navigation === "Compare Teams"){
      return (
        <div>
          <div name="Nav Bar">
            <NavBar handleNavBar={this.handleNavBar}/>
            <CompareTeams myTeams={this.state.myTeams}/>
          </div>
        </div>
      )
    }
  }//end of render


}