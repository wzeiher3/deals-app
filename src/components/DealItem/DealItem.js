import React from 'react'
import ApiContext from '../../contexts/ApiContext'
import config from '../../config'
import {Link} from 'react-router-dom'
import './DealItem.css'
import TokenService from '../../services/token-service'
import './DealItem.css'

export default class DealItem extends React.Component{
static contextType = ApiContext

  handleClickDelete = e => {
    e.preventDefault()
    const dealId = this.props.id

    fetch(`${config.API_ENDPOINT}/deals/${dealId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        
      })
      .then(() => {
        this.context.deleteDeal(dealId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
      const { price, name, id, content } = this.props;
      return (
          <div className="DealObj">
            <div className="topLine">
                <h3 className="deal_title">
                   <Link to={`/deals/${id}`}>  
                     {name}
                    </Link>
                </h3>
          <h4>${(price/100)}</h4>
      

<div className="icon-trash" onClick={e => this.handleClickDelete(e)}>
    <div className="trash-lid" ></div>
    <div className="trash-container" ></div>
    <div className="trash-line-1"></div>
    <div className="trash-line-2"></div>
    <div className="trash-line-3"></div>
  </div>
          </div>
          <p>{content}</p>
          </div>
      )
  }
}