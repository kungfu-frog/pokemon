import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import HeaderComponent from './components/Header';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/graphql';

class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div style={{ height: '100%' }}>
          <HeaderComponent/>
          <Switch>
            <Route path="/search" component={SearchPage}/>
            <Redirect exact from="/" to="/search"/>
          </Switch>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
