import './Form.css';

function Form() {
    return(
        <> 
         <div className="form-box2">
            <div className="form">
                <div className="form-h1">
                    <h1>Login</h1>
                </div>
                <form>
                    <div className="form-email">
                        <label>Email:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-senha">
                        <label>Senha:</label>
                        <input type="password"/>
                    </div>
                </form>
                <div className="form-button">
                    <button>Entrar</button>
                </div>
            </div> 
         </div>     
        </>
    );
}

export default Form;