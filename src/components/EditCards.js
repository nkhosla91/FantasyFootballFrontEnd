import React from 'react'


export default class EditCards extends React.Component {

    handleChange = (event) => {
        event.preventDefault ()
        console.log("change")
        // debugger
        this.props.playerChange(event)
    }

    handleSubmit = (event) => {
        event.preventDefault ()
        this.props.patchNewTeam(event)
    }

    handleDelete = (event) => {
      event.preventDefault()
      this.props.deleteTeam(event)
    }

    render() {
        console.log(this.props)
        // debugger
        return (
            <div>
                              <div>
                              <form className="review-full-container" onSubmit={this.handleSubmit}>
                                <h1><b>{this.props.team}</b></h1>
                                <p> </p>
                                <label>
                                  <p>QB</p>
                                  <select name="QB" onChange={this.handleChange}>
                                    <option selected>{this.props.QB.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "QB"}).map(player => {
                                        return <option  key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>RB</p>
                                  <select name="RB1" onChange={this.handleChange}>
                                    <option selected>{this.props.RB1.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "RB"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>RB</p>
                                  <select name="RB2" onChange={this.handleChange}>
                                    <option selected>{this.props.RB2.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "RB"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>WR</p>
                                  <select name="WR1" onChange={this.handleChange}>
                                    <option selected>{this.props.WR1.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "WR"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>WR</p>
                                  <select name="WR2" onChange={this.handleChange}>
                                    <option selected>{this.props.WR2.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "WR"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>TE</p>
                                  <select name="TE" onChange={this.handleChange}>
                                    <option selected>{this.props.TE.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "TE"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>DEF</p>
                                  <select name="DEF" onChange={this.handleChange}>
                                    <option selected>{this.props.DEF.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "DEF"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p>K</p>
                                  <select name="K" onChange={this.handleChange}>
                                    <option selected>{this.props.K.name}</option>
                                    {this.props.NFL.filter(player =>{
                                      return player.position === "K"}).map(player => {
                                        return <option key={player.id}>{player.name}</option>
                                      })
                                    }
                                  </select>
                                  <p></p>
                                  <input type="submit" value="Update Your Team!"/>
                                  <p></p>
                                   <input type="click" value="Delete Your Team!" onClick={this.handleDelete}/>
                          
                                </label>
                              </form>
                              <form>
                              </form>
                          </div>  
                   
            </div>
        )
    }
}