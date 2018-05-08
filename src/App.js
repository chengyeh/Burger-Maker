import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerMaker from './containers/BurgerMaker/BurgerMaker';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        	<Layout>
        		<Route path='/' exact component={BurgerMaker} />
        		<Route path='/checkout' component={Checkout} />
        	</Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;