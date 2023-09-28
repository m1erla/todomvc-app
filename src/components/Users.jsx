import axios from 'axios'
import {useEffect, useState} from 'react'




function Users() {
    const [user, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)

 
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUser(res.data))
    .catch((e) => console.log(e))
    .finally(() => setLoading(false))
  }, [])

    return (
    <div >
        <h1>USER</h1>

        {isLoading && <div>Loading...</div>}
        
        {
            user.map((user) => (
                <div key={user.id}>{user.name} "    " {user.username} </div>
            ))
        }
      
        
        </div>
  )
}

export default Users