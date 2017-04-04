import React ,{Component} from 'react';

class SearchBar extends Component {

constructor(props){

super(props);

this.state = {term : ''}

}

render(){
  return(
    <div className="search-bar">
      <input placeholder ="What do you want to watch"
        value={this.state.term}
        onChange={event=> this.onInputChange(event.target.value)}/>

    </div>
  );
}

onInputChange(term){
   this.setState({term});
   this.props.onSearchTermChange(term);//call the callback from index(app)
 }
}

export default SearchBar;
