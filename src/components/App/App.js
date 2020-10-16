import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import HomeForm from '../HomeForm/HomeForm'
import config from '../../config'
import AddDeal from '../AddDeal/AddDeal'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import DealItemExpanded from '../DealItemExpanded/DealItemExpanded'
import DealItem from '../DealItem/DealItem'
import AllList from '../AllList/AllList'
import WeekForm from '../WeekForm/WeekForm'
import ApiContext from '../../contexts/ApiContext'
import About from '../About/About'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TokenService from '../../services/token-service'



//import './App.css';

class App extends React.Component {
    state = {
      deals: []
    }
  
  static contextType = ApiContext;

  
//   handleAddDeal = deal => {
//       this.setState({
//         deals: [
//             ...this.state.deals,
//             deal
//         ]
//       })
//   }

 
//   handleDeleteDeal = dealId => {
//     this.setState({
//       deals: this.state.deals.filter(deal => deal.id !== dealId)
//     })
//   }

//   filterDay = deals => {
//     //const { deals } = this.context;
//     const date = new Date();
//     const thisDay = date.getDay();

//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
//                         "Friday", "Saturday"];
    
//     return deals.filter(deal => deal.day === weekdays[thisDay])
// }


// filterDeals = filter => {
//     if(filter.toLowerCase() == "price"){
//         this.setState({
//           filter: "price"
//         })
//     }
//     else {
//       this.setState({
//         filter: "distance"
//       })
//     }
// }

// filterWeekDay = (deals, day) => {
//    return deals.filter(deal => deal.day.toLowerCase() === day.toLowerCase())
// }
  
  
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
    // const value = {
    //   deals: this.state.deals,
    //   filter: this.state.filter,
    //   logIn: this.state.logIn,
    //   addDeal: this.handleAddDeal,
    //   deleteDeal: this.handleDeleteDeal,
    //   filterDay: this.filterDay,
    //   filterDeals: this.filterDeals,
    // }
    return (
     
        <div className='App'>
          <Nav />
          <header className='App__header'>
            <h1>
              <Link to='/'>Deals Tracker</Link>
              {' '}
              {/* <FontAwesomeIcon icon='check-double' /> */}
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
