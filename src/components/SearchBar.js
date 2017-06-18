import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
    };
  }

  searchHandler = (e) => {
    const searchKey = e.target.value;
    this.setState({searchKey: searchKey});
    this.props.search(searchKey);
  }

  render() {
    return (
      <input type="text" className="search-bar"
         value={this.state.text} onChange={this.searchHandler} />
    );
  }
}

export default SearchBar;
