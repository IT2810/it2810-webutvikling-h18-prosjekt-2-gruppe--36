import React, { Component } from 'react';
import './App.css';
import CategorySelector from './components/CategorySelector';
import TabController from './components/TabController';
import GalleryView from './components/GalleryView';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <TabController tabs={["Tab1", "Tab2", "Tab3", "Tab4"]} />  
          <GalleryView />
        </div>

        <div>
          <CategorySelector title="Bilder" categories={["Test1", "Test2", "Test3"]} />
          <CategorySelector title="Lyd" categories={["xxx", "yy", "zzz"]} />
          <CategorySelector title="Tekst" categories={["dfd", "aa", "Testfddf3"]} />
        </div>
      </div>
    
    );
  }
}

export default App;
