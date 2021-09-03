import React from 'react';
import './index.css';

function Profile({ item }) {
    //const [data, setData] = useState([]);
    //useEffect(() => {
    //    fetch("https://reqres.in/api/users?page=2").then((result) => {
    //        result.json().then((response) => {
    //            setData(response.data)
    //        })
    //    })
    //}, [])
    return (
        // <div>
        //    {
        //        data && data.map((item)=>
        <div className="profile">
            <img src={item.avatar} alt="logo" className="img-avatar" /><br />
            <p style={{ fontWeight: "bolder" }}>{item.first_name} {item.last_name} </p>
            <p>{item.email}</p><br />
            <p style={{ fontWeight: "bolder" }}>Your Plan: Standard </p><br />
            <button type="button" class="btn-active-user">Active User</button><br /><br />
            <p style={{textAlign:"left"}}>Plan Uses</p>
        <div style={{backgroundColor:"grey", width:"100%"}}>
                <div style={{height:"4px",width:"35%",backgroundColor:"orange"}}></div>
        </div><br/>
            <p style={{ marginRight: "8px", fontWeight: "bolder" }}>2,450 | 5,000 </p>
            <p >clicks revised | Monthly clicks</p>
        </div>
        //            )
        //        }
        //    </div>
    );
}
export default Profile;