import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import PostPage from "./pages/PostPage"

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero/>
            <Journey/>
          </>
        } />

        {/* Blog Post Page */}
        <Route path="/post/:id" element={<PostPage/>} />

      </Routes>

    </BrowserRouter>
  )

}

export default App