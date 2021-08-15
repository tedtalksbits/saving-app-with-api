import React from 'react'
import styled, { css } from 'styled-components/macro';
import { cardData } from '../data';


const CardsGroup = styled.div`
   max-width: 1150px;
   margin: 0 auto 2.5rem;
`
const Card = styled.div`
   height: 100px;
   width: 100px;
   border-radius: 1.5rem;
   scroll-snap-align: start;
   flex-shrink: 0;
   overflow: hidden;
   @media screen and (min-width: 768px){
     width: 150px;
     height: 150px;
   }
   
`
const Container = styled.div`
  display: flex;
  gap:.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 768px){
     
  }
 
`
const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`
const Cards = () => {
   return (
      <CardsGroup className="card">
         <Container>
            {cardData.map((card, index) => {
               return (
                  <Card key={index} >
                     <CardImage src={card.image} css={`background: ${card.bg};`} />
                  </Card>
               )
            })}
         </Container>
      </CardsGroup>
   )
}

export default Cards;
