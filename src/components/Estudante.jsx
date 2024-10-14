
function Estudante(props){

    let aluno = props.matriculado

    if(aluno == true){
        return <h1>Você é um estudante</h1>
    }
    else{
        return <h1>Você não é aluno</h1>
    }
}

export default Estudante