import { useParams } from "react-router";

function ProductDetailPage(){
    const params = useParams<{productSlug: string}>();
    return(
        <div>
        <h1>Product Detail Page</h1>
        <p>{params.productSlug}</p>
        </div>  
    );
}

export default ProductDetailPage;