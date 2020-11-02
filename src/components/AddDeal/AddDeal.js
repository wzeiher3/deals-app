import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import config from '../../config'
import ValidationError from '../../ValidationError'
import TokenService from '../../services/token-service'
import './AddDeal.css'

export default class AddDeal extends React.Component {
    
  static contextType = ApiContext

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false
      },
      price: {
        value: '',
        touched: false
      },
      distance: {
        value: '',
        touched: false
      }, 
      day: {
        value: '',
        touched: false
      }, 
      content: {
        value: '',
        touched: false
      }
    }
  }
  
  

  //Updates values from page into state
  updateName(name) {
    this.setState({ name: { value: name, touched: true } })
  }
  
  updatePrice(price) {
    this.setState({ price: { value: price, touched: true } })
  }
  
  updateDistance(distance) {
    this.setState({ distance: { value: distance, touched: true } })
  }
  
  updateDay(day) {
    this.setState({ day: { value: day, touched: true } })
  }

  updateContent(content) {
    this.setState({ content: { value: content, touched: true } })
  }


  //handles the submit event for the form
  handleSubmit = e => {
    e.preventDefault()
    let today = ""
    if(!e.target['deal-day'].value){
      const newDay = new Date();
      const todayNum = newDay.getDay()
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      today = weekdays[todayNum]
    }
    else{
      const dayInput = e.target['deal-day'].value.toLowerCase()
      today = dayInput.charAt(0).toUpperCase() + dayInput.slice(1)
    }

   
    
    const newDeal = {
      name: e.target['deal-name'].value,
      content: e.target['deal-content'].value,
      price: (e.target['deal-price'].value * 100),
      distance: e.target['deal-distance'].value,
      day: today,
    }

    
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
        this.props.history.push(`/deals`)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  //beginning of validation 
  validateName() {
    const name= this.state.name.value.trim()

    if(name.length === 0)
      return "You must type the name of the deal"
  }

  validatePrice(){
    const price = this.state.price.value;

    if(price < 0)
        return "enter a valid price"
  }

  validateDistance(){
    const distance = this.state.distance.value;

    if(distance < 0)
        return "enter a valid distance"
  }


  render(){

      const nameError = this.validateName()
      const priceError = this.validatePrice()
      const distanceError = this.validateDistance()
      
      return (
         <form className="AddDeal" onSubmit={e => this.handleSubmit(e)}>
             <h2>Create A New Deal</h2>
             <div className="field">
                 <label htmlFor="deal-name-input">
                     Name
                 </label>
                 <input type="text" id='deal-name-input' name='deal-name' 
                        onChange={e => this.updateName(e.target.value)}/>
                        {this.state.name.touched && <ValidationError message={nameError} />}
             </div>
             <div className="field">
                 <label htmlFor="deal-price-input" step=".01"> 
                     Price
                 </label>
                 <input type="number" id='deal-price-input' name='deal-price' step='.01'
                        onChange={e => this.updatePrice(e.target.value)}/>
                        {this.state.price.touched && <ValidationError message={priceError} />} 
             </div>
             <div className="field">
                 <label htmlFor="deal-distance-input">
                     Distance from Home (miles)
                 </label>
                 <input type="number" id='deal-distance-input' name='deal-distance' 
                        onChange={e => this.updateDistance(e.target.value)}/>
                        {this.state.distance.touched && <ValidationError message={distanceError} />}
             </div>
             <div className="field">
                 <label htmlFor="deal-day-input">
                     Day of the Week
                 </label>
                 <select id='deal-day-input' name='deal-day' onChange={e => this.updateDay(e.target.value)}>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
             </div>
             <div className="field">
                 <label htmlFor="deal-content-input">
                     Description (optional)
                 </label>
                 <input type="text" id='deal-content-input' name='deal-content'
                          onChange={e => this.updateContent(e.target.value)}/>
             </div>
             <div>
                <button type='submit' className='buttons' disabled={
                    this.validateName() ||
                    this.validateDistance() || 
                    this.validatePrice()
                }>
                    Add Deal
                </button>
            </div>    
         </form>

      )
  }
}