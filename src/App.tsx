import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Favorites from './pages/favorites/Favorites'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Planets from './pages/planets/Planets'
import usePlanets from './hooks/usePlanets'
import Loader from './components/loader/Loader'

function App() {
  const { planets, isLoading, handleFavorite, sortPlanets } = usePlanets()

  return (
    <>
      <div className="app-layout">
        <Router>
          <Sidebar options={['Planets', 'Favorites']} />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/planets" />} />
              <Route
                path="/planets"
                element={
                  isLoading ? (
                    <Loader />
                  ) : (
                    <Planets
                      data={planets}
                      handleFavorite={handleFavorite}
                      sortTable={sortPlanets}
                    />
                  )
                }
              />

              <Route
                path="/favorites"
                element={
                  <Favorites data={planets} handleFavorite={handleFavorite} />
                }
              />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  )
}

export default App
