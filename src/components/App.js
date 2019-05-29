import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import '../css/style.css';
import apiKey from '../other/config.js';
import Header from './Header';
import Gallery from './Gallery';


export default class extends Component {

  constructor() {
    super();
    this.counterOne = 0;
    this.counterTwo = 0;
    this.state = {
      cats: [],
      dogs: [],
      laptops: [],
      custom: [],
    };
  }

  componentDidMount() {
    this.catSearch();
    this.dogSearch();
    this.laptopSearch();
    this.searching();
  }

  catSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&per_page=24&page=3&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  dogSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dog&per_page=24&page=3&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        dogs: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  laptopSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=laptop&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        laptops: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  searching = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${window.location.pathname}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        custom: response.data.photos.photo,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }

  incrementOne = () => {
    this.counterOne++;
  }

  incrementTwo = () => {
    this.counterTwo++;
  }

  reset = () => {
    this.counterTwo = 0;
  }

  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Header searching={this.searching} incrementTwo={this.incrementTwo} />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/cats"/> } />
            <Route path="/dogs" render={ () => <Gallery data={this.state.dogs} subject="dog" incrementOne={this.incrementOne} incrementTwo={this.incrementTwo} counterOne={this.counterOne} counterTwo={this.counterTwo} reset={this.reset} {...this.incrementTwo()} /> } />
            <Route path="/cats" render={ () => <Gallery data={this.state.cats} subject="cat" incrementOne={this.incrementOne} incrementTwo={this.incrementTwo} counterOne={this.counterOne} counterTwo={this.counterTwo} reset={this.reset} {...this.incrementTwo()} /> } />
            <Route path="/laptops" render={ () => <Gallery data={this.state.laptops} subject="laptop" incrementOne={this.incrementOne} incrementTwo={this.incrementTwo} counterOne={this.counterOne} counterTwo={this.counterTwo} reset={this.reset} {...this.incrementTwo()} />} />
            <Route path="/:topic" render={ () => <Gallery data={this.state.custom} subject={window.location.pathname} incrementOne={this.incrementOne} incrementTwo={this.incrementTwo} counterOne={this.counterOne} counterTwo={this.counterTwo} reset={this.reset} {...this.incrementTwo()} /> } />  
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}