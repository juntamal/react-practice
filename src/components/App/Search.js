import React, {Component} from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ params: value });
  }

  handleSubmit = (e) => {
    const { getUrls } = this.props;
    e.preventDefault();
    getUrls(this.state.params);
  }

  render() {
    const { params } = this.state;
    const { buttonText } = this.props;

    return (
      <div>
        <div>Search</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={params} onChange={this.handleChange} />
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  }
}
