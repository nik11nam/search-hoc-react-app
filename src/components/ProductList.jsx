import products from "../data/products.json";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const { searchTerm } = props
    let filteredProducts = filterProducts(searchTerm);
    
    return (
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
        </div>
        <div>
          {filteredProducts.map((product) => <ProductCard key={product.sku} {...product} />)}
        </div>
      </div>
    )
}

const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase()
    return products.filter(product => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    })
  }

export default ProductList;