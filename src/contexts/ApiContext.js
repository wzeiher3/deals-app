import React from 'react'

export default React.createContext({
    deals: [], 
    filter: "",
    addDeal: () => {},
    deleteDeal: () => {}, 
    filterDay: () => {},
    filterDeals: () => {},
})