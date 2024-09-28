import React from 'react'
import './style.css'
import { Card1, Card2, Card3 } from '../../assets/images'

export default function NewMarketing() {
  return (
   <div className="container-marketing">

    <h2>Caring is the new marketing</h2>
    <p className='description-marketing'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

    <div className="container-card">
        <div className="card">
            <img src={Card1} alt="" />
            <div className="card-box">
                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                <span>Readmore →</span>
            </div>
        </div>

        <div className="card">
            <img src={Card2} alt="" />
            <div className="card-box">
                <p>What are your safeguarding responsibilities and how can you manage them?</p>
                <span>Readmore →</span>
            </div>
        </div>

        <div className="card">
            <img src={Card3} alt="" />
            <div className="card-box">
                <p>Revamping the Membership Model with Triathlon Australia</p>
                <span>Readmore →</span>
            </div>
        </div>
    </div>

   </div>
  )
}
