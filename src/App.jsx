import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './assets/components/Home'
import PostDetails from './assets/components/PostDetails'
import PostLayout from './assets/components/PostLayout'
import NotFound from './assets/components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      {/* Nested Route */}
      <Route path='posts' element={<PostLayout />} >
        <Route path=':postId' element={<PostDetails />} />
           </Route>
           {/* not found */}
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App