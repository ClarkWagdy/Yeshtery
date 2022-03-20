import React, { Component } from 'react'
import './Shared.scss'
import {Link} from "react-router-dom";
class Header extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <div className='container-fluid p-2 m-0 header'>
                <div className='container d-flex justify-content-between'>
                    <div className='d-flex justify-content-between w-100 w-md-none align-items-center  justify-content-md-start'>
                        <img src={require('../../images/Group 770.svg').default} alt=""/>
                        <img src={'images/Group 769.svg'} className='ml-32px' alt=""/>
                    </div>
                    <div className={' justify-content-between align-items-center offer d-none d-lg-flex'}>
                        <img src={require('../../images/Path 347.svg').default} alt=""/>

                        <p>Valentine’s Day Offers! Buy Two Get One Free <Link to='/'  className='shno'>Shop Now</Link></p>
                        <img src={require('../../images/Path 346.svg').default}   alt=""/>
                    </div>
                    <div className='content d-none d-md-block'>
                        <div className='d-flex '>
                            <div className='d-flex align-items-center mx-2'>
                                <img src={require('../../images/Group 756.svg').default}/>
                                <p className='m-0 p-0'>Contact Us</p>
                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <img src={require('../../images/Group 758.svg').default}/>
                                <p className='m-0 p-0'>Track Order</p>
                            </div>
                            <div className='d-flex align-items-center mx-2'>
                                <img src={require('../../images/Group 753.svg').default}/>
                                <p className='m-0 p-0'>Find A Store</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
<div className={'container my-2'}>
    <div className={'row d-flex align-items-center'}>
        <div className={'col-4 '}>
            <div>
                <input className={'form-control searchinput'} placeholder={'Search'}/>

            </div>
        </div>
        <div className={'col-4 d-flex justify-content-center'}>
            <img src={require("../../images/Group 745.svg").default} alt=""/>
        </div>
        <div className={'col-4 d-flex justify-content-end'}>
            <div className={'d-flex align-items-center'}>
            <div className={' cart'}>
                <img src={require("../../images/Path 772.svg").default} alt=""/>
                <span>0</span>
            </div>
            <p className={'p-0 m-0 mx-2 fw-bold d-none d-lg-block'}>Cart</p>
            </div>
            <div className={'d-flex align-items-center mx-3'}>
                <div >
                    <img src={require("../../images/Path 771.svg").default} alt=""/>

                </div>
                <p className={'p-0 m-0 mx-2 fw-bold d-none d-lg-block'}>Wishlist</p>
            </div>
            <div className={'d-flex align-items-center '}>
                <div  >
                    <img src={require("../../images/Path 773.svg").default} alt=""/>

                </div>
                <p className={'p-0 m-0 mx-2 fw-bold d-none d-lg-block'}>Login </p>
            </div>

        </div>



    </div>
</div>
        </>);
    }
}
 
export default Header;