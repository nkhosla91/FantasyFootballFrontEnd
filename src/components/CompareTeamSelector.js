import React from 'react'


export default class CompareTeams extends React.Component {

    render () {
        return(
            <div className="compare-container">
            <menu className="c-input">
                <label className="c-input__label" for="radio">Select Team
                <svg className="c-input__icon" viewBox="0 0 20 20" width="20" height="20">
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
                </label>
                <input className="c-dropdown__trigger" id="radio" type="checkbox" aria-hidden="true"/>
                <ul className="c-dropdown u-text-small">
                    <select name="teamOne" onChange={this.props.setTeams}>
                        {this.props.myTeams.map(team => {
                            return (
                                <option>{team.teamName}</option>
                                )}
                                )}
                            </select>
                </ul>
            </menu>
            <menu className="c-input">
                <label className="c-input__label" for="checkbox">Select Team
                <svg className="c-input__icon" viewBox="0 0 20 20" width="20" height="20">
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
                </label>
                <input className="c-dropdown__trigger" id="checkbox" type="checkbox" aria-hidden="true"/>
                <ul className="c-dropdown u-text-small">
                    <select name="teamTwo" onChange={this.props.setTeams}>
                        {this.props.myTeams.map(team => {
                            return (
                                <option>{team.teamName}</option>
                                )}
                                )}
                            </select>
                </ul>
            </menu>
            </div>
        )
    }




}