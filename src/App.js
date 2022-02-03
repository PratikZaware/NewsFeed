
import './App.css';
// import Navbar from './Components/Navbar.js';

// function based component

// function App() {
//   return (
//     <div className="App">
//       <Navbar></Navbar>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './Components/Navbar.js';
import News from './Components/News.js';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}

  render() {
    return <div>
      <Navbar/>
      <News/>
    </div>;
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;
