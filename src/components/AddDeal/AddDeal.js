import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import config from '../../config'

export default class AddDeal extends React.Component{
    
    static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newDay = new Date();
    const todayNum = newDay.getDay();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
                        "Friday", "Saturday"];
    const today = weekdays[todayNum]
    const newDeal = {
      name: e.target['deal-name'].value,
      content: e.target['deal-content'].value,
      price: e.target['deal-price'].value,
      distance: e.target['deal-distance'].value,
      day: today,
    }

    console.log(newDeal)

    fetch(`${config.API_ENDPOINT}/deals`, {
      method: 'POST',
      headers: {
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
                 <label htmlFor="deal-price-input">
                     Price
                 </label>
                 <input type="number" id='deal-price-input' name='deal-price'/>
             </div>
             <div className="field">
                 <label htmlFor="deal-distance-input">
                     Distance from Home (miles)
                 </label>
                 <input type="number" id='deal-distance-input' name='deal-distance'/>
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