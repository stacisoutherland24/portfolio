import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from "@mui/icons-material/Facebook";
import '../styles/Footer.css';

function Footer() {
  return (
     <div className='footer'>
          <div className='socialMedia'>
               <LinkedInIcon />
               <FacebookIcon />
          </div>
          <p> &copy; 2022 stacisoutherland24@gmail.com</p>
     </div>
 );
  
}

export default Footer;
