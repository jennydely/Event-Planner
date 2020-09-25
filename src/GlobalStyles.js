import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--grey-main);
    font-family: sans-serif;
    line-height: 1.4;
    height: 100vh;
    max-width: 370px;
    color: var(--lightyellow-90);
    overflow: hidden;
      }
 
  h1 {
    font-size: 140%;
    margin:0;
    margin-left: 7px;
    align-self:center;
  }

  h2 {
    font-size: 130%;
    margin:0;
  }

  h3 {
    font-size: 112,5%;
    margin:0;
  }
  header {
    margin:5px;
    grid-row: 1;
    display: flex;
    flex-direction: row;
    max-width:365px;
    align-items:flex-end;
    justify-content:space-between;
    }

  main {
    grid-row: 2;
    margin:3px;
    overflow-y:scroll;
    scrollbar-width: none;
    width: 365px;    
   }

   &&
  ::-webkit-scrollbar {
    display: none;
  }

  footer {
    grid-row: 3;
    position:sticky;
    display:flex;
    justify-content:space-evenly;
  }

  button{
    display: inline-block; 
    min-width:fit-content;
    min-height:fit-content;
    margin: 3px 4px;
    padding: 11px;
    border: none;
    background:none;
    color: var(--lightyellow-90);
    font-size: 130%; 
    text-align: center; 
 }
 a {
  margin: 3px 4px;
    padding: 11px;
 }

  select {
  min-width:fit-content;
  font-size: 140%;  
  padding: 4px 25px 0px 4px;
  margin-top:3px;
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  color: var(--lightyellow-90);
  min-height: 44px;
  justify-content: center;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FDE6A7%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(
      to bottom,
      rgb(96, 99, 104) 20%,
      rgba(96, 99, 104) 100%
    );
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 4px top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 50%;
  }

  :root {
  /* font-colors */
   --lightyellow-main:rgb(253, 230, 167);
   --lightyellow-90:rgba(253, 230, 167,0.9);

   --sandyellow-main:rgb(187, 148, 87);

  /* background-colors */
    --lightbrown-main: rgb(188,84,10);
    --lightbrown-70: rgba(188,84,10,0.70);
    --lightbrown-40: rgba(188,84,10,0.40);

    --darkbrown-main: rgb(67,40,24);
    --darkbrown-70: rgba(67,40,24,0.70);
    --darkbrown-40: rgba(67,40,24,0.40);

    --yellow-main: rgb(248,149,17);
    --yellow-70: rgba(248,149,17,0.70);
    --yellow-40: rgba(248,149,17,0.40);

    --blue-main: rgb(1,87,155);
    --blue-70: rgba(1,87,155,0.70);
    --blue-40: rgba(1,87,155,0.40);

    --lightgrey-main: rgb(96,99,104);
    --lightgrey-80: rgb(96,99,104,0.80);
    --lightgrey-70: rgba(96,99,104,0.70);
    --lightgrey-40: rgba(96,99,104,0.40);

    --darkgrey-main: rgb(49,42,42);
    --darkgrey-80: rgba(49,42,42,0.9);
    --darkgrey-75: rgba(49,42,42,0.75);
    --darkgrey-45: rgba(49,42,42,0.45);

    --grey-main:rgb(68,69,72);
  
    --black-main: rgb(0,0,0);
    --black-80: rgb(0,0,0,0.8);
    --black-75: rgb(0,0,0,0.75);

    --red-main: rgba(246, 71, 71);

    --darkred-main:rgb(111, 29, 27);
    --darkred-75:rgba(111, 29, 27, 0.75);

    --border-darkgrey: 1px solid var(--darkgrey-75);
  }
`
