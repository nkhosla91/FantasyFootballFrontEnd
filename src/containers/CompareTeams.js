import React from 'react'
import CompareTeamSelector from '../components/CompareTeamSelector'


export default class CompareTeams extends React.Component {

    state = {
        teamOne: null,
        teamTwo: null
    }

    setTeams = (event) => {
        event.preventDefault()
        this.setState({[event.target.namne]: event.target.value})
    
    }

    render() {
        console.log(this.state)
        return(
            <CompareTeamSelector myTeams={this.props.myTeams} setTeams={this.setTeams}/>
        )
    }

}