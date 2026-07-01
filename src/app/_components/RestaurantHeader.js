import Link from 'next/link'
const  RestaurantHeader =()=>{
    return(
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{width:100}} src = "https://static.vecteezy.com/system/resources/previews/035/726/286/original/food-delivery-logo-design-free-vector.jpg"/>

            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>

                </li>
                <li>
                    <Link href="/">login/SignUp</Link>

                </li>
                <li>
                    <Link href="/">Profile</Link>

                </li>
            </ul>
        </div>
    )
}
export default RestaurantHeader;