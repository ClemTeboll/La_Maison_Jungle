import React from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

const clickAlert = () => {

  alert(`Cette plante requiert ${"peu/modérement/beaucoup"} de ${"lumière/d'arrosage"}`)
}

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </React.Fragment>
  )
}

export default App