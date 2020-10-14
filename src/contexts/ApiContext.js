import React from 'react'

const ApiContext = React.createContext({
    deals: [], 
    filter: "",
    logIn: false,
    addDeal: () => {},
    deleteDeal: () => {}, 
    filterDay: () => {},
    filterDeals: () => {},
    togglelogIn: () => {}, 
    setDeals: () => {}
})

export default ApiContext

export class ApiContextProvider extends React.Component {
    state = {
        filter: "", 
        day: "", 
        deals: [],
        logIn: false
      }

    togglelogIn = () => {
        console.log("toggled", this.state.logIn)
        this.setState({
            logIn: !this.state.logIn
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
    

    render(){
        const value = {
            deals: this.state.deals,
            filter: this.state.filter,
            logIn: this.state.logIn,
            addDeal: this.handleAddDeal,
            deleteDeal: this.handleDeleteDeal,
            filterDay: this.filterDay,
            filterDeals: this.filterDeals,
            toggleLogIn: this.togglelogIn, 
            setDeals: this.setDeals
          }
          return (
              <ApiContext.Provider value={value}>
                  {this.props.children}
              </ApiContext.Provider>
          )
    }
}