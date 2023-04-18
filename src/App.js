import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-4'>
        <Route path={'/accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/dropdown'}>
          <DropdownPage />
        </Route>
        <Route path={'/button'}>
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App
