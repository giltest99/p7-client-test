import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #424242;
    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    li {
        list-style: none;
        margin: 0 1rem;
    }
`;

const StyledLink = styled(Link)`
    color: #F1F1F1;
    text-decoration: none;
    font-size: 1.5rem;
    
    &:hover {
        color: teal;
    }
`;

export default function Navigation() {
  return (
      <>
        <Nav className='w3-container'>
            <ul>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                    <StyledLink to='/page2'>Page 2</StyledLink>
                </li>
                <li>
                    <StyledLink to='/page3'>Page 3</StyledLink>
                </li>
            </ul>
        </Nav>

        <Outlet />
      </>
    
  )
}
