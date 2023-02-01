import './App.css';
import { useState } from 'react';
import QRcode from 'qrcode';
function App() {
  const [inputText, setInputText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const inputTextHandler = event => {
    console.log(event.target.value);
    setInputText(event.target.value);
  }
  const generateQRcode = () => {
    QRcode.toDataURL(inputText, {
      width: 256,
      margin: 1
    },
      (error, url) => {
        if (error) {
          return console.log(error);
        }
        setQrCode(url)
      })
  }

  return (
    <div className="bg-black text-white h-screen w-screen ">
      <h1 className='font-mono flex  justify-center pt-5 text-5xl' >
        QR code generator
      </h1>
      <div className='flex justify-center mt-8 ' onChange={inputTextHandler}>
        <input type="text" placeholder='Enter text here' className='text-black p-1 rounded-md' />
        <button className='bg-green-700 rounded-lg ml-3 p-2' onClick={generateQRcode}>Generate QR</button>
        {qrCode &&
          <a href={qrCode} download="QRCode.png" className='bg-green-700 rounded-lg ml-3 p-2' >Download QR</a>}

      </div>
      <div className='flex justify-center mt-8 '>
        {qrCode && <img src={qrCode} alt="no" />}
      </div>
    </div>
  );
}

export default App;
