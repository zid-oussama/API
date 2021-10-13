import React, { useRef } from 'react'

import './ListCard.css'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GrUserWorker } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function ListCard({ info }) {
    console.log(info)
    const ref = useRef();
    return (
        <>
            <Flippy
                flipOnHover={false}
                flipOnClick={true}
                flipDirection="vertical"
                className='myFlip'
                ref={ref}
            >
                <FrontSide className='front' style={{ border: "1px solid rgb(226, 226, 155)", borderRadius: "5%" }}>
                    <h2>{info.name}</h2>
                    <h4>{info.username}</h4>
                    <div className="inf" >
                        <h3><span><AiOutlinePhone /></span>  {info.phone}</h3>
                        <h3><span><AiOutlineMail /></span>  {info.email}</h3>
                        <h3><span><CgWebsite /> </span>  {info.website}</h3>
                    </div>
                    <button onClick={() => { ref.current.toggle(); }}>Extra Info</button>
                </FrontSide>
                <BackSide className='back' style={{ border: "1px solid rgb(226, 226, 155)", borderRadius: "5%" }}>
                    <h3><span><FaAddressCard /></span> {info.address.street},{info.address.city}</h3>
                    <h3><span>ZIP : </span> {info.address.zipcode}</h3>
                    <h3><span>Company : </span> {info.company.name}</h3>
                    <button onClick={() => { ref.current.toggle(); }}> Back</button>
                </BackSide>
            </Flippy>

        </>
    )
}

export default ListCard
