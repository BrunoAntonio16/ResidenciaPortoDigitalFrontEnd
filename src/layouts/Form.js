import "./Form.css";

function Form() {
  return (
    <>
      <div className="container-fluid">
        <form className="mx-auto">
          <h1 className="text-center">Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;