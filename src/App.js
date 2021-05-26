import React, { Component } from "react";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/mylistItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render posts!' />
          <SharedButton
            buttonText={configButton.buttonText}
            emitEvent={configButton.emitEvent}
          />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
