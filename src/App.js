import React, { useState } from 'react'
import './App.css'
import QRCode from 'qrcode'

const App = () => {
    const [url, setUrl] = useState('')
    const [qrcode, setQrcode] = useState('')

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2
        }, (err, url) => {
            if (err) return console.error(err)

            console.log(url)
            setQrcode(url)
        })
    }




    return (
        <div className='app'>
            <div className='header'>
            <div className="toph1"><h1>Qr Code Generator</h1></div>
            <input 
                type="text" 
                placeholder='e.g.https://google.com'
                value={url}
                onChange={(e) => {setUrl(e.target.value)}}
                />
            </div>
            <button onClick={GenerateQRCode}>Generate</button>
            {qrcode &&
                <div className='code'>
                <img src={qrcode} alt='qr'/>
                <a href={qrcode} download='qrcode.png'>Download</a>
                </div>}
        </div>
    )
}

export default App