import React from 'react'


export default class CompareCards extends React.Component {

    render() {
        console.log(this.props)
        return (
                <form className="team-compare">
                  {this.props.myTeams.filter(team =>{
                      return team.name=== this.props.team}).map(team => {
                         return team.players.map(player => {
                           return (
                                <ul className="compare-values">
                                    <p className="name" >{player.name}</p>
                                    <p className="points">{player.seasonPts}</p>
                                </ul>
                           )
                         })
                        })
                      }
                </form>
        )
    }
}