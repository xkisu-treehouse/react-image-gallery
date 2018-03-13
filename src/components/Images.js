import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apiKey from '../config.js'
import Image from './Image'

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photos: []
    };

    this.getImages = this.getImages.bind(this);

    this.getImages(props.query)
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.query !== nextProps.query) {
      var query = nextProps.query
      console.log('image query: ' + query)
      this.getImages(query)
    }
  }

  getImages (query) {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1&safe_search=1`).then((response) => {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)
      this.setState({
        photos: json.photos.photo
      })
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="images">
        {this.state.photos.map(photo => {
          const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          return <Image url={url} key={photo.id} />;
        })}
      </div>
    );
  }
}

Images.propTypes = {
  query: PropTypes.string.isRequired
}

export default Images;