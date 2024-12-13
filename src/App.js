import './App.css';
import Navbar from './components/navbar/nav';
import { useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setLoader(false)

    }, 3000)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className='app'>
      {loader ?

        <div className='loader' data-aos="zoom-in">

          <h1>{"<SYED SHAHEER/>"}</h1>
          <h3>PORTFOLIO</h3>

          <Hourglass
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass="glass"
            colors={['#212ea0', '#212ea0']}
          />
        </div>
        :
        <Navbar />
      }
    </div>
  );
}

export default App;
