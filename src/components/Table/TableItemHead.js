function TableItemHead(props) {
    return(
        <>
            <thead>
                <tr className="principal-line">
                    <th scope="col">{props.text}</th>
                </tr>
            </thead>
        </>
    );
}

export default TableItemHead;