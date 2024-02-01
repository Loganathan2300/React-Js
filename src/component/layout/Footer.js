import React from 'react'
import "../../css/Footer.css"

function Footer(){

  return (
  <div className='footer body'>
    <div className='container'>
        <div className='row'>
            <div className='footer-col'>
                <h4>Company</h4>
                <hr></hr>
                <ul>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>out services</a></li>
                    <li><a href='#'>privacy policy</a></li>
                    <li><a href='#'>affiliate program</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Get Help</h4>
                <hr></hr>
                <ul>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Shipping</a></li>
                    <li><a href='#'>Returns</a></li>
                    <li><a href='#'>order status</a></li>
                    <li><a href='#'>Payment options</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Online Shop</h4>
                <hr></hr>
                <ul>
                    <li><a href='#'>Watch</a></li>
                    <li><a href='#'>Books</a></li>
                    <li><a href='#'>Phone</a></li>
                    <li><a href='#'>Laptop</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Follow us</h4>
                <div className='social-link my-4 mx-2'>
                  <a href='#' style={{textDecoration:"none"}}><i className='fab fa-facebook'></i> Facebook</a>
                  <div></div>
                  <a href='#' style={{textDecoration:"none"}}><i className='fab fa-instagram'></i> Instagram</a>
                  <div></div>
                  <a href='#' style={{textDecoration:"none"}}><i className='fas fa-map-marker-alt'></i> Google Map</a>
                </div>
                <p>&copy; 2024 FTS Academy. All rights reserved.</p>
           </div>
        </div>
    </div>
  </div>
  )
}

// const Footer = () =>{
//     return()
// }


export default Footer

  //   <div className='footer'>
    //         <div className='sb_footer selection_padding'>
    //             <div className='sb_footer-links'>
    //                 <div className='sb_footer-links-div'>
    //                     <h4>For Business</h4>
    //                     <a href='#'>
    //                         <p>Employer</p>
    //                     </a>
    //                     <a href='#'>
    //                         <p>Health plan</p>
    //                     </a>
    //                     <a href='#'>
    //                         <p>Individual</p>
    //                     </a>
    //                 </div>
    //                 <div className='sb_fotter-link-div'>
    //                     <h4>Resources</h4>
    //                     <a href='#'>
    //                         <p>Resources center</p>
    //                     </a>
    //                     <a href='#'>
    //                         <p>Testimonials</p>
    //                     </a>
    //                     <a href='#'>
    //                         <p>STV</p>
    //                     </a>
    //                 </div>
    //                 <div className='sb_footer-link-div'>
    //                     <h4>Partners</h4>
    //                     <a href=''>
    //                         <p>Swing Tec</p>
    //                     </a>
    //                 </div>
    //                 <div className='sb_footer-link-div'>
    //                     <h4>Company</h4>
    //                     <a href=''>
    //                         <p>About</p>
    //                     </a>
    //                     <a href=''>
    //                         <p>Press</p>
    //                     </a>
    //                     <a href=''>
    //                         <p>Career</p>
    //                     </a>
    //                     <a href=''>
    //                         <p>Contact</p>
    //                     </a>
    //                 </div>
    //                 <div className='sb_footer-link-div'>
    //                     <h4>Coming Soon on</h4>
    //                     <div className='socialmedia'>
    //                         <p><img src={''} alt=''/></p>
    //                         <p><img src={''} alt=''/></p>
    //                         <p><img src={''} alt=''/></p>
    //                         <p><img src={''} alt=''/></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         <hr></hr>
    //         <div className='sb_footer_below'>
    //             <div className='sb_footer-copyright'>
    //                 {/* <p>@{new Data().getFullYear()} CodeInn.All right reserved</p> */}
    //             </div>
    //             <div className='sb_footer-below-link'>
    //               <a href='/terms'><div><p>Terms & Condictions</p></div></a>
    //               <a href='/privacy'><div><p>Privacy</p></div></a>
    //               <a href='/security'><div><p>Security</p></div></a>
    //               <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
    //             </div>
    //         </div>    
    //         </div>
    //     </div>