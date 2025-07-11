// 4 - Template Expression

const TemplateExpression = () => {
    const name = "Matheus"

    const data = {
        age: 31,
        job: "Programador"
    }

  return (
    <div>
        A soma é {2 + 2}
        <h3>Bem vindo, {name}!</h3>
        <p>Sua idade é {data.age} e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression