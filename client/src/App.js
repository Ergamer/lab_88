import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Posts from "./containers/Posts/Posts";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewPost from "./containers/NewPost/NewPost";
import OnePostWindow from "./containers/OnePostWindow/OnePostWindow";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/posts/:id" exact component={OnePostWindow}/>
          <Route path="/newpost" exact component={NewPost}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
