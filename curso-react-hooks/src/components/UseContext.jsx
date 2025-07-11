import { createContext, useContext } from "react";

const UserContext = createContext();

function Profile() {
    const user = useContext(UserContext);
    return <p>Usuário: {user.name}</p>
}

function App(){
    return(
        <UserContext.Provider value={{name: `Luiz`}}>
            <Profile />
        </UserContext.Provider>
    );
}

export default App;
