import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Navbar from '../Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(id))
  );
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="p-10">
        <p>Product not found</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
	<>
	<Navbar />
    <div className="max-w-4xl mx-auto p-6">
      <img src={product.image} alt={product.title} className="w-full max-w-sm" />
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="mt-2 text-gray-600">${product.price}</p>
      {product.originalPrice && (
        <p className="text-sm line-through">${product.originalPrice}</p>
      )}
      {product.badge && (
        <span className="inline-block mt-2 px-3 py-1 bg-black text-white rounded text-xs">
          {product.badge}
        </span>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ProductDetail;
