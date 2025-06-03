'use client'
import React, { createContext, useReducer } from 'react'

export let CartContext=createContext()

export let reducer=(state,action)=>{
    switch(action.type)
    {
        case 'add':return {cart:[...state.cart,action.payload]}
        case 'remove':return {cart:state.cart.filter((a)=>a.id!==action.payload.id)}
    }
}


 function ContextProvider({children}) {
    let [state,dispatch]=useReducer(reducer,{cart:[]})

  return (
    <CartContext.Provider value={{state,dispatch}}>
     {children} 
    </CartContext.Provider>
  )
}


export default ContextProvider
