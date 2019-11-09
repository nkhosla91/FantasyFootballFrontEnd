import React from 'react'
import TeamTile from '../components/TeamTile'

export default class TeamContainer extends React.Component{

    render(){
        return (
            <div className="container">
                        {this.props.myTeams.map(team => {
                            // debugger
                            return <TeamTile
                                teamName={team.teamName}
                                QB={team.QB}
                                RB1={team.RB1}
                                RB2={team.RB2}
                                WR1={team.WR1}
                                WR2={team.WR2}
                                TE={team.TE}
                                DEF={team.DEF}
                                K={team.K}
                            />
                        })}
        </div>
        )
    }

}