import React, { Suspense, lazy } from 'react';
import { Router } from "@reach/router";
import { GlobalStateProvider } from './GlobalState'
import './App.css';

import Loading from './common/components/loading/Loading';

/* eslint-disable import/first */
const PageNotFound = lazy(() => import('./PageNotFound')); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setGlobalState = this.setState.bind(this);
  }
  render() {
    return (
      <GlobalStateProvider value={{"globalState": this.state, "setGlobalState": this.setGlobalState}}>
          <div className="App">
              <Suspense fallback={<Loading />}>
                <Router>
                  <PageWrapper path="/" page={"Payment"}  globalState={this.state} setGlobalState={this.setGlobalState}/>
                  <PageWrapper path=":page/*" globalState={this.state} setGlobalState={this.setGlobalState} /> 
                </Router>
              </Suspense>
          </div>
      </GlobalStateProvider>
    );
  }
}

class PageWrapper extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          PageComponent: null,
          hasPageNotFoundError: false,
          hasError: false };
  }

  static getDerivedStateFromError(error) {
      if (error.toString().search(/Cannot find module/i) !== -1 ) {
          return { hasError: false, hasPageNotFoundError: true };
      } else {
          return { hasError: true, hasPageNotFoundError: false };
      }
  }

  componentDidCatch(error, info) {
      this.setState({ hasError: true });
  }

  componentDidMount() {
      let page = this.props.page;
      let PageComponent = lazy(() => import(`./page/${page}`));
      this.setState({PageComponent: PageComponent});
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.props.page !==  prevProps.page) {
          let page = this.props.page;
          let PageComponent = lazy(() => import(`./page/${page}`));
          if (prevState.hasPageNotFoundError) {
            this.setState({PageComponent: PageComponent, hasError: false, hasPageNotFoundError:false});
          } else {
            this.setState({PageComponent: PageComponent});
          }
      }
  }

  render() {
      if (this.state.hasPageNotFoundError) {
          return (<PageNotFound {...this.props} />);
      }
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }
      let PageComponent = this.state.PageComponent;
      if (PageComponent == null) {
          return <div>Loading...</div>
      } else {
          return  (<PageComponent {...this.props} />);
      }
  }
}

export default App;
