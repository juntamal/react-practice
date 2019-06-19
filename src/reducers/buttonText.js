const initialState = 'Find Your Gifs';

const imageUrls = (state = initialState, action) => {
  switch(action.type) {
    case "START_REQUEST":
      return "wait..."
    case 'RECEIVE_DATA':
      return initialState

    default:
      return state;
  }
}

export default imageUrls;
