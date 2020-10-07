import React from 'react'
import ApiContext from '../../contexts/ApiContext';
import config from '../../config'
import {Link} from 'react-router-dom'

export default class DealItem extends React.Component{
static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const dealId = this.props.id

    fetch(`${config.API_ENDPOINT}/deals/${dealId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        
        return res.json()
      })
      .then(() => {
        this.context.deletedeal(dealId)
        this.props.onDeletedeal(dealId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
      const { day, distance, price, name, id, content } = this.props;
      return (
          <div className="DealObj">
                <h2 className="deal_title">
                   <Link to={`/deals/${id}`}>  
                     {name}
                    </Link>
                </h2>
      <p>{content}, {price}</p>
                    
          </div>
      )
  }
}