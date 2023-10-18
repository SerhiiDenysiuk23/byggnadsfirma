import React from 'react';
import Header from "./pages/common/Header";
import Content from "./pages/common/Content";
import Footer from "./pages/common/Footer";

function App() {
  return (
    <div className="App">
      <img className="bg-image" src="./background.png" alt=""/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
