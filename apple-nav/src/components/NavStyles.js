import styled from 'styled-components'

const NavContainer = styled.nav `
  background: #2d2d2dfa;
  color: white;
  height: 45px;
  width: 100%;
  font-size: 17px;
`
const InnerNav = styled.div `
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
`
const SubNav = styled.div `
  height: 135px;
  background: black;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-around
  font-size: 13px;
  font-weight: bold;
  padding: 10px 0;

  div {
    height: 100%;
    cursor: pointer;
    padding-bottom: 20px;
  }

  img {
    height: 75%;
    margin: 5px;
  }

`
export { NavContainer, InnerNav, SubNav }
