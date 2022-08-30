import {useRouter} from 'next/router'

function ProductDetail(){
    const router = useRouter()//hook
    const productid =router.query.productid
    return <h1>Deatils about product {productid}</h1>
}

export default ProductDetail