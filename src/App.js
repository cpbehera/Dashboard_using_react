import './App.css';
import LeftCompo from './Components/Left-side/LeftCompo';
import RightCompo from './Components/Right-side/RightCompo';

const App = ()=>{
  return (
    <main>
      <div>
        <LeftCompo />
      </div>
      <div>
        <RightCompo />
      </div>
    </main>
  )
}

export default App;