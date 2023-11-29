import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameColetion from "./hooks/useGameColection"

import './global.css'

function App() {
  const { games, addGame, removeGame } = useGameColetion()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            cover={game.cover}
            title={game.title}
            onRemove={() => removeGame(game.id)} />
        ))}
      </div>
    </div>
  )
}

export default App
