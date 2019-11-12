import React from 'react'


export default class CompareCards extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <form className="review-full-container">
                  {this.props.myTeams.filter(team =>{
                      return team.name=== this.props.team}).map(team => {
                         return team.players.map(player => {
                           return (
                           <ul>{player.name}</ul>
                           )
                         })
                        })
                      }
                </form>
            </div>
        )
    }
}