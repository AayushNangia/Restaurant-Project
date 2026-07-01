const RestaurantSignUp =()=>{
    return(
        <>
       <h3> SignUp </h3>
        <div>
            <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter email id" className="input-feild" />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter password" className="input-feild" />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Confirm  password" className="input-feild" />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter Resturant Name" className="input-feild" />
            </div>
             <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter Resturant City" className="input-feild" />
            </div>

             <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter Full Address" className="input-feild" />
            </div>
             <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter Phone Number" className="input-feild" />
            </div>

            <div className = "input-wrapper">
                <button className="button">SignUp</button>
            </div>
        </div>
        </>
    )
}
export default RestaurantSignUp