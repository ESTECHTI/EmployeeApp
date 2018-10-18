import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA-zNIwxKdqMo_byGnHNHQVE6tTePnSWfA',
      authDomain: 'manager-7b4bd.firebaseapp.com',
      databaseURL: 'https://manager-7b4bd.firebaseio.com',
      projectId: 'manager-7b4bd',
      storageBucket: 'manager-7b4bd.appspot.com',
      messagingSenderId: '746356430438'
    };
    firebase.initializeApp(config);
  }
  
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

