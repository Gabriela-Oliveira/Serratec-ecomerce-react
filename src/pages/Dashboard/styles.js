import styled from 'styled-components';

export const Body = styled.div`
   display: flex;
   width: 100vw;
   height: 91.6vh;
   justify-content: center;
   align-items: center;
   background: rgb(221,216,210) ;
   

`;

export const Container = styled.div`
   width: 50vw;
   height: 60vh;
   border-radius: 5px;
   background: #0158BF;
   box-shadow: 2px 3px 7px rgba(0, 0, 255, 0.7);
   

   img {
       width: 100px;
       height: 80px;
       display: flex;
       margin-left: auto;
       margin-right: auto;
   }

   ul.nav.nav-pills, a {
       margin-top: 12px;
       display: flex;
       justify-content: center;
       color: white;
   }

   h3 {
       margin-top: 20px;
       color: white;
       text-align: center;
   }

   div.tab-content a {
       margin-top: 40px;
       background: #4284fb;
       border-radius: 12px;
       transition: .3s;
       height: 5vh;
       display: flex;
       align-items: center;

       & + a {
           margin-top: 20px;
       }

       &:hover {
           text-decoration: none;
           background: rgba(255, 255, 251, .5);
       }
   }

`;

