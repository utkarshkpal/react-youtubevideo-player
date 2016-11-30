import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA7zxp9kmId_OhhPO1zdFLaIFMNctxIOq4';



class App extends Conponent {

  constructor(props){
    super(props);
    this.state={videos:[]};
    YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
      this.setState({videos});
      //this.setState({videos:videos})
      });
  }

  render(){
    return (
    <div>
       <SearchBar/>
    </div>
  );

  }


}




ReactDOM.render(<App />,document.querySelector('.container'));
