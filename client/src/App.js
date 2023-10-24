import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext} from 'react'
import NotFound from './components/NotFound'
import StateProvider from './components/StateProvider'
import Marketplace from './components/Marketplace'
import ImageUploader from './components/ImageUploader'
import selectBuild from './components/selectBuild'

function App() {
  const StateContext = createContext()
  
  return (
    <BrowserRouter id="App">
      <StateProvider context={StateContext}>
          <Routes>
            <Route exact path="/" element={<Marketplace context={StateContext} />} />
            <Route exact path="/upload" element={<ImageUploader context={StateContext} />} />
            <Route exact path="/selectBuild" element={<selectBuild/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
