// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = () => {
    this.setState({
      searchInput: 'es',
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResult = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="input">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <ul className="blog-list">
          {searchResult.map(list => (
            <DestinationItem key={list.id} destinations={list} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
