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

    this.regexDash = /\/|\\/g;
    this.replacementDash = '';

    this.regexPercent = /%20/g;
    this.replacementCross = '+';
    this.replacementSpace = ' ';

    this.state = {
      cats: [],
      dogs: [],
      laptops: [],
      custom: [],
      total: []
    };
  }

  componentDidMount() {
    this.catSearch();
    this.dogSearch();
    this.laptopSearch();
    this.searching();
    this.staticPath = window.location.pathname;
  }

  catSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&per_page=24&page=3&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats: response.data.photos.photo,
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
        dogs: response.data.photos.photo,
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
        laptops: response.data.photos.photo,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  searching = () => {
    this.string = window.location.pathname;
    this.reformatDash = this.string.replace(this.regexDash, this.replacementDash);
    this.reformatSpace = this.reformatDash.replace(this.regexPercent, this.replacementCross);
    this.reformattedString = this.reformatSpace;
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.reformattedString}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        custom: response.data.photos.photo,
        total:  Number(response.data.photos.total)
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }

  setStaticPath = () => {
    this.staticPath = window.location.pathname;
  }

  render(){
    this.string = window.location.pathname;
    this.reformatDash = this.string.replace(this.regexDash, this.replacementDash);
    this.reformatSpace = this.reformatDash.replace(this.regexPercent, this.replacementSpace);
    this.reformattedSubject = this.reformatSpace;
    return(
      <BrowserRouter>
        <div className="container">
            <Header searching={this.searching} />
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/cats"/> } />
              <Route path="/dogs" render={ () => <Gallery data={this.state.dogs} total={this.state.total} subject="dog" /> } />
              <Route path="/cats" render={ () => <Gallery data={this.state.cats} total={this.state.total} subject="cat" /> } />
              <Route path="/laptops" render={ () => <Gallery data={this.state.laptops} total={this.state.total} subject="laptop" />} />
              <Route path="/:search" render={ () => { return this.staticPath === window.location.pathname ? <Gallery {...console.log(this.reformattedSubject)} data={this.state.custom} total={this.state.total} subject={this.reformattedSubject} /> : this.setStaticPath()} } />  
            </Switch> 
        </div>
      </BrowserRouter>
    )
  }
}