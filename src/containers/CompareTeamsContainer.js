import React from 'react'
import CompareTeamSelector from '../components/CompareTeamSelector'
import CompareCards from '../components/CompareCards'

export default class CompareTeamsContainer extends React.Component {

    state = {
        teamOne: null,
        teamTwo: null
    }

    setTeams = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log(this.props.myTeams)
        if (!this.state.teamOne || !this.state.teamTwo){
            return(
                <CompareTeamSelector myTeams={this.props.myTeams} setTeams={this.setTeams}/>
            )
        } else {
            return(
                <div>
                    <div> 
                        <CompareTeamSelector myTeams={this.props.myTeams} setTeams={this.setTeams}/>
                    </div>
                    <div className="team-compare-container">
                        <CompareCards myTeams={this.props.myTeams} team={this.state.teamOne}/>
                        <CompareCards myTeams={this.props.myTeams} team={this.state.teamTwo}/>
                    </div>
                </div>
            )
        }
    }

}