import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'

export default class DealItemExpanded extends React.Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }
      static contextType = ApiContext
      
      findDeal(deals, dealId){
          const newDeal = deals.find(deal => deal.id === dealId)
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
          <section className='DealExpanded'>
            <p>testing</p>
          </section>
        )
      }

}