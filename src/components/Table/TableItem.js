function TableItem(props) {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.faculdade}</td>
            <td>{props.turma}</td>
            <td>{props.turno}</td>
            <td>{props.squad}</td>
            <td>{props.functions}</td>
        </tr>
    );
}

export default TableItem;