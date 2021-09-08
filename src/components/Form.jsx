import {useState} from 'react';

const initState = {
    username: "",
    age:"",
    email:""
}
export default function Form(){
   // const [text, setText]
    const [formData, setFormData] = useState(initState)
    

    const handleChange = (e) => {
        console.log(e.target.name);
        // if(e.target.name === "username")
        // {
        //     setFormData({...formData, username: e.target.value})
        // }

        const {name, value} = e.target;

        setFormData({...formData, [name] : value})
        //[name] -- computed property name
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="username" placeholder="Enter your Name" />
            <input onChange={handleChange} type="number" name="age" placeholder="Enter your age" />
            <input onChange={handleChange} type="email" name="email" placeholder="Enter your Email" />
            <input type="submit" value="submit"/>
        </form>
    </div>
}