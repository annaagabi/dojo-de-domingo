import { Pana } from '../../assets/images'
import './style.css'

import React from 'react'

export default function DesignInfo() {
  return (
    <section className="designContainer">
        <div className="design-image">
            <img src={Pana} alt="" />
        </div>
        <div className="design-content">
            <h2>How to design your site footer like we did</h2>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button>Learn More</button>
        </div>
    </section>
  )
}
