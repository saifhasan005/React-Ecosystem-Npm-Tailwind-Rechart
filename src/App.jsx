
import { Suspense } from 'react'
import './App.css'
import Birth from './Component/Birth Info/Birth';
import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/DaisyNav/Navbar/Navbar'
import PricingOption from './PricingOptions/PricingOption';
import Result from './Component/Result Charts/Result'
const pricingPromise = fetch('/public/PricingData.json').then((res) => res.json());

function App() {


  return (
    <>
      <header>
        <Navbar></Navbar>

      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <br /> <br />
        <Birth></Birth> <br /> <br />
        <Result></Result>
      </main>
    </>
  )
}

export default App
