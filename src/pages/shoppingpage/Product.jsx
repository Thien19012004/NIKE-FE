import men from './../../assets/men.png';
import women from './../../assets/women.png';
import kid from './../../assets/kids.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleWithGoToDetail = (productId) => {
    navigate(`/shopping/${productId}`);
  };

  useEffect(() => {
    fetch('https://nike-be.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='pt-12 flex flex-col gap-12'>
      {/* Product Types */}
      <div className='flex gap-5 items-center justify-center px-4'>
        {[men, women, kid].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`product-type-${index}`}
            className='product-type h-24 w-24 rounded-full border-4 border-gray-300 transition-transform transform hover:scale-110'
          />
        ))}
      </div>

      {/* Product List */}
      <div className='px-4'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {data.map((product) => (
            <div
              key={product._id}
              className='flex flex-col p-5 bg-[#222933] rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1'
            >
              <img
                src={product.img}
                alt={product.name}
                className='max-h-[300px] rounded-lg object-cover mb-4'
              />
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-semibold text-white'>
                  {product.name}
                </h3>
                <p className='text-sm text-gray-400'>{product.gender}</p>
                <p className='text-lg font-bold text-orange-400'>
                  ${product.price} USD
                </p>
                <button
                  onClick={() => handleWithGoToDetail(product._id)}
                  className='mt-3 py-2 bg-orange-500 text-white font-medium rounded-lg transition-colors hover:bg-orange-600'
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
