import React, { Component } from 'react';
import loading from './loading.gif';

class Galleryitem extends Component {

  constructor(props) {
    super(props);

    this.imageItems = [];

    [this.props.data][0].map((image) => {
      return (
        this.imageItems.push(
          {id: image.id, src: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        )
      )
    });

    this.state = {
      images: this.imageItems.map(image => ({
        ...image,
        src: loading
      }))
    }
  }

  componentDidMount() {
    this.state.images.forEach((image, index) => {
      const {src} = this.imageItems[index] // get image primary src
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
          <img src={image.src} alt={this.props.subject} />
        </div>
      </li>
    ));
  
    return listWork;
  }
}

export default Galleryitem;