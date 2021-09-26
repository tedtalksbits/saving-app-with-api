import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadingImg from "../images/loader.svg"

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
export const SlantCard = styled.div`
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
export const InfoCard = styled.div`
   background-color: rgba(255,255,255, .14);
   backdrop-filter: blur(25px);
   height: 240px;
   width: 100%;
   border-radius: 1.5rem;
   position: relative;
   bottom: 0;
   border: 1px rgba(255,255,255, 0.25) solid;
   padding: 2rem;
   margin: 0 auto 3rem;


   /* img {
   width: 100%;
   height: 200px;
   object-fit:cover;
   } */



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

const Information = ({ match }) => {

   // console.log(match.params);

   const id = match.params.id;
   // const userName = match.params.name;



   useEffect(() => {
      fetchData();
   }, [])

   const [items, setItems] = useState([])
   const [goals, setGoals] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const URL = `https://saving-app-api.herokuapp.com/data/${id}`;


   async function fetchData() {
      const response = await fetch(URL, {
         method: 'GET',
      })
      const result = await response.json();

      // console.log(result.goals);
      setItems(result)
      setGoals(result.goals)
      setIsLoading(false)
   }

   // covert to currency
   // let currency = new Intl.NumberFormat('en-US', {
   //    style: 'currency', currency: 'USD'
   // });


   return (
      <div className="information">
         <InfoWrapper>
            <SlantCard className="floating" />
            <InfoCard>
               {isLoading ?
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                     <img src={loadingImg} alt="" />
                  </div>
                  :
                  <>
                     <InfoBalance className="InfoBalance">
                        <p>{items.username}</p>
                        <h1>{
                           new Intl.NumberFormat('en-US', {
                              style: 'currency', currency: 'USD'
                           }).format(goals.goals_total)

                        }</h1>
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
                  </>
               }

            </InfoCard>
         </InfoWrapper>

      </div>
   )
}

export default Information
