import React from 'react';
import styled from 'styled-components';


const InfoWrapper = styled.div`
   position: relative;
   margin-top: 7rem;

   @media screen and (min-width: 992px){
    
      margin-top: 11rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`
const SlantCard = styled.div`
   background:linear-gradient(90deg, #e100ff 0%,#4e00ff 100% );
   height: 240px;
   width: 87%;
   border-radius: 1.5rem;
   position: absolute;
   transform: rotate(-10deg);
   bottom: 0;
   transform-origin: top left;

   @media screen and (min-width: 559px){
      height: 500px;
      width: 500px;
      border-radius: 50%;
      top: -50px;
      right: 34%;
   }

`
const InfoCard = styled.div`
   background-color: rgba(255,255,255, .14);
   backdrop-filter: blur(9px);
   height: 240px;
   width: 100%;
   border-radius: 1.5rem;
   position: relative;
   bottom: 0;
   border: 3px rgba(255,255,255, 0.025) solid;
   padding: 2rem;
   margin: auto;

   @media screen and (min-width: 666px){
      height: 290px;
      width: 600px;
   }
`
const InfoDetails = styled.div`
   display: flex;
   gap: 3rem;
   align-items: center;

   .spend{
     display: flex;
     flex-direction: column;
     gap: .2rem;

     p{
        color: rgba(255, 255, 255, .8);
     }
     span{
        font-weight: bold;
        font-size: 1.3rem
     }

   }
`
const InfoBalance = styled.div`
   margin-bottom: 1.2rem;
`

const Information = () => {


   const URL = "https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States";

   const fetchPortfolio = async () => {
      const response = await fetch(URL, {
         method: 'GET',

         headers: {
            "Access-Control-Allow-Origin": "*"
         }
      })
      // const result = await response.json();

      console.log(response);
   }

   fetchPortfolio();
   return (
      <div className="information">
         <InfoWrapper>
            <SlantCard className="floating" />
            <InfoCard>
               <InfoBalance className="InfoBalance">
                  <p>My balance</p>
                  <h1>$4000</h1>
               </InfoBalance>
               <InfoDetails className="InfoDetails">
                  <div className="spend">
                     <p>Spend</p>
                     <span className="spent">
                        $500
                     </span>
                  </div>
                  <div className="spend">
                     <p>Profit</p>
                     <span className="spent">
                        $100
                     </span>
                  </div>
               </InfoDetails>

            </InfoCard>
         </InfoWrapper>

      </div>
   )
}

export default Information
