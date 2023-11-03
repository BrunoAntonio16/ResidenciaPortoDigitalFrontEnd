import TableItem from "../TableItem/TableItem";

function Table(props) {
    return (
        <>
            <table>
                <thead>
                    <th>Aluno</th>
                    <th>Turma</th>
                    <th>Turno</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        props.Item.map((element) => {
                            return (<TableItem aluno={element.aluno} turma={element.turma} turno={element.turno} email={element.email}/>);
                         }) 
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;
