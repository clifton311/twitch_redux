import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';


const PageOne = () => {
  return <div>
    Page One
    <button>CLick Me</button>
    </div>
}

const PageTwo = () => {
  return <div>Page Two</div>
}

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={PageOne} />
              <Route path="/pagetwo" exact component={PageTwo}/>
            </div>
         </BrowserRouter>
      </div>
    )
  }
}

export default App

