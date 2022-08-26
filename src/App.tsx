import Budget from './components/budget';
import Sidebar from './components/sidebar';
import '@fontsource/roboto';

function App() {
  return (
    <div className='grid grid-areas-appLayout font-sans grid-cols-appLayout grid-rows-appLayout h-screen'>
      <Sidebar />
      <Budget />
    </div>
  );
}

export default App;
