import './App.css';
import './styles/style.css';
import Main from './components/Main';
import {SidebarProvider} from './providers/SidebarProvider';
import React from 'react';


function App() {
  return (
    <div className="App">
      <SidebarProvider>
        < Main/>
      </SidebarProvider >
    </div>
  );
}

export default App;
