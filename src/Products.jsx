import { useSearchParams } from "react-router-dom"

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);
    console.log(searchParams.get("category"));
    console.log(searchParams.get("id"));



    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}