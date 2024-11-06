import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShoppingDetails = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`) // Thay đổi endpoint để lấy thông tin sản phẩm theo ID
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    if (loading) {
        return <div className="flex items-center justify-center h-screen text-xl">Loading...</div>;
    }

    if (!product) {
        return <div className="flex items-center justify-center h-screen text-xl">Product not found</div>; // Xử lý trường hợp không tìm thấy sản phẩm
    }

    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-auto rounded-lg mb-4 shadow-lg" 
            />
            <p className="text-lg text-gray-700 mb-2">{product.desc}</p>
            <p className="text-xl font-bold text-gray-800 mb-2">${product.price} USD</p>
            <p className="text-md text-gray-600">Gender: <span className="font-semibold">{product.gender}</span></p>
            <div className="mt-4">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ShoppingDetails;
