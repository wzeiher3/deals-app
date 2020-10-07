import React from 'react'

export default React.createContext({
    deals: [], 
    addDeal: () => {},
    deleteDeal: () => {}, 
    filterDay: () => {},
    findDeal: () => {},
})