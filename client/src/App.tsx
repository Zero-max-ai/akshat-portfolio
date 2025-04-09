import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={""} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;
