import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'


export default class AllList extends React.Component{
    static contextType = ApiContext;
    
  //  filterList(){
  //   const {deals} = this.context;  
  //   if(document.getElementById("filter").value === "distance") {
  //         deals.sort((a, b) => (a.distance > b.distance) ? 1: -1)  
  //   }
  //   else{
  //       deals.sort((a, b) => (a.price > b.price) ? 1: -1)
  //   }

  //   return deals;
  // }

 
    render(){  
      const {deals} = this.context;
      const dealsList = [...deals]
      return (
        <div className="All">
            <h2>All Deals</h2>
            <label htmlFor="filter" className="labels">Filter: </label>
            <select className="filter" name="filter" defaultValue="price" >
                <option value="price">Price</option>            
                <option value="distance">Distance</option>                                              
          </select>
            <div className="AllDealsList">
                {dealsList.map(deal => 
                    <DealItem 
                        id = {deal.id}
                        key = {deal.id}
                        name = {deal.name}
                        price = {deal.price}
                        distance = {deal.distance}
                        day = {deal.day}
                        content = {deal.content}
                    />
                )}
            </div>
        </div>
      )
    }

      
}