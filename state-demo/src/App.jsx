import './App.css'
import Counter from './Component/Counter'
import Dumbo from './Component/Dumbo'
import ScoreKeeper from './Component/ScoreKeeper'
import EmojiClicker from './Component/EmojiClicker'

function App() {
  

  return (
    <>
      <h1>State Demo!</h1>
      <Counter/>
      <Dumbo/> 
      <ScoreKeeper numPlayers={4} target={5}/>
      <EmojiClicker/>    
    </>
  )
}

export default App
