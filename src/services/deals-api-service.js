import config from '../config'
import TokenService from '../services/token-service'

const DealApiService = {
  // getDeals() {
  //   return fetch(`${config.API_ENDPOINT}/deals`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  getDeal(dealId) {
    return fetch(`${config.API_ENDPOINT}/deals/${dealId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`, 
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postDeal(dealId, name, content, distance, price, day) {
    return fetch(`${config.API_ENDPOINT}/deals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        deal_id: dealId,
        name, 
        content, 
        distance, 
        price, 
        day
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default DealApiService
