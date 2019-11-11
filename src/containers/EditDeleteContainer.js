import React from 'react'
import EditTeamSelector from '../components/EditTeamSelector'
import EditCards from '../components/EditCards'


export default class CompareTeams extends React.Component {

    state = {
        team: null
    }

    setTeam = (event) => {
        debugger
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    render () {
        console.log(this.state.team)
        if(!this.state.team) {
            return(
                <EditTeamSelector team={this.state.team} setTeam={this.setTeam} myTeams={this.props.myTeams}/>
            )
        } else {
            return (
                <div>
                    <EditTeamSelector team={this.state.team} setTeam={this.setTeam} myTeams={this.props.myTeams}/>
                    <EditCards myTeams={this.props.myTeams} team={this.state.team}/>
                </div>
                )
        }
    }
}
