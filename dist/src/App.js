import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './assets/Header'
import Footer from './assets/Footer'
import Series from './Screens/Series'
import Movies from './Screens/Movies'
import Content from './assets/Content'


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={Content} exact />
        <Route path='/Screens/Series.js' component={Series} exact />
        <Route path='/Screens/Movies.js' component={Movies} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
