import React, { Component } from 'react';
import axios from 'axios';

export default class Giphy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifUrlList: [],
    };
  }

  getUrl() {
    const search = "fox";
    const key = "test";
    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    return url;
  }

  getGif = () => {
    const url = this.getUrl();

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
    const imageList = list.map(url => {
      return (
        <li>
          <img src={url} />
        </li>
      );
    });

    return <ul>{imageList}</ul>
  }

  render() {
    return (
      <div>
        <button onClick={this.getGif} type="button">search</button>
        <div>{this.renderImageList(this.state.gifUrlList)}</div>
      </div>
    );
  }
}
