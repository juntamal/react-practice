import ImageList from '../components/App/ImageList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    urlList: state.imageUrls,
  }
}

export default connect(mapStateToProps, null)(ImageList);
