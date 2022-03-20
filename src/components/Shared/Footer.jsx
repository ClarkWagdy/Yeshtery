import React, { Component } from 'react'
import {Link} from "react-router-dom";
class Footer extends Component {
    state = {  } 
    render() { 
        return (
        <>
        <div className='container-fluid footer py-3'>
<div className='container'>
 <div className='row ydata '>
    <div className='col-12 col-md-5 d-flex flex-column justify-content-between'>
        <div>
            <img src={require("../../images/Group 1436.svg").default} className={'mb-3'} alt=""/>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                <br />
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
                <br  />
                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis
            </p>
        </div>
    </div>
     <div className='col-1 d-none d-md-block line'>
         <div></div>
     </div>
     <div className='col-12 col-md-6 d-flex flex-column '>
         <div className='mb-3'>
             <label>Subscribe to our newsletter</label>
             <div className='emailsub'>
             <input type="email" placeholder='Enter Your Mail' className='form-control subs-input'/>
             <button className='btn'>
                 Subscribe
                 <img src={require("../../images/Group 1431.svg").default} alt=""/>
             </button>
             </div>
         </div>
         <div className='d-flex'>
             <div className={'Usd'}>
                 <ul className='list-group'>
                     <li className="list-group-item">
                         <Link to={'/'}>About Us</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Contact Us</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Track Order</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Terms & Conditions</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Privacy Policy</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Sell With Us</Link>
                     </li> <li className="list-group-item">
                         <Link to={'/'}>Shipping And Returns</Link>
                     </li>

                 </ul>
             </div>
             <div className={'social'}>
                 <ul className='list-group'>
                     <li className="list-group-item">
                         <Link to={'/'}>
                             <span className={'me-3'}>
                             <img src={require('../../images/Group 1432.svg').default} alt=""/>
                             </span>
                             /YESHTERY
                         </Link>
                     </li>
                     <li className="list-group-item">
                         <Link to={'/'}>
                             <span className={'me-3'}>
                             <img src={require('../../images/Group 1433.svg').default} alt=""/>
                             </span>
                             /YESHTERY
                         </Link>
                 </li>
                     <li className="list-group-item">
                         <Link to={'/'}>
                             <span className={'me-3'}>
                             <img src={require('../../images/Group 1434.svg').default} alt=""/>
                             </span>
                             /YESHTERY
                         </Link>
                 </li>
                     <li className="list-group-item">
                         <Link to={'/'}>
                             <span className={'me-3'}>
                             <img src={require('../../images/Group 1435.svg').default} alt=""/>
                             </span>
                             /YESHTERY
                         </Link>
                 </li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
    <div className='row rights '>
                  <div className={'col-12 col-md-4 d-flex my-1 my-md-0 justify-content-center justify-content-md-start'}>

                      <p>© {new Date().getFullYear()} yeshtery, all rights reserved.</p>
                  </div>
        <div className={'col-12 col-md-4 d-flex my-1 my-md-0 justify-content-center justify-content-md-end'}>
            <img src={"../../images/Rectangle 586.png"} height={'40px'} className={'mx-1'} alt=""/>
            <img src={"../../images/Group 1437.png"} height={'40px'} className={'mx-1'} alt=""/>
            <img src={"../../images/Group 1438.png"} height={'40px'} className={'mx-1'} alt=""/>

        </div>
        <div className={'col-12 col-md-4 d-flex my-1 my-md-0 justify-content-center align-items-center justify-content-md-end'}>
            <p className={'me-2 p-0 m-0'}>Powered By</p>
            <img src={require("../../images/Group 1439.svg").default} alt=""/>
        </div>
    </div>
</div>
        </div>
        </>);
    }
}
 
export default Footer;