import './App.css';
// import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import{BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => { // functio App(){} mehemath function hadanna puluwan
  // const name="Muthumali";
  return (
   <Router>
      <div className="App">
      {/* <h1>Hello world</h1>
      <h2>Hello {2 * 3}</h2>
      <h3>Hey {2 + 4 == 6 ? name : "User"}</h3> */}
      {/* <HomePage/>  */}
      {/* <AboutPage/> */}
     
      {/* <Header title="Welcome to users" sub="our joker generator " /> */}
     
    </div>
    <Route path = "/" exact component={HomePage}/>
    <Route path = "/about" component={AboutPage}/>
   </Router>
  );
}
//class based component // class based component hadaddi aniwa (import React from 'react';) import kragana ona

// class App extends React.Component{
//   render(){
//     return <h1>Hello world</h1>
         

    
//   }
// }

export default App;
