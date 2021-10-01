import React, { useState } from 'react';
import './Form.css';
import image from '../assets/background.jpeg';

const Form = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [allData, setAllData] = useState([]);

    const resatEverything = () => {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirm("");
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(name.toString().length >=15 ){}
        else{
            throw new Error ("Please Enter minimum 15 character in name");
        }
      
        if(phone.toString().length === 10){}
        else{
            throw new Error ("Mobile number is must be 10 number long and indian only ");
        }
        if(password === confirm){}
        else{
            throw new Error ("Please enter both password same");
        }
            
     

        if ((name.toString().length>=15) && email && phone && password && confirm) {
            const newData = {
                id: new Date().getTime().toString(), name, email, phone, password, confirm
            };
            setAllData([...allData, newData]);
            resatEverything();


            



        }else{
            alert("Please fill all the data");
        }

    

    }

    return (
        <>
            <h1>SignUp</h1>
            <div className="photo">
                <h1>Photo +</h1>
            </div>
            <div className="input_img_flex">
                <form action="" className="all_inputs">
                    <label htmlFor="name" className="lables" id="name"  >Name</label>
                    <input className="all_input" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email" className="lables" id="email" autoComplete="off" >Email</label>
                    <input className="all_input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="phone" className="lables" id="phone" autComplete="off" >PhoneNo</label>
                    <input className="all_input" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <label htmlFor="pass" className="lables" id="pass" autComplete="off" >Password</label>
                    <input className="all_input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="confirm" className="lables" id="confirm" autComplete="off" >Confirm Password</label>
                    <input className="all_input" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />

                    <div className="btns">
                        <button type="submit" className="submit" onClick={submitHandler}>Submit</button>
                        <button className="resat" onClick={resatEverything}>Resat</button>
                    </div>

                </form><br /><br />

                <div>
                    {
                        allData.map((curElem) => {
                            const { id, name, email, phone, password, confirm } = curElem
                            return (
                                <div key={id}>
                                    <p>{name}</p>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                    <p>{password}</p>
                                    <p>{confirm}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="girl_img">
                    <img src={image} alt="girl with computer" />
                </div>
            </div>


        </>
    );
}

export default Form;