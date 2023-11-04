import './Lista.css';

function Lista(){
    return(
        <div className="table">
            <div className="table-title">
                <h1>Lista</h1>
            </div>
            <div className="table-menu-itens">
                <nav>
                    <ul>
                        <li><a href="#">Alunos</a></li>
                        <li><a href="#">Mentores</a></li>
                        <li><a href="#">Empresas</a></li>
                        <li><a href="#">Faculdades</a></li>
                    </ul>
                </nav>
            </div>
            <div className="table-filter">
                <input placeholder="Pesquisar"/>
            </div>
            <div className="table-body-itens">
                <table>
                    <thead>
                        <tr>
                            <th>@</th>
                            <th>@</th>
                            <th>@</th>
                            <th>@</th>
                            <th>@</th>
                            <th>@</th>
                            <th>@</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                            <td>#</td>
                        <td>
                            <button>Editar</button>
                            <button>Remover</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-button">
                <button>Novo usuario</button>
            </div>
        </div>
    );
}

export default Lista;