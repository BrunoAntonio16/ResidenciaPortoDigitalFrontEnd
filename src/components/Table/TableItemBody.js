function TableItemBody(props) {
    return(
        <>
           <tr>
                <td>{props.id}</td>
                <td>{props.nome}</td>
                <td>{props.email}</td>
                <td>{props.faculdade}</td>
                <td>{props.turma}</td>
                <td>{props.noite}</td>
                <td>{props.squad}</td>
                <td>
                    <button className={props.typebuttonAdd}>{props.BAdd}</button>
                    <button className={props.typebuttonEx}>{props.BExclude}</button>
                </td>
            </tr> 
        </>
    );
}