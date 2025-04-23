import { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import useThemeStore from './store/theme';

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    const root = document.documentElement((state) => state.theme);
    if(theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme])

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={''} element={<Home />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  )
}

export default App;
