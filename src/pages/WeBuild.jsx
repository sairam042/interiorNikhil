import React from 'react'
import Animate from './Animate'

function WeBuild() {
    return (
        <div id='page2Container'>
            <h1 id='animateHeading'>Elevate your lifestyle with our chic and functional interior solutions</h1>

            <div id='scrollContainer'>
                <div id='cardsDiv'>
                    <div className='cards' id='kitchen'>Modular Kitchen</div>
                    <div className='cards' id='livingRoom'>Living Room</div>
                    <div className='cards' id='balcony'>Balcony</div>
                    <div className='cards' id='poojaRoom'>Pooja Mandir</div>
                    <div className='cards' id='officeRoom'>Work Space</div>
                    <div className='cards' id='bedRoom'>Bed Room</div>
                </div>
            </div>

            <div id='animateWordDiv'>
            <Animate/>
            </div>

        </div>
    )
}

export default WeBuild