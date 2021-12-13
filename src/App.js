import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from "./Banner";
import NavBar from './NavBar'

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetlfixOriginals} isLargeRow/>
        <Row title="TRENDING" fetchURL={requests.fetchTrending}/>
        <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
        <Row title="ACTION" fetchURL={requests.fetchActionMovies}/>
        <Row title="COMEDY" fetchURL={requests.fetchComdeyMovies} />
        <Row title="HORROR" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="ROMANCE" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="DOCUMENTARY" fetchURL={requests.fetchDocumentaries}/>
        </div>
    )
  }
}
export default App;
