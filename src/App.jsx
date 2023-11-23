import './App.css'
import withSearch from './components/hoc/withSearch';
import ProductList from './components/ProductList';

function App() {
  const ProductsListWithSearch = withSearch(ProductList);

  return (
    <div className="App">
      <ProductsListWithSearch />
    </div>
  );
}

export default App
