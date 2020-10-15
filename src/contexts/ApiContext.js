import React from 'react'
import TokenService from '../services/token-service'
import config from '../config'

const ApiContext = React.createContext({
    deals: [], 
    filter: "",
    logIn: false,
    addDeal: () => {},
    deleteDeal: () => {}, 
    filterDay: () => {},
    filterDeals: () => {},
    fetchDeals: () => {}, 
    setDeals: () => {},
})

export default ApiContext

export class ApiContextProvider extends React.Component {
    state = {
        filter: "", 
        day: "", 
        deals: [],
        logIn: TokenService.hasAuthToken(),
      }



    componentDidMount(){
        this.fetchDeals();
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

  setDeals = deals => {
      console.log("Set Deals: ", deals)
    this.setState({
          deals: [...deals]
      })
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

  fetchDeals = () => {
    this.setState({ 
      logIn: TokenService.hasAuthToken()
    })

    if(!TokenService.hasAuthToken()){
       this.setState({
          deals: []
       })
    }
    else  fetch(`${config.API_ENDPOINT}/deals`, {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        
      },
    })
    .then((dealsRes) => {
      if(!dealsRes.ok)
        return dealsRes.json().then(e => Promise.reject(e))

      return dealsRes.json()
    })
    .then((deals) => {
      // this.setState({
      //   deals: deals
      // })

      console.log(deals)
      this.setState({
        deals: deals
      })
    })
    .catch(error => {
      console.log({error})
    })
  }
    

    render(){
        const value = {
            deals: this.state.deals,
            filter: this.state.filter,
            logIn: this.state.logIn,
            addDeal: this.handleAddDeal,
            deleteDeal: this.handleDeleteDeal,
            filterDay: this.filterDay,
            filterDeals: this.filterDeals,
            setDeals: this.setDeals,
            fetchDeals: this.fetchDeals,
          }
          return (
              <ApiContext.Provider value={value}>
                  {this.props.children}
              </ApiContext.Provider>
          )
    }
}