import React from 'react';
import List from '../components/List.jsx';
import styled from 'styled-components';

 const Home = () => {
  return (
    <HomeContainer>
      <h1 className="Home-title">Students List</h1>
      <List/>
    </HomeContainer>

  );
}

const HomeContainer = styled.div`

width: 100%;

.Home-title {
  text-align: center;
  margin: 3rem 0;
}
`

export default Home;
