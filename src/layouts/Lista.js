import './Lista.css';

function Lista(){
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
                <table class="table table-responsive-sm table-bordered table-hover text-center">
                    <thead>
                        <tr className="principal-line">
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Faculadade</th>
                            <th scope="col">Turma</th>
                            <th scope="col">Turno</th>
                            <th scope="col">Squad</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Mentor</th>
                            <th scope="col">Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bruno Antonio</td>
                            <td>brunoantonio0210@gmail.com</td>
                            <td>FICR</td>
                            <td>3-A</td>
                            <td>Noite</td>
                            <td>32</td>
                            <td>Bidweb</td>
                            <td>Robson José</td>
                            <td className='functions'>
                                <a href='#'><i class="fa-solid fa-square-plus"></i></a>
                                <a href='#'><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                            <td>Bruno Antonio</td>
                            <td>brunoantonio0210@gmail.com</td>
                            <td>FICR</td>
                            <td>3-A</td>
                            <td>Noite</td>
                            <td>32</td>
                            <td>Bidweb</td>
                            <td>Robson José</td>
                            <td className='functions'>
                                <a href='#'><i class="fa-solid fa-square-plus"></i></a>
                                <a href='#'><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                            <td>Bruno Antonio</td>
                            <td>brunoantonio0210@gmail.com</td>
                            <td>FICR</td>
                            <td>3-A</td>
                            <td>Noite</td>
                            <td>32</td>
                            <td>Bidweb</td>
                            <td>Robson José</td>
                            <td className='functions'>
                                <a href='#'><i class="fa-solid fa-square-plus"></i></a>
                                <a href='#'><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Lista;