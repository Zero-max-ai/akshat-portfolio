import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={""} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Route>

      <Route path={"*"} element={<NotFound />} />
    </Rotues>
  )
}

export default App;
