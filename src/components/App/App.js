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



//import './App.css';

class App extends React.Component {
  
  state = {
    deals : [], 
    day: "", 
    filter: "price"
  };

  componentDidMount(){
   
      fetch(`${config.API_ENDPOINT}/deals`)
      .then((dealsRes) => {
        if(!dealsRes.ok)
          return dealsRes.json().then(e => Promise.reject(e))

        return dealsRes.json()
      })
      .then((deals) => {
        this.setState({
          deals: deals,
        })
      })
      .catch(error => {
        console.log({error})
      })
  }
  
  handleAddDeal = deal => {
      this.setState({
        deals: [
            ...this.state.deals,
            deal
        ]
      })
  }

  handleDeleteDeal = dealId => {
    this.setState({
      deals: this.state.deals.filter(deal => deal.id !== dealId)
    })
  }

  filterDay = deals => {
    //const { deals } = this.context;
    const date = new Date();
    const thisDay = date.getDay();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                        "Friday", "Saturday"];
    
    return deals.filter(deal => deal.day === weekdays[thisDay])
}


filterDeals = filter => {
    if(filter.toLowerCase() == "price"){
        this.setState({
          filter: "price"
        })
    }
    else {
      this.setState({
        filter: "distance"
      })
    }
}

filterWeekDay = (deals, day) => {
   return deals.filter(deal => deal.day.toLowerCase() === day.toLowerCase())
}
  
  
  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path='/'
          component={HomeForm}
        />
        <Route
          path='/add-deal'
          component={AddDeal}
        />
        <Route
          path='/login'
          component={LoginForm}
        />
        <Route
          path='/register'
          component={RegistrationForm}
        />
        <Route
          path='/deals/:dealId'
          component={DealItemExpanded}
        />
        <Route
          exact
          path='/deals'
          component={AllList}
        />
        <Route
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
  
  
  
  render(){
    const value = {
      deals: this.state.deals,
      filter: this.state.filter,
      addDeal: this.handleAddDeal,
      deleteDeal: this.handleDeleteDeal,
      filterDay: this.filterDay,
      filterDeals: this.filterDeals,
    }
    return (
      <ApiContext.Provider value={value}>
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
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
