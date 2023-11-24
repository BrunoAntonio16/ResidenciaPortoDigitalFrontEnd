import TableItemHead from '../components/TableItemHead';
import './Lista.css';

function Lista(props){
    return(
        <>
            <div class="container-fluid">
                <div className='caixa'>
                    <nav class="nav nav-underline justify-content-start">
                        <a href="#" class="nav-link text-black " id='tableAluno'>Aluno</a>
                        <a href="#" class="nav-link text-black " id='tableMentor'>Mentor</a>
                        <a href="#" class="nav-link text-black " id='tableFaculdade'>Faculdade</a>
                        <a href="#" class="nav-link text-black " id='tableEmpresa'>Empresa</a>
                    </nav>
                    <table class="table table-hover">
                        <thead className=''>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Faculdade</th>
                                <th scope="col">Turma</th>
                                <th scope="col">Turno</th>
                                <th scope="col">Squad</th>
                                <th scope="col">Functions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Bruno Antonio</td>
                                <td>brunoantonio0210@gmail.com</td>
                                <td>FICR</td>
                                <td>A-343</td>
                                <td>NOITE</td>
                                <td>30</td>
                                <td>
                                    <button className='btn btn-success m-2'>Adicionar</button>
                                    <button className='btn btn-danger m-2'>Excluir</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Bruno Antonio</td>
                                <td>brunoantonio0210@gmail.com</td>
                                <td>FICR</td>
                                <td>A-343</td>
                                <td>NOITE</td>
                                <td>30</td>
                                <td>
                                    <button className='btn btn-success m-2'>Adicionar</button>
                                    <button className='btn btn-danger m-2'>Excluir</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Bruno Antonio</td>
                                <td>brunoantonio0210@gmail.com</td>
                                <td>FICR</td>
                                <td>A-343</td>
                                <td>NOITE</td>
                                <td>30</td>
                                <td>
                                    <button className='btn btn-success m-2'>Adicionar</button>
                                    <button className='btn btn-danger m-2'>Excluir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>    
            </div>
               
        </>
    );
}

export default Lista;