import React, { Component } from 'react';
import config from '../config/development';
import axios from 'axios';
import Search from './Giphy/Search';

export default class Giphy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifUrlList: [],
    };
  }

  getUrl(searchParams) {
    const search = searchParams;
    const key = config.apiKey;
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    return url;
  }

  getGif = (searchParams) => {
    const url = this.getUrl(searchParams);

    axios.get(url).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      this.setState({ gifUrlList: imageUrlList, });
    });
  }

  renderImageList(list) {
    if (list.length === 0) {
      return;
    }

    const imageList = list.map((url, index) => {
      return (
        <li key={index}>
          <img src={url} />
        </li>
      );
    });

    return <ul>{imageList}</ul>
  }

  render() {
    return (
      <div>
        <Search getGif={this.getGif}/>
        {this.renderImageList(this.state.gifUrlList)}
      </div>
    );
  }
}
