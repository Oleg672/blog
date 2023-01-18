import './App.css';
import './styles/style.css';
import Main from './components/Main';
import { SidebarProvider } from './providers/SidebarProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ArticleDataProvider } from './providers/ArticleDataProvider';
import { CategoriesProvider } from './providers/CategoriesProvider';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarProvider>
          <ArticleDataProvider>
            <CategoriesProvider>
              < Main />
            </CategoriesProvider>
          </ArticleDataProvider >
        </SidebarProvider >
      </BrowserRouter>
    </div>
  );
}

export default App;
