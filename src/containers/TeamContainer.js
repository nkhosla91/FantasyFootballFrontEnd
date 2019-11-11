import React from 'react'
import TeamTile from '../components/TeamTile'

export default class TeamContainer extends React.Component{

    render(){
        console.log(this.props.myTeams)
        return (
            <div className="container">
                        {this.props.myTeams.map(team => {
                            // debugger
                            return <TeamTile
                                teamName={team.name}
                                players={team.players}
                            />
                        })}
        </div>
        )
    }

}