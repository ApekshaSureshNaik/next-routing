import Link from "next/link"

function ProductList( {productid = 100 }) {
    return(
    <>
    <Link href='/'><a>Home</a></Link>
    <h1>
    <Link href="/product/1"><a>
        product1
        </a></Link></h1>
    <h1>
    <Link href="/product/2"><a>
        product2
        </a></Link></h1>
    <h1>
    <Link href="/product/3" replace><a>
        product3
        </a></Link></h1>
        {/* to navigate to declared id using string interpoliation  */}
        <h1>
    <Link href={`/product/${productid}`}><a>
        product {productid}
        </a></Link></h1> 
</>
) 
}
export default ProductList