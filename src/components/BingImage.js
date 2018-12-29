import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Button, Icon, Card } from 'antd';

import Loading from './Loading';
import '../style/image.scss';
import { downloadFile } from '../utils';

const { Meta } = Card;

class BingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillMount() {}

  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }

  onload = e => {
    this.setState({ loading: false });
  };

  handleDownloadPictures = url => {
    downloadFile(url);
  };

  render() {
    const { loading } = this.state;
    let { url, copyright = '', date, _id } = this.props;

    date = date ? dayjs(date).format('YYYY-MM-DD') : '';
    copyright = copyright.replace(/\(Bing China\)/, '');

    return (
      <div className="image__item">
        {url && (
          <img
            style={{ opacity: loading ? 0 : 1 }}
            className="image"
            onLoad={this.onload}
            src={url}
            alt={copyright}
          />
        )}
      </div>
    );
  }
}

export default BingImage;
