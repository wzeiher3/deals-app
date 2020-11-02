import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import './DealItemExpanded.css'

export default class DealItemExpanded extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext
      
      
      render() {
        const { deals } = this.context
        const { dealId } = this.props.match.params
        
    
        const deal = deals.find(deal => deal.id == dealId) 
        
        return (
          <div className='DealExpanded'>
            <h3 className="dealItemName">{deal.name}</h3>
            <h5 className="dealItemPrice">${(deal.price/100)}</h5>
            <h5 className="dealItemDay">{deal.day}</h5>
            <h5 className="dealItemDistance">{deal.distance} miles away from home</h5>
            <p>{deal.content}</p>
          </div>
        )
      }

}