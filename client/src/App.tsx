import { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import useThemeStore from './store/theme';
import PixelPlayground from './pages/projects/PixelPlayground'

const App = () => {
  const { theme } = useThemeStore();
  
  // applying dark effect on the whole site
  useEffect(() => {
    const root = document.documentElement;

    if ( theme === 'dark' ) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

  }, [theme])

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index path={''} element={<Home />} />
        <Route path={'/project/pixel_playground'} element={<PixelPlayground />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  )
}

export default App;
