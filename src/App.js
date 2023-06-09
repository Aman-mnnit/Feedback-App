import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
function App() {
  

  
 
  return (<>
  <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" />

      <div className='container'>
        <Routes>
          <Route exact path='/'

            element={

              <>
                <FeedbackForm  />
                <FeedbackStats />
                <h1>
                  <FeedbackList  />
                </h1>
              </>
            }

          >

          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  </>
  )
}

export default App