
import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';

const bottlesPromise = fetch('./Bottles.json').then(res => res.json());

function App() {

  return (
    <>
      <h1>Buy Awesome water Bottle</h1>
     
     <Suspense fallback={<h3>Bottles are loading....</h3>}>
    <Bottles bottlesPromise={bottlesPromise}></Bottles>
     </Suspense>
    </>
  )
}

export default App
