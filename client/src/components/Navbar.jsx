import React from "react"

const Navbar =()=>{
    return (
        <div className="navbar">
            <span className="logo">TenShi Chat</span>
            <div className="user">
                <img src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/252938250_1469386416780461_5835384178997990174_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Vv5ndPmkWbEAX_L3DLU&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfBILfaHe8wSVYhdlCbOZpb-3Qy7IEJA2XGrCWfk_KSr9Q&oe=63C0E8D5" alt="" />
                <span>Chon</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
