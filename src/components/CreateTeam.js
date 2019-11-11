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
        K: null,
        teamNamed: false,
        playersSigned: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    createdTeam = (event) => {
      event.preventDefault()
      if(this.state.teamName) {
        this.setState({teamNamed: true})
      }else {
        alert('Please set a team name')
      }
    }

    playersSigned = (event) => {
      event.preventDefault()
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
        let newTeam =   {   
          teamName: this.state.teamName,
          QB: this.state.QB,
          RB1: this.state.RB1,
          RB2: this.state.RB2,
          WR1: this.state.WR1,
          WR2: this.state.WR2,
          TE: this.state.TE,
          DEF: this.state.DEF,
          K: this.state.K
        }
        
 

        this.props.addNewTeam(newTeam)    
        return fetch("http://localhost:4000/api/v1/teams", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTeam)
          })
          .then(response => response.json())
        
      }//end of if
  
    }


    render () {
      // console.log(this.state)

      if (!this.state.teamNamed){
        return (
          <form className="review-full-container" onSubmit={this.handleSubmit, this.createdTeam}>
            <input placeholder="Name your team..." name="teamName" onChange={this.handleChange}/>
      
                <input type="submit" value=" Make your Team!" />
  
          </form>
        )

      } else {
        return (
          <div>
                <form className="review-full-container" onSubmit={this.handleSubmit}>
                  <h1><b>{this.state.teamName}</b></h1>
                  <p> </p>
                  <label>
                    <p>QB</p>
                    <select name="QB" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "QB"}).map(player => {
                          return <option  key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>RB</p>
                    <select name="RB1" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "RB"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>RB</p>
                    <select name="RB2" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "RB"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>WR</p>
                    <select name="WR1" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "WR"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>WR</p>
                    <select name="WR2" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "WR"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>TE</p>
                    <select name="TE" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "TE"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>DEF</p>
                    <select name="DEF" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "DEF"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p>K</p>
                    <select name="K" onChange={this.handleChange}>
                      <option value=" "> </option>
                      {this.props.NFL.filter(player =>{
                        return player.position === "K"}).map(player => {
                          return <option key={player.id}>{player.name}</option>
                        })
                      }
                    </select>
                    <p></p>
                    <input type="submit" value="Make your Team!" onSubmit={this.playersSigned}/>
                  </label>
                </form>
            </div>  
          )
        }
    }//end of return


}