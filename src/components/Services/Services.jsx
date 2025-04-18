import React from 'react';
import './Services.css';
// import service1 from '../../assets/service1.png';
// import service2 from '../../assets/service2.png';
// import service3 from '../../assets/service3.png';
// import service4 from '../../assets/service4.png';
import serviceicon1 from '../../assets/serviceicon1.png';
import serviceicon2 from '../../assets/serviceicon2.png';
import serviceicon3 from '../../assets/serviceicon3.png';
import serviceicon4 from '../../assets/serviceicon4.png';

const Services = () => {

    return (

        <div className='services-main'>
            <h3>Services</h3>
            <h2>What We Offer</h2>
        <div className='services container'>
            <div className="service">
                {/* <img src={service1} alt="Service 1" /> */}
                <div className="caption">
                    <img className='icon'  src={serviceicon1} alt="" />
                    <p className='p1'>Waste Pickup</p>
                    <p className='pp'>For households, businesses, or construction sites across Canada. Choose your preferred hauler, time, and pickup type.</p>
                </div>
            </div>
            <div className="service">
                {/* <img src={service2} alt="Service 2" /> */}
                <div className="caption">
                    <img className='icon'  src={serviceicon2} alt="" />
                    <p className='p1'>Hauler Jobs</p>
                    <p className='pp'>Independent or company haulers get matched with pickup requests in real time. Optimize routes, confirm jobs, and build reviews.</p>
                </div>
            </div>
            <div className="service">
                {/* <img src={service3} alt="Service 3" /> */}
                <div className="caption">
                    <img className='icon2'  src={serviceicon3} alt="" />
                    <p className='p1'>Material Marketplace</p>
                    <p className='pp'>List or browse reusable construction and household materials. Promote reuse, save on costs, and reduce unnecessary dumping.</p>
                </div>
            </div>
            <div className="service">
                {/* <img src={service4} alt="Service 4" /> */}
                <div className="caption">
                    <img className='icon2' src={serviceicon4} alt="" />
                    <p className='p1'>JunkCycle AI</p>
                    <p className='pp'>Smart sorting recommendations for proper disposal. Coming soon: Track your carbon impact and earn potential credits."</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;