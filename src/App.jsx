import Nav from './page/Nav'
import Home from './page/Home'

function App() {

  return (
    <div className='px-8 lg:px-20 block'>
      <Nav />
      <Home />
      <div className='text-center bottom-0 my-2 text-inter text-[10px]'>
        Made by Zedd with ❤️
      </div>
    </div>
  )
}

export default App
