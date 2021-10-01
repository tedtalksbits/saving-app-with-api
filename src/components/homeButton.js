import React from 'react'
import styled from 'styled-components'

// const OuterBox = styled.div`
//    width: 10rem;
//    height: 10rem;
//    background: ${props => props.outerBg};
//    border-radius: 8px;
//    display: grid;
//    place-items: center;

// `
const InnerBox = styled.div`
   width: 4rem;
   height: 4rem;
   background: ${props => props.innerBg};
   border-radius: 1rem;
   display: grid;
   place-items: center;
   border: 1px solid ${props => props.innerBg};
   transition: all ease-in-out .2s;
   :hover{
      background: rgba(255, 255, 255, .50);
      width: 4.5rem;
      height: 4.5rem;
   }

`
const Icon = styled.div`
   i {

     
      color: white;
      font-size: 2.5rem;
   }
`
const IconBox = ({ icon, innerBg, outerBg }) => {
   return (

      <InnerBox innerBg={innerBg}>
         <Icon >
            {icon}
         </Icon>
      </InnerBox>

   )
}

export default IconBox
