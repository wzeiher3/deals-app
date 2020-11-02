import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'
import './HomeForm.css'

export default class HomeForm extends React.Component {
    static contextType = ApiContext

    
    render(){
        const {deals} = this.context;
        const todaysDeals = this.context.filterDay(deals)
        return (
            <div className="HomePage">
                    
                <h2>Your Deals for Today!</h2> 
                {todaysDeals.map(deal => 
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
        
        )
    }
}