import { useEffect } from 'react';
import {fetchDataFromApi} from './utils/api'

function App() {
  useEffect(()=>{
    apiTesting()
  })
  const apiTesting = () => {
    fetchDataFromApi("/pornstars")
  }
  return (
    <div className="text-6xl">
      Hello ji
    </div>
  );
}

export default App;
