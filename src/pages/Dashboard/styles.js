import styled from 'styled-components';

export const Body = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   justify-content: center;
   background: rgb(221,216,210) ;

`;

export const Container = styled.div`
   margin-top: 20vh;
   width: 40vw;
   height: 60vh;
   border-radius: 5px;
   background: #0158BF;
   box-shadow: 2px 3px 7px rgba(0, 0, 255, 0.7);
   

   img {
       width: 100px;
       height: 80px;
       display: flex;
       margin-left: 9rem;
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
       height: 30px;
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