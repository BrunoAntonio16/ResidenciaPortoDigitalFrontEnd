import TableItem from "../TableItem/TableItem";

const nameItensHeadTable = [
    {   text: "id"},
    {   text: "Nome"},
    {   text: "Email"},
    {   text: "Faculdade"},
    {   text: "Turma"},
    {   text: "Turno"},
    {   text: "Squad"},
    {   text: "Functions"}
]

const nameItensBodyTable = [
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
    {   id: "1", nome: "Bruno Antonio", email: "brunoantonio0210@gmail.com", faculdade: "FICR", turma: "Turma", turno: "Noite", squad: "02", BAdd: "Adicionar", BExclude: "Excluir", typebuttonAdd: "btn btn-success",  typebuttonEx: "btn btn-danger"},
]

function Table(){
    return(
        <>
            <div className="container-fluid mt-3">
                <div className="row table-menu-itens me-auto">
                    <nav>
                        <ul className='mb-0 py-3 px-2'>
                            <li><a href="#">Aluno</a></li>
                            <li><a href="#">Mentor</a></li>
                            <li><a href="#">Empresa</a></li>
                            <li><a href="#">Faculdade</a></li>
                        </ul>
                    </nav>
                </div>
                <table>
                    <thead>
                        {
                            nameItensHeadTable.map((element) => {
                                return (<TableItem id={element.id} nome={element.nome} email={element.email} faculdade={element.faculdade} turma={element.turma} turno={element.turno} squad={element.squad}/>);
                            }) 
                        }
                    </thead>
                    <tbody>
                        {
                            nameItensBodyTable.map((element) => {
                                return (<TableItemBody id={element.id} nome={element.nome} email={element.email} faculdade={element.faculdade} turma={element.turma} turno={element.turno} squad={element.squad} BAadd={element.BAadd} BExclude={element.BExclude} typebuttonAdd={element.typebuttonAdd} typebuttonEx={element.typebuttonEx}/>);
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
