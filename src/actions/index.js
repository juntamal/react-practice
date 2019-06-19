import axios from 'axios';
import giphyApi from '../APIs/giphyAPI';

export const plus = num => {
  return {type: 'PLUS', payload: {num: num}};
};

export const minus = num => {
  return {type: 'MINUS', payload: {num: num}};
};

export const asyncMinus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: 'MINUS', payload: {num: num}});
    }, 1000);
  };
};

export const changeTitle = title => {
  return {type: 'CHANGE_TITLE', payload: {title: title}};
};

export const getJson = () => {
  return dispatch => {
    dispatch({type: 'WAIT'});
    const url = 'https://api.myjson.com/bins/128z7z';

    axios.get(url).then(res => {
      dispatch(changeTitle(res.data.foxes[0].name));
    });
  };
};

const startRquest = () => {
  return {
    type: "START_REQUEST"
  };
};

const receiveData = data => {
  return {
    type: 'RECEIVE_DATA',
    payload: data,
  };
};

export const getUrls = word => {
  return dispatch => {
    dispatch(startRquest());
    giphyApi(word).then(res => {
      const data = res.data.data;
      const imageUrlLists = data.map(item => item.images.downsized.url);
      dispatch(receiveData(imageUrlLists));
    });
  };
};
