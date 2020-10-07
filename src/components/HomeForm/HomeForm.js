import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'

export default class HomeForm extends React.Component {
    static contextType = ApiContext;

    filterDay(){
        const { deals } = this.context;
        const date = new Date();
        const thisDay = date.getDay();

        const weekdays = ["Sunday", "Monday", "tuesday", "wednesday", "thursday", 
                            "friday", "saturday"];
        
        return deals.filter(deal => deal.day === weekdays[thisDay])
    }
    
    render(){
        const todaysDeals = this.filterDay();
        return (
            <div className="HomePage">
                <h2>Your Deals for Today!</h2> 
                {todaysDeals.map(deal => 
                    <DealItem 
                        id = {deal.id}
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