import React from 'react'
import CompareTeamSelector from '../components/CompareTeamSelector'
import CompareCards from '../components/CompareCards'

export default class CompareTeams extends React.Component {

    state = {
        teamOne: null,
        teamTwo: null
    }

    setTeams = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        console.log(this.state)
        if (!this.state.teamOne || !this.state.teamTwo){
            return(
                <CompareTeamSelector myTeams={this.props.myTeams} setTeams={this.setTeams}/>
            )
        } else {
            return(
                <div>
                    <CompareTeamSelector myTeams={this.props.myTeams} setTeams={this.setTeams}/>
                    <CompareCards myTeams={this.props.myTeams} team={this.state.teamOne}/>
                    <CompareCards myTeams={this.props.myTeams} team={this.state.teamTwo}/>
                </div>
            )
        }
    }

}