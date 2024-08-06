import './App.css'
import UserProfile from './components/UserProfile'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  return (
      <>
        <WelcomeMessage />
        {/* <Header />
        <MainContent />
        <Footer /> */}

        <UserProfile name = "Mohamed" age = "23" bio = "Full Stack Developer" />
      </>
  )
}

export default App
