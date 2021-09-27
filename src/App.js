import { Route } from 'react-router-dom';

function Name() {
  return (
    <>
      <h1>welcome to home page</h1>
      <a href='/movie'>Go to movie page</a>
    </>
  );
}
function Name2() {
  return <h1>welcome to movie page</h1>;
}

function App() {
  return (
    <>
      <Route path='/' component={Name} exact />
      <Route path='/movie' component={Name2} exact />
    </>
  );
}

export default App;
