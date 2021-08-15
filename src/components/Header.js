import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const MobileHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 2.5rem;

   .avatar-icon{
      height: 50px;
      width: 50px;
   }
`
const Greeting = styled.div`
   display: flex;
   flex-wrap: nowrap;
   gap: .3rem;

   h1{
      font-size: 1.8rem;
   }
`

const Header = () => {
   return (
      <nav className="header">
         <MobileHeader>
            <Greeting className="greeting">
               <h1 className="greet">Hello, </h1>
               <h1 className="user">John</h1>
            </Greeting>
            <div className="avatar">
               <Avatar className="avatar-icon" />
            </div>
         </MobileHeader>
      </nav>
   )
}

export default Header;
