import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Jacoby"])
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Pedro", age: 20},
        {id: 3, name: "Jacoby", age: 19},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((users) => randomNumber !== users.id))
    }

  return (
    <div>
        {/* 4-  Render sem key*/}
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.name} - {user.age}</li>
                ))}
        </ul>
        {/* 6 - Previous State */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender