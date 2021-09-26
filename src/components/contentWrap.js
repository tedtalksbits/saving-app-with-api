import styled from "styled-components"

export const Wrapper = styled.div`
   
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;

   
   
   

`
export const Container = styled.div`

   display: grid;
   grid-template-columns: 1fr min(180ch, 100%) 1fr;
   
   > *{
   grid-column: 2;
   }
   .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }
`