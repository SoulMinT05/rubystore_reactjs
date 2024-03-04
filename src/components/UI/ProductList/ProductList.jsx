import ProductCard from '../ProductCard/ProductCard';

function ProductList({ data }) {
    return (
        <>
            {data?.map((item, index) => (
                <ProductCard item={item} key={index} />
            ))}
        </>
    );
}

export default ProductList;
