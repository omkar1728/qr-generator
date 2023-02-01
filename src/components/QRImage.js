import React from 'react'

import QR from '../img/QR.png'

export default function QRImage() {
    let img_url = "../img/QR.png"
    return (
        <div>
            <img src={QR} alt="enter some text to display qr" />
        </div>
    )
}
