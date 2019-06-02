import React, { Component } from 'react';
import axios from 'axios';

export default class Giphy extends Component {
  constructor(props) {
    super(props);
  }

  getUrl = () => {
    const search = "fox";
    const key = "test";
    const limit = 3;

    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

    return url;
  }

  getGif = () => {
    const url = this.getUrl();

    axios.get(url).then(res => {
      console.log(res.data);
      const data = res.data.data;
      const imageUrl = data[0].images.downsized.url;
      const img = document.createElement("img");
      img.src = imageUrl;
      document.body.appendChild(img);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getGif} type="button">search</button>
      </div>
    );
  }
}
