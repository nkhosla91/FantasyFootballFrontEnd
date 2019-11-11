import React from 'react'

export default class TeamTile extends React.Component {

    render () {
        console.log(this.props, "team tile")
         return (
        
            <div className="item">
                <div className="content">
                    <h3>{this.props.teamName}</h3>
                    {this.props.players.map(player =>{
                        return <p>{player.name}</p>
                    })}
                </div>
            </div>
         )
        
    }

}

