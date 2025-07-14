import { useParams, useNavigate } from "react-router-dom";

const ContactDetail = () => {
    const {id} = useParams();

    // 6 - Redirect
    const navigate = useNavigate()
    const handleContact = () => {
        console.log("Contato enviado!")
        return navigate("/")
    }

  return (
    <div>
        <h1>Exibindo mais informações do contato: {id}</h1>

        {/* 6 - Redirect */}
        <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetail