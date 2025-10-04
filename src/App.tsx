import Welcome from './components/welcome.tsx'
import Header from './components/Header.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import Counter from './components/Counter.tsx'
import "./index.css"
import {Routes, Route} from 'react-router'
import TermsPage from './pages/TermsPages.tsx'
import HomePage from './pages/HomePage.tsx'
import NoteFoundPage from './pages/NotFoundPage.tsx'
import ProductDetailPage from './pages/ProductDetailPage.tsx'
import ProductListPage from './pages/ProductListPage.tsx'
import FormPage from './pages/FormPage.tsx'
import FormWithReactHookForm from './pages/reactHookForm/RHFPage.tsx'
import EmployeesPage from './pages/EmployeesPage.tsx'
import EmployeesPageAxios from './pages/EmployeesPageAxios.tsx'

type Teacher = {
  id: number;
  job: string;
  name: string;
  year: number;
}

const teachers: Teacher[] = [
  { job: "Math Teacher", name: "David", year: 5 , id: 1},
  { job: "Science Teacher", name: "John", year: 3 , id: 2},
  { job: "English Teacher", name: "Smith", year: 4, id: 3},
]


function App() {

  return (

    <div style={{padding: "20px 48px"}}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/terms" element={<TermsPage />}/>
        <Route  path='*' element={<NoteFoundPage/>}></Route>
        <Route path='/product-list' element={<ProductListPage/>}></Route>
        <Route path='/product/:productSlug' element={<ProductDetailPage />}></Route>
        <Route path='/form-page' element={<FormPage />}/>
        <Route path='/form-rhf' element={<FormWithReactHookForm/>}/>
        <Route path='/employee' element={<EmployeesPage />}/>
        <Route path='/employee-axios' element={<EmployeesPageAxios />}/>
      </Routes>
    </div>
  )
}

export default App
