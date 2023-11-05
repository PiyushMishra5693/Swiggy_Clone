import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state={
            count:0
        };
    }

    render(){

        const {name,email,phone}=this.props;
       
        return (
            <div className="user-card">
                <h2>Count:{this.state.count}</h2>
                <button className=" p-[2px] border border-solid border-black bg-gray-400 rounded-md" onClick={()=>{
                    this.setState({count:this.state.count+1});
                }}>Button</button>
                <h3>Name:{name}</h3>
                <h3>Email:{email}</h3>
                <h3>Phone-no:{phone}</h3>
            </div>
        )
    }
}

export default UserClass;