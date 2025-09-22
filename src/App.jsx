
import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';


const bottlesPromise2 = fetch('https://raw.githubusercontent.com/mahadi1951/memorable-water-bottles/refs/heads/main/public/Bottles.json').then(res => res.json());

function App() {

  return (
    <>
      <h1>Buy Awesome water Bottle</h1>
     
     <Suspense fallback={<h3>Bottles are loading....</h3>}>
    <Bottles bottlesPromise={bottlesPromise2}></Bottles>
     </Suspense>
    </>
  )
}

export default App
