import React from 'react'


export default class EditCards extends React.Component {

    render() {
        console.log('cards')
        return (
            <div>
                  {this.props.myTeams.filter(team =>{
                      return team.teamName=== this.props.team}).map(team => {
                          return (
                              <div>
                                <form className="review-full-container" >
                                <ul>QB: {team.QB}</ul>
                                <ul>RB1: {team.RB1}</ul>
                                <ul>RB2: {team.RB2}</ul>
                                <ul>WR1: {team.WR1}</ul>
                                <ul>WR2: {team.WR2}</ul>
                                <ul>TE: {team.TE}</ul>
                                <ul>FLEX: {team.FLEX}</ul>
                                <ul>DEF: {team.DEF}</ul>
                                <button>Edit</button>
                                <br></br>
                                <button>Delete</button>
                                </form>
                            </div>
                            )
                        })
                      }
            </div>
        )
    }
}