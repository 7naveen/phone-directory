import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
      }
    ];

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
@@ -33,7 +35,6 @@ class App extends Component {
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}
export default App;