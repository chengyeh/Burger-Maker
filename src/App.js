import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import BurgerMaker from './containers/BurgerMaker/BurgerMaker';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout>
      		<BurgerMaker />
      		<Checkout />
      	</Layout>
      </div>
    );
  }
}

export default App;
