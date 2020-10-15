import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import config from '../../config'
import TokenService from '../../services/token-service';
import './AddDeal.css'

export default class AddDeal extends React.Component {
    
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    let today = ""
    if(!e.target['deal-day'].value){
      const newDay = new Date();
      const todayNum = newDay.getDay();
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      today = weekdays[todayNum]
    }
    else{
      const dayInput = e.target['deal-day'].value.toLowerCase();
      today = dayInput.charAt(0).toUpperCase() + dayInput.slice(1)
    }

    const newDeal = {
      name: e.target['deal-name'].value,
      content: e.target['deal-content'].value,
      price: e.target['deal-price'].value,
      distance: e.target['deal-distance'].value,
      day: today,
    }

    console.log(newDeal)
    console.log(TokenService.getAuthToken())
    fetch(`${config.API_ENDPOINT}/deals`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDeal),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(deal => {
        this.context.addDeal(deal)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
      
      return (
         <form className="AddDeal" onSubmit={e => this.handleSubmit(e)}>
             <h2>Create A New Deal</h2>
             <div className="field">
                 <label htmlFor="deal-name-input">
                     Name
                 </label>
                 <input type="text" id='deal-name-input' name='deal-name'/>
             </div>
             <div className="field">
                 <label htmlFor="deal-price-input" step=".01"> 
                     Price
                 </label>
                 <input type="number" id='deal-price-input' name='deal-price' step=".01"/>
             </div>
             <div className="field">
                 <label htmlFor="deal-distance-input">
                     Distance from Home (miles)
                 </label>
                 <input type="number" id='deal-distance-input' name='deal-distance' step=".01"/>
             </div>
             <div className="field">
                 <label htmlFor="deal-day-input">
                     Day of the Week
                 </label>
                 <input type="text" id='deal-day-input' name='deal-day'/>
             </div>
             <div className="field">
                 <label htmlFor="deal-content-input">
                     Description (optional)
                 </label>
                 <input type="text" id='deal-content-input' name='deal-content'/>
             </div>
             <div className='buttons'>
                <button type='submit'>
                    Add Deal
                </button>
            </div>    
         </form>

      )
  }
}