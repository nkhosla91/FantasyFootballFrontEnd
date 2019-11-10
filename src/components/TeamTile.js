import React from 'react'

export default class TeamTile extends React.Component {

    render () {
         return (
        
            <div className="item">
                <div className="content">
                    <h3>{this.props.teamName}</h3>
                    <p>{this.props.QB}</p>
                    <p>{this.props.RB1}</p>
                    <p>{this.props.RB2}</p>
                    <p>{this.props.WR1}</p>
                    <p>{this.props.WR2}</p>
                    <p>{this.props.TE}</p>
                    <p>{this.props.DEF}</p>
                    <p>{this.props.K}</p>
                </div>
            </div>
         )
        
    }

}

