import {Brand, Navbar} from '../components';
import {Blog, Features, Footer, Header, Possibility, WhatGpt3} from '../containers';
import styled from 'styled-components';
import GlobalStyle from './global-style';

const AppDiv = styled.div`
  font-size: 1.5em;
  color: palevioletred;

`;

const App = () => {
  return (
    <AppDiv>
      <GlobalStyle/>
      <div className="gradient-bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>
      <Blog/>
      <Footer/>
    </AppDiv>
  )
}

export default App;
