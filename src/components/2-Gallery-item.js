import React, { Component } from 'react';
import loading from './loading.gif';

class Galleryitem extends Component {

  constructor() {
    super();

    this.imagesProp = [{
      id: 1,
      src: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }];

    this.state = {
      images: this.imagesProp.map(image => ({
        ...image,
        src: loading
      }))
    }
  }


  componentDidMount() {
    this.state.images.forEach((image, index) => {
      const {src} = this.imagesProp[index] // get image primary src
      const primaryImage = new Image() // create an image object programmatically
      primaryImage.onload = () => { // use arrow function here
        console.log(`image #${index + 1} is loaded!`)
        const images = [...this.state.images] // copy images array from state
        images[index].src = src // adjust loaded image src
        this.setState({
          images
        })
      }
      primaryImage.src = src // do it after you set onload handler
    })
  }

  render(){

    const listWork = this.state.images.map(image => (
      <li key={image.id}>
        <div>
          <img src={image.src} alt='' />
        </div>
      </li>
    ));
  
    return listWork;
  }
}

export default Galleryitem;