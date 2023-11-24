import "./Table.css";

const nameItensHeadTable = [
    {
        text: "id",
    },

    {
        text: "Nome",
    },

    {
        text: "Email",
    },

    {
        text: "Faculdade",
    },

    {
        text: "Turma",
    },

    {
        text: "Turno",
    },

    {
        text: "Squad"
    },

    {
        text: "Functions"
    }
];

const nameItensBodyTable = [
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
]
function Table(props){
    return(
        <>
           <div class="container mt-5">
                <div className='caixa d-block justify-content-center align-items-center'>
                    <nav class="nav nav-tabs justify-content-start">
                        <a href="#" class="nav-link text-black " id='tableAluno'>Aluno</a>
                        <a href="#" class="nav-link text-black " id='tableMentor'>Mentor</a>
                        <a href="#" class="nav-link text-black " id='tableFaculdade'>Faculdade</a>
                        <a href="#" class="nav-link text-black " id='tableEmpresa'>Empresa</a>
                    </nav>
                    <table class="table table-responsive table-hover table-bordered border-dark text-center">
                        <thead className="table-dark">
                            <tr className="text-uppercase">
                                {
                                    nameItensHeadTable.map((element) => {
                                        return (<th scope="col">{element.text}</th>);
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                nameItensBodyTable.map((element) => {
                                    return (
                                        <tr>
                                            <td>{element.id}</td>
                                            <td>{element.nome}</td>
                                            <td>{element.email}</td>
                                            <td>{element.faculdade}</td>
                                            <td>{element.turma}</td>
                                            <td>{element.turno}</td>
                                            <td>{element.squad}</td>
                                            <td>
                                                <button className={element.typebuttonAdd}>{element.BAdd}</button>
                                                <button className={element.typebuttonEx}>{element.BExclude}</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>    
            </div>
        </>
    );
}

export default Table;