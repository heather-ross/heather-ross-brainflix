import React from 'react';
import './styles/global.scss';
import {Switch, Route} from "react-router-dom";
import MainNav from './components/MainNav/MainNav';
import Home from './pages/Home';
import Upload from './pages/Upload';

class App extends React.Component {

  render() {
    return (
      <>
          <MainNav />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/upload' exact component={Upload} />
                <Route path="/video/:id" render={(routerProps)=><Home {...routerProps}/>}/>
                <Route path="/videos/:id/comments" render={(routerProps)=><Home {...routerProps}/>}/>
              </Switch>
      </>
    );
  }
}
export default App;