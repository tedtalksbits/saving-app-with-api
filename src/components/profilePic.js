import styled from "styled-components"
const rand1 = Math.floor(Math.random() * 255);
const rand2 = Math.floor(Math.random() * 255);
const rand3 = Math.floor(Math.random() * 255);
export const AvatarWrapper = styled.div`
   width: 5rem;
   height: 5rem;
   /* background: rgb(${rand1}, ${rand2}, ${rand3}); */
   background: linear-gradient(217deg, #0dfbbe, #a50dfb, #fbac0d);
   background-size: 600% 600%;
   -webkit-animation: gradient-animate 3s ease infinite;
   animation: gradient-animate 13s ease infinite;
   overflow: hidden;
   border-radius: 50%;
   margin: 0.5rem 0;

   @keyframes gradient-animate {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}



`
export const Avatar = styled.img`
   
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 50%;

`