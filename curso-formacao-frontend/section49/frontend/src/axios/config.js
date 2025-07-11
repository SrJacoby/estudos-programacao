import axios from "axios"

const partyFetch = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Contenty-Type": "application/json",
    }
})

export default partyFetch