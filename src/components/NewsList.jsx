import React, { Component } from "react";
import { connect } from "react-redux";
import NewsItem from "./NewsItem/NewsItem";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  render() {
    const { news } = this.props;

    return (
      <div className="row my-4">
        {news.articles
          ? news.articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  index={index}
                  urlToImage={item.image}
                  content={item.content}
                  description={item.description}
                  url={item.url}
                  title={item.title}
                  publishedAt={item.publishedAt}
                  name={item.name}
                  author={item.author}
                />
              );
            })
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.news.data) {
    return {
      news: state.news.data[0],
    };
  } else
    return {
      news: {},
    };
}

export default connect(mapStateToProps)(NewsList);
