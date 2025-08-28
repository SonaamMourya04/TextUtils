import React from "react";

const Header=({props})=>{
    return(
        <div>
            {props.title}
            {props.About}
            {props.Services}

        </div>
    )
}
export default Header;