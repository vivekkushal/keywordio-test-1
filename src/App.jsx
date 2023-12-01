import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

// components
import Navbar from './components/Navbar/Navbar';

// routes
import { pageRoutes } from './routes';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.routes_container}>
        <Routes>
          {pageRoutes.map((pageRoute) => (
            <Route
              key={pageRoute.name}
              path={pageRoute.path}
              element={pageRoute.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
