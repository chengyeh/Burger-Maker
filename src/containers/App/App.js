import React, { Component } from 'react';

import Layout from '../Layout/Layout';
import BurgerMaker from '../BurgerMaker/BurgerMaker';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout>
      		<BurgerMaker />
      	</Layout>
      </div>
    );
  }
}

export default App;
