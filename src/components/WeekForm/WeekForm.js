import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import DealItem from '../DealItem/DealItem'


export default class WeekForm extends React.Component{
    static contextType = ApiContext;
  
    
    
    render(){  
      const {deals} = this.context; 
      let sunday = deals.filter(deal => deal.day.toLowerCase() == "sunday")
      let monday = deals.filter(deal => deal.day.toLowerCase() == "monday")
      let tuesday = deals.filter(deal => deal.day.toLowerCase() == "tuesday")
      let wednesday = deals.filter(deal => deal.day.toLowerCase() == "wednesday")
      let thursday = deals.filter(deal => deal.day.toLowerCase() == "thursday")
      let friday = deals.filter(deal => deal.day.toLowerCase() == "friday")
      let saturday = deals.filter(deal => deal.day.toLowerCase() == "saturday")
      
      let allDays = [];
      deals.map(deal => allDays.push(deal.day.toLowerCase()))
      console.log(allDays)

      return (
          <div className="MyWeekForm">
              
              <div className="Sundays">
                  <h2>Sunday</h2>
                  {sunday && sunday.map(deal => 
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
              <br/>
              <div className="Mondays">
                  <h2>Monday</h2>
                  {monday && monday.map(deal => 
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
              <br/>

              <div className="Tuesdays">
                  <h2>Tuesday</h2>
                  {tuesday && tuesday.map(deal => 
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
              <br/>

              <div className="Wednesdays">
                  <h2>Wednesday</h2>
                  {wednesday && wednesday.map(deal => 
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
              <br/>

              <div className="Thursdays">
                  <h2>Thursday</h2>
                  {thursday && thursday.map(deal => 
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
              <br/>

              <div className="Fridays">
                  <h2>Friday</h2>
                  {friday && friday.map(deal => 
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
              <br/>

              <div className="Saturdays">
                  <h2>Saturday</h2>
                  {saturday && saturday.map(deal => 
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
              <br/>

          </div>
      )
    }

      
}