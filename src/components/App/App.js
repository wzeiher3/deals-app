import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeForm from '../HomeForm/HomeForm'
import AddDeal from '../AddDeal/AddDeal'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import DealItemExpanded from '../DealItemExpanded/DealItemExpanded'
import AllList from '../AllList/AllList'
import WeekForm from '../WeekForm/WeekForm'
import ApiContext from '../../contexts/ApiContext'
import About from '../About/About'
import PrivateRoute from '../../routes/PrivateRoute'
import PublicOnlyRoute from '../../routes/PublicOnlyRoute'




//import './App.css';

class App extends React.Component {
    state = {
      deals: []
    }
  
  static contextType = ApiContext;

  //renders components
  renderMainRoutes() {
    
    if(!this.context.logIn){
      return (
        <>
          <Route
            exact
            path='/'
            component={About}
          />
          <PrivateRoute
            path='/add-deal'
            component={AddDeal}
          />
          <PublicOnlyRoute
            path='/login'
            component={LoginForm}
          />
          <PublicOnlyRoute
            path='/register'
            component={RegistrationForm}
          />
          <PrivateRoute
            path='/deals/:dealId'
            component={DealItemExpanded}
          />
          <PrivateRoute
            exact
            path='/deals'
            component={AllList}
          />
          <PrivateRoute
            path='/my-week'
            component={WeekForm}
          />
          <Route
            path='/about'
            component={About}
          />
        </>
      )
    }
    else{
    return (
      <>
        <Route
          exact
          path='/'
          component={HomeForm}
        />
        <PrivateRoute
          path='/add-deal'
          component={AddDeal}
        />
        <PublicOnlyRoute
          path='/login'
          component={LoginForm}
        />
        <PublicOnlyRoute
          path='/register'
          component={RegistrationForm}
        />
        <PrivateRoute
          path='/deals/:dealId'
          component={DealItemExpanded}
        />
        <PrivateRoute
          exact
          path='/deals'
          component={AllList}
        />
        <PrivateRoute
          path='/my-week'
          component={WeekForm}
        />
        <Route
          path='/about'
          component={About}
        />
      </>
    )
    }
  }
  
  
  
  render(){
    return (
     
        <div className='App'>
          <Nav />
          <header className='App__header'>
            <h1>
              <Link to='/'>Deals Tracker</Link>
              {' '}
            </h1>
          </header>
          <main className='App__main'>
            <div className="bg"></div>
            <div className="bg bg2"></div>
           <div className="bg bg3"></div>
            <div className="content">
            {this.renderMainRoutes()}
            </div>
          </main>
        </div>
      
    )
  }
}

export default App;
