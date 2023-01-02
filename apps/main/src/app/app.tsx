import {Navbar} from '../components';
import {Header} from '../containers';
import GlobalStyle from './global-style';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <div className="gradient-bg">
        <Navbar/>
        <Header/>
      </div>
      {/*<Brand/>*/}
      {/*<WhatGpt3/>*/}
      {/*<Features/>*/}
      {/*<Possibility/>*/}
      {/*<Blog/>*/}
      {/*<Footer/>*/}
    </div>
  )
}

export default App;
