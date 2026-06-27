import React from 'react'

function page() {
    return (
        <div className="py-12 mx-5 my-10  md:mx-10 lg:mx-40">
            <div className='py-10'>
                <h1 className='text-4xl text-center'> Madu Tours</h1>
                <h1 className='text-5xl font-bold text-center'>Privacy Policy</h1>
            </div>
            <div>

                <h2 className='text-3xl  '>1. Introduction</h2>
                <p className='py-5 text-gray-500'>
                    Walkers Tours Limited (“We , us , our  and/or Company”) is a company registered in Sri Lanka with the company registration number PB249 and our registered office is at No. 117, Sir Chittampalam A. Gardiner Mawatha, Colombo 2, Sri Lanka.
                </p>
                
                <h2 className='text-3xl  '>1. Your booking.</h2>
                <ul className='py-5 text-gray-500 space-y-3 list-decimal ml-10'>
                    <li >
                        Booking details must be completed personally by the traveller or by one person on behalf of a group who is deemed authorised by individual members (the “Client”) of the Group to contract on their behalf.
                    </li>
                    <li>
                        WTL will confirm the arrangements requested by the Client through web bookings as soon as reasonably possible upon receipt of the Booking details. Please note that for legal purpose, the contract comes into existence when a confirmation invoice has been issued by WTL for service rendered by WTL or on behalf of the relevant suppliers). Despite its best efforts, as services are obtained from third party suppliers, it may not be possible to confirm certain arrangements at once (e.g. when a hotel is only available on request). Where so specified the legal contract for the services concerned will be formed once WTL have specifically confirmed those services have been booked even if a previous interim confirmation has been issued.
                    </li>
                    <li>
                        The Client is responsible for checking the details of the confirmation invoice and should give immediate notice of any corrections thereto.
                    </li>
                </ul>

                <h2 className='text-3xl  '>2. Your Contract.</h2>
                <ul className='py-5 text-gray-500 space-y-3 list-decimal ml-10'>
                    <li >
                        This contract and all services provided by WTL are exclusively governed by Sri Lankan law.
                    </li>
                    <li>
                        The Client acknowledges that although the Contract is with WTL, unless otherwise specified, all services are provided by third party service provider (eg hotels, bus operations, tours) and that whilst every effort has been made by WTL to ensure that such services are safe, it is unable to accept responsibility for third party services out of its control. WTL contracts as named agent only.
                    </li>
                    <li>
                        The Client is responsible for checking the details of the confirmation invoice and should give immediate notice of any corrections thereto.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default page
