import React, { Suspense } from 'react'

const Lazy = React.lazy(()=> import("./Lazy Loading/LazyLoading"))
const App = () => {

  return (
    <Suspense fallback ={<div>Loading...</div>}>
      <Lazy/>
    </Suspense>
  )
}

export default App