import './App.css'
import BlogPage from './components/BlogPage/BlogPage'
import Header from './components/Header/Header'
import Blog from "./components/Blog/Blog"

function App() {

  return (
    <div className="App">
      <Header></Header>
      <BlogPage></BlogPage>
      <Blog></Blog>
    </div>
  )
}

export default App
