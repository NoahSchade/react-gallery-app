import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import '../css/style.css';

// Import Components
import apiKey from '../other/config.js';
import Header from './Header';
import Gallery from './Gallery';
import NotFound from './NotFound';
import LoadingPage from './LoadingPage';


export default class extends Component {

  constructor() {
    super();

    // Code used to format a string that is used to request data from Flickr and it is also used to format the subject title.
    this.regexPercent = /%20/g;
    this.replacementCross = '+';
    this.replacementSpace = ' ';
    this.regexSpecial = /[^a-zA-Z0-9-' '-+]/g;
    this.replacementBlank = '';

    // this.display keeps track of whether to display the gallery images or the loading component.
    this.display = false;

    // this.buttonActive keeps track of whether to forceUpdate or not.
    this.buttonActive = "standby";

    // this.activate keeps track of whether to forceUpdate twice or not.
    this.activate = 0;
    
    // These states stores data from the response of Flickr.
    this.state = {
      cats: [],
      dogs: [],
      laptops: [],
      custom: [],
      total: []
    };

    // When the URL path after the hash symbol changes execute the searching function and the
    window.addEventListener("hashchange", e => {
        this.activator();
        this.searching();
    });
  }

  searchButtonActivate = () => {
    this.buttonActive = "on";
  }

  activator(){
    this.activate++;
    if(this.activate <= 1){
      this.forceUpdate();
      this.forceUpdate();
    }

    if(this.buttonActive === "off"){
      this.forceUpdate();
    }

    this.buttonActive = "off";
  }

  componentDidMount() {
    this.catSearch();
    this.dogSearch();
    this.laptopSearch();
    this.searching();
    this.staticPath = window.location.hash;
  }

  catSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&per_page=24&page=3&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats: response.data.photos.photo,
        total:  Number(response.data.photos.total),
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
        total:  Number(response.data.photos.total)
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
        total:  Number(response.data.photos.total)
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  searching = () => {
    this.string = window.location.hash;
    this.reformatSpace = this.string.replace(this.regexPercent, this.replacementCross);
    this.reformatSpecial = this.reformatSpace.replace(this.regexSpecial, this.replacementBlank);
    this.reformattedString = this.reformatSpecial;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.reformattedString}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        custom: response.data.photos.photo,
        total:  Number(response.data.photos.total),
        display: this.display = true
      });
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })

    this.forceUpdate();
    this.forceUpdate();
  }

  reformatSubject = () => {
    this.string = window.location.hash;
    this.reformatSpace = this.string.replace(this.regexPercent, this.replacementSpace);
    this.reformatSpecial = this.reformatSpace.replace(this.regexSpecial, this.replacementBlank);
    this.reformattedSubject = this.reformatSpecial;
  }

  render(){
    return(
      <HashRouter>
        <div className="container">
            <Header searching={this.searching} searchButtonActivate={this.searchButtonActivate} />
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/cat"/> } />
              <Route exact path="/dog" render={ () => <Gallery data={this.state.dogs} total={this.state.total} subject="Dog" {...this.display = false} /> } />
              <Route exact path="/cat" render={ () => <Gallery data={this.state.cats} total={this.state.total} subject="Cat" {...this.display = false} /> } />
              <Route exact path="/laptop" render={ () => <Gallery data={this.state.laptops} total={this.state.total} subject="Laptop" {...this.display = false} /> } />
              <Route exact path="/:search" render={ () => this.display ? <Gallery data={this.state.custom} total={this.state.total} {...this.reformatSubject()} subject={this.reformattedSubject} {...this.activate > 0 ? this.display = false : this.display = true } /> : <LoadingPage/> } />
              <Route component={NotFound} />
            </Switch> 
        </div>
      </HashRouter>
    )
  }
}