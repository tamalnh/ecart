import React, {Component} from 'react';  
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAllProducts } from '../store/action/product.action'

import Header from './header/header';
import Products from './products/products'

import './App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){ 
    this.props.getAllProducts()
  // axios.get(`https://depot.mikado-themes.com/wp-json/wp/v2/product`)
  // .then(res => {
  //   console.log(res)
  // })
  // .then(data => {
  //   console.log(data)
  // })
  }

  render() { 
    return ( 
      <div id="app">
          <Header />
          <Products />
      </div>
     );
  }
}
 
export default connect(null, {getAllProducts})(App);