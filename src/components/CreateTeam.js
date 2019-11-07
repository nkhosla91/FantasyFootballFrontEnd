import React from 'react'

export default class CreateTeam extends React.Component {

    state = {
        teamName: null,
        QB: null,
        RB1: null,
        RB2: null,
        WR1: null,
        WR2: null,
        TE: null,
        DEF: null,
        K: null
    }

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      if(!this.state.teamName){
        alert("Don't forget to name your team!")
      }else if(!this.state.teamName || !this.state.QB|| !this.state.RB1 || !this.state.RB2|| !this.state.WR1 || !this.state.WR2 || !this.state.TE|| !this.state.DEF|| !this.state.K) {
        alert("Pick a player for each position!")
      }else if(this.state.RB1 === this.state.RB2){
        alert("You can't pick the same running back twice!")
      }else if(this.state.WR1 === this.state.WR2){
        alert("You can't pick the same wide reciever twice!")
      }else{
        this.props.addNewTeam(this.state)    
      }
  
    }


    render () {
      console.log(this.state)
        return (
          <form className="creatTeam" onSubmit={this.handleSubmit}>
          <input placeholder="Name your team..." name="teamName" onChange={this.handleChange}/>

            <label>
              <p>QB</p>
              <select name="QB" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "QB"}).map(player => {
                    return <option  key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>RB</p>
              <select name="RB1" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "RB"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>RB</p>
              <select name="RB2" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "RB"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>WR</p>
              <select name="WR1" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "WR"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>WR</p>
              <select name="WR2" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "WR"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>TE</p>
              <select name="TE" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "TE"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>DEF</p>
              <select name="DEF" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "DEF"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <p>K</p>
              <select name="K" onChange={this.handleChange}>
                <option value=" "> </option>
                {this.props.NFL.players.filter(player =>{
                  return player.position === "K"}).map(player => {
                    return <option key={player.id}>{player.name}</option>
                  })
                }
              </select>
              <input type="submit" value="Make your Team!" />
            </label>
            </form>
            
        )
    }//end of return


}