const RestaurantLogin =()=>{
    return(
        <>
        <h3>Login Component</h3>
        <div>
            <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter email id" className="input-feild" />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter password" className="input-feild" />
            </div>
            <div className = "input-wrapper">
                <button className="button">LogIn</button>
            </div>
        </div>
        </>
    )
}
export default RestaurantLogin