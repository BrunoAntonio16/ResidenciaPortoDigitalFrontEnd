import "./Form.css";

function Form() {
  return (
    <>
      <div class="container-fluid">
        <form class="mx-auto" action="ValidarLoginAdmin.jsp" method="post">
          <h1 class="text-white">
            Login
          </h1>
          <div class="mb-3">
            <label for="email" class="text-white">
              Email
            </label>
            <input type="text" class="form-control text-white" id="login" name="login"/>
          </div>
          <div class="mb-3">
            <label for="senha" class="text-white ">
              Email
            </label>
            <input type="password" class="form-control text-white" id="senha" name="senha"/>
          </div>
          <button type="submit" class="btn btn-primary text-white">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Form;