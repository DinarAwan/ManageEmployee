import {useSearchParams} from 'react-router'



function ProductListPage(){
    const [searchParams, setUseSearchParams] = useSearchParams();
    console.log(searchParams.get("short"));

    //statis
    function HandelShortPrice(){
        searchParams.set("short", "price_asc");
        setUseSearchParams(searchParams);
    }

    //dinamis
    function HandelShortValueChange(shortValue : string){
        searchParams.set("short", shortValue);
        setUseSearchParams(searchParams);
    }


    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li><p>Name : {searchParams.get("name")}</p></li>
                <li><p>Short : {searchParams.get("short")}</p></li>
            </ul>

            <button onClick={ () => HandelShortValueChange("asc")}>Shrot Price ASC</button>
            <button onClick={ () => HandelShortValueChange("desc")}>Shrot Price DESC</button>
            <button onClick={ () => HandelShortValueChange("popular")}>Shrot Popular</button>
        </div>
    )
}
export default ProductListPage;