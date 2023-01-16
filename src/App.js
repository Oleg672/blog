import './App.css';
import './styles/style.css';
import Main from './components/Main';
import { SidebarProvider } from './providers/SidebarProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarProvider>
          < Main />
        </SidebarProvider >
      </BrowserRouter>
    </div>
  );
}

export default App;
