import './App.css'
import Alert from './components/Alert'
import AlertList from './components/AlertList'





function App() {
  

  return (
    <div>
      {
        AlertList.map( (AlertList, id) => (
          <Alert 
          type={AlertList.type}
          title={AlertList.title}
          id={AlertList.id}
          key={id}
          
          >
            {AlertList.message}
          </Alert>
        ))
      }
    </div>
  )
}

export default App
