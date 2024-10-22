import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

class NewsPagesecond extends Component {
  static defaultProps = {
    PageSize: 6,
    Country: 'in',
    Category: '',
  };

  static propTypes = {
    PageSize: PropTypes.number,
    Country: PropTypes.string,
    Category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.newUpdate();
  }

  updateCharUp = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  newUpdate = async () => {
    this.props.setProgress(20);
    this.setState({ page: 1, loading: true });

    // Updated access to this.state.page
    const qrl = `https://newsapi.org/v2/everything?q=Apple&sortBy=relevancy&apiKey=7de6fc875b784daf9df77c3a1802d7a2&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    
    const data = await fetch(qrl);
    this.props.setProgress(50);
    const exportdata = await data.json();

    this.props.setProgress(75);

    // Ensure articles is always an array
    const articles = exportdata.articles || [];

    this.setState({
      articles: articles,
      totalResults: exportdata.totalResults || 0,
      loading: false,
    });
    this.props.setProgress(100);
  };

  fetchDataFrom = async () => {
    this.setState({ loading: true });

    // Updated access to this.state.page
    const qrl = `https://newsapi.org/v2/everything?q=Apple&sortBy=relevancy&apiKey=7de6fc875b784daf9df77c3a1802d7a2&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    
    const data = await fetch(qrl);
    const exportdata = await data.json();
    console.log(exportdata);

    const articles = exportdata.articles || [];

    this.setState({
      articles: this.state.articles.concat(articles),
      totalResults: exportdata.totalResults || 0,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h2 className="my-6 text-center" style={{ marginTop: "80px" }}>
          Vinay News - Come From {this.updateCharUp(this.props.Category)}
        </h2>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchDataFrom}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-3 mx-4 my-3">
                    <NewsItem
                      author={element.author}
                      timezone={element.publishedAt}
                      imageUrl={element.urlToImage ? element.urlToImage : 'loadimage.jpg'}
                      title={element.title}
                      readMore={element.url}
                      description={element.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsPagesecond;
