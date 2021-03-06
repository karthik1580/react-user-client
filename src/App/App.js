import React, {Component} from 'react';
import Input from '../_Controls/Input';
import Footer from '../_Component/Footer';
import Header from '../_Component/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container mt-4">
          <div className="row align-items-start">
            <div className="col-6"><Input/></div>
            <div className="col-6">asdsad</div>
          </div>
            {/* <h1>Hello Style!</h1>
            <p>Add a little style!.</p> */}
        </div>
            <Footer/>
      </>
    );    
  }
}
export default App;