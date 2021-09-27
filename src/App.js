import { Route } from 'react-router-dom';
import temp from './components/temp';
import DefaultHOC from './HOC/Default.HOC';


function App() {
  return (
    <>
      <DefaultHOC exact component={temp}/>
    </>
  );
}

export default App;
  