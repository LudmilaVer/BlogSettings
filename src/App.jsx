import React from 'react';
import { BlogSettingsProvider } from './BlogSettingsProvider';
import SettingsPanel from './SettingsPanel';
import Article from './Article';

function App() {
  return (
    <BlogSettingsProvider>
      <div className="App">
        <SettingsPanel />
        <Article />
      </div>
    </BlogSettingsProvider>
  );
}

export default App;