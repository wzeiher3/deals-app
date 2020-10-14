import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'
import './DealItemExpanded.css'

export default class DealItemExpanded extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext
      
      findDeal(deals, dealId){
          const newDeal = deals.find(deal => deal.id == dealId)
          console.log(newDeal)
            return newDeal
      }
      
      
      render() {
        const { deals } = this.context
        const { dealId } = this.props.match.params
        //console.log(dealId)
        console.log(deals)
        console.log(dealId)
        const deal = this.findDeal(deals, dealId) 
        console.log(deal)
        return (
          <div className='DealExpanded'>
            <h3 className="dealItemName">{deal.name}</h3>
            <h5 className="dealItemPrice">${deal.price}.00</h5>
            <h5 className="dealItemDay">{deal.day}</h5>
            <h5 className="dealItemDistance">{deal.distance} miles away from home</h5>
            <p>{deal.content}</p>
          </div>
        )
      }

}