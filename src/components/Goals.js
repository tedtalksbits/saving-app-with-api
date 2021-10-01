import React, { useEffect, useState } from 'react'
import { Container, Wrapper } from './contentWrap';
import { InfoCard, SlantCard } from './Information';
import { AvatarWrapper, Avatar } from './profilePic';
import { Link } from 'react-router-dom';
import loadingImg from "../images/loader.svg";


const Goals = () => {

   useEffect(() => {
      fetchData();
   }, [])

   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const URL = "https://saving-app-api.herokuapp.com/data";


   async function fetchData() {
      const response = await fetch(URL, {
         method: 'GET',
      })
      const result = await response.json();

      console.log(result);
      setItems(result)
      setIsLoading(false)
   }
   return (
      <>
         {/* <h1>goals</h1> */}
         {
            isLoading ?
               <div style={{ display: 'grid', placeItems: 'center' }}>

                  <img src={loadingImg} alt="" />
               </div>

               :

               <Container>

                  <Wrapper style={{ position: 'relative' }}>

                     {items.map(item => (
                        <InfoCard
                           key={item.id}
                           style={{}}
                        >
                           <div className="card__top" style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between', marginBottom: '2rem', flexDirection: "column" }}>

                              <AvatarWrapper>
                                 <Avatar src={item.user_avatar} alt="profile" />
                              </AvatarWrapper>
                              <Link
                                 to={`/information/${item.id} ${item.username}`}
                                 style={{ color: 'white', }}
                              >
                                 {item.username}
                              </Link>
                           </div>

                           <p>{item.goals.goals_description}</p>
                           <h2>{item.goals.goals_deadline}</h2>
                           <h2>${item.goals.goals_total}</h2>
                        </InfoCard>

                     ))}
                     {/* <SlantCard className="floating" style={{ zIndex: '-8' }} /> */}


                  </Wrapper>
               </Container>
         }
      </>
   )
}

export default Goals
