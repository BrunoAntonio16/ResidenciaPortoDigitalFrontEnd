function TableItem(props) {
    return(
        <tr>
            <td>{props.aluno}</td>
            <td>{props.turma}</td>
            <td>{props.turno}</td>
            <td>{props.email}</td>
        </tr>
    );
}

export default TableItem;