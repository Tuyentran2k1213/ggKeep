import Layout from './Layouts';
import './node.scss';
import { Provider } from 'react-redux';
import configureStore from './stores';

const store = configureStore();

function App() {
  return (<Provider store={store}>
    <div className="App">
  <Layout />
</div>
  </Provider>)
}

export default App
