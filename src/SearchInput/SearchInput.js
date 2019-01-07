import React, { Component } from 'react'
import '../styles/SearchInput.scss'


export class SearchInput extends Component {
  constructor() {
    super()
    this.state = {
      subject:  ''
    }
  }
  
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      subject: value
    })
  }

  handleSubmit = () => {
    this.setState({
      subject: ''
    })
  }

  render() {
    const searchIcon = '../src/icons/search.svg'
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}type="text" name="search" value={this.state.subject} placeholder="Search"/>
        <img className="search-icon" src={searchIcon} alt="A magnifying glass used to represent a search icon"/>
      </form>
    )
  }
}