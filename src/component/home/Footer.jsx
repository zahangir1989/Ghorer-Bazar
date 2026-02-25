import React from 'react';


const Footer = () => {
    return (
        <section className='bg-zinc-100 pt-20'>
            <div className=' mx-auto grid grid-cols-4 gap-20'>

           <div>
            <img className='w-15 pl-6 h-10' src="logo.avif" alt="Banner"/>
            <h2 className='text-small pt-5 font-semibold ml-6 py-6'>Ghorer Bazar: Your Trusted Source for Safe & Organic Food</h2>
            <p className='text-small pl-6'>Ghorer Bazar is a leading e-commerce platform committed to delivering safe, healthy, and organic food products across Bangladesh. Renowned for its dedication to quality, Ghorer Bazar offers a diverse range of health-focused items, including premium mustard oil, pure ghee, organic honey, dates, chia seeds, and an assortment of nuts. Each product is carefully sourced and crafted to ensure maximum health benefits, meeting the highest standards of purity and freshness.</p>
            
           </div>

           <div>
            <h1 className='text-orange-400 pb-4'>COMPANY</h1>
            <ul>
                <li>about Us</li>
                <li>রিটার্ন পলিসি</li>
                <li>রিফান্ড পলিসি</li>
            </ul>

           </div>

           <div>
            <h1 className='text-orange-400 pb-4'>QUICK HELP</h1>
            <ul>
                <li>গ্রাহক সেবা</li>
                <li>Contact</li>
            </ul>

           </div>

           <div>
            <h1 className='font-bold'>DBID ID : 437361334</h1>
           </div>
            </div>

            <div className='bg-red-600'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus.</h1>

            </div>
        </section>

        
    );
};

export default Footer;