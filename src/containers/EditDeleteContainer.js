import React from 'react'
import EditTeamSelector from '../components/EditTeamSelector'
import EditCards from '../components/EditCards'
import { networkInterfaces } from 'os'


export default class CompareTeams extends React.Component {

    state = {
        id: null,
        name: null,
        QB: null,
        RB1: null,
        RB2: null,
        WR1: null,
        WR2: null,
        TE: null,
        DEF: null,
        K: null
    
    }

    setTeam = (event) => {
        event.preventDefault()
        let newTeam = {}
        newTeam[event.target.name]= event.target.value

        this.props.myTeams.filter(team =>{
                newTeam["id"] = team.id
              })
     
        this.props.myTeams.filter(team =>{
            return team.name=== event.target.value}).map(team => {
                
                    return team.players.map(player =>{
                        // console.log(player)
                        if(player.position === "RB" ){
                            if(!newTeam.RB1){
                                newTeam["RB1"] = player
                            } else {
                                newTeam["RB2"] = player
                            }

                        }else if(player.position === "WR"){
                            if(!newTeam.WR1){
                                newTeam["WR1"] = player
                            } else {
                                newTeam["WR2"] = player
                            }

                        } else {
                            newTeam[player.position] = player
                        }
                    })
              })
              console.log(newTeam)
        this.setState({...this.state, ...newTeam })
    }

    playerChange = (event) => {
        event.preventDefault()
        let newPlayer = this.props.NFL.filter(player => {
            return player.name === event.target.value
        })
        this.setState({[event.target.name]: newPlayer[0]})
    }

    patchNewTeam = (event => {
        event.preventDefault()
        let patchTeam =   {   
            id: this.state.id,
            name: this.state.name,
            players: [
                {player: this.state.QB},
                {player: this.state.RB1},
                {player: this.state.RB2},
                {player: this.state.WR1},
                {player: this.state.WR2},
                {player: this.state.TE},
                {player: this.state.DEF},
                {player: this.state.K}
            ]
          }

        fetch(`http://localhost:4000/api/v1/teams/${this.state.id}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(patchTeam)
            })
            .then(response => response.json())
    })

    render () {
        console.log(this.state)
        if(!this.state.name) {
            return(
                <EditTeamSelector team={this.state.team} myTeams={this.props.myTeams} setTeam={this.setTeam}  />
            )
        } else {
        // debugger
            return (
                <div>
                    <EditTeamSelector team={this.state.team} setTeam={this.setTeam} myTeams={this.props.myTeams} />
                    <EditCards 
                    myTeams={this.props.myTeams}
                    team={this.state.team}
                    QB={this.state.QB}
                    RB1={this.state.RB1}
                    RB2={this.state.RB2}
                    WR1={this.state.WR1}
                    WR2={this.state.WR2}
                    TE={this.state.TE}
                    DEF={this.state.DEF}
                    K={this.state.K}
                    NFL={this.props.NFL}
                    playerChange={this.playerChange}
                    patchNewTeam={this.patchNewTeam}
                    />
                </div>
                )
        }
    }
}
