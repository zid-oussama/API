import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListCard from './ListCard'
import './UserList.css'

// function UserList() {
//     const [data, setData] = useState([]);// where to store the returned data
//     const [error, setError] = useState(null);// where to store the coming errors
//     useEffect(() => {
//         function fetchData() {// the function to fetch data from the api
//             fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(res => res.json())
//                 .then(res => { setData(res); console.log(data) })
//                 .catch(err => setError(err));
//         }

//         fetchData();
//     }, []);


//     return (
//         <div>
//             <ul>
//                 {data.map(el => { return <li>{el.name}</li> })}
//             </ul>
//         </div>
//     )
// }

// export default UserList





function UserList() {
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    useEffect(() => {
        const getData = () => {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => setdata(res.data))
        }
        getData()

    }, [])

    return (
        <div className='container'>


            {data.map(el => <ListCard key={el.id} info={el} />)}


        </div>
    )
}

export default UserList
