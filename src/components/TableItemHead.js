function TableItemHead(props) {
    return(
        <>
            <thead>
                <tr className="principal-line">
                    <th scope="col">{props.id}</th>
                </tr>
            </thead>
        </>
    );
}

export default TableItemHead;