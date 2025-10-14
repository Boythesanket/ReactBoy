import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1, // start from first page
      loading: false
    };
  }

  async componentDidMount() {
    this.fetchNews(1); // when page loads, get first 9 news
  }

  // function to fetch 9 news per page
  fetchNews = async (page) => {
    let url = `https://newsapi.org/v2/everything?q=anime%20english&apiKey=5dc95c671e9f499c8beab766cbde2e07&page=${page}&pageSize=9`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: page , loading: false});
  };

  nextBtn = () => {
    this.fetchNews(this.state.page + 1);
  };

  previousBtn = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Anime News</h1>
        {this.state.loading && <Loading/>}

        {/* News boxes */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}>
          {!this.state.loading && this.state.articles.map((elem, index) => (
            <NewsItem
              key={index}
              title={elem.title}
              description={elem.description}
              imageUrl={
                elem.urlToImage ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              newsUrl={elem.url}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="btn">
          <button onClick={this.previousBtn} disabled={this.state.page <= 1}>
            ⬅ Previous
          </button>
          <button disabled={this.state.page>=52} onClick={this.nextBtn}>Next ➡</button>
        </div>
      </>
    );
  }
}

export default News;
