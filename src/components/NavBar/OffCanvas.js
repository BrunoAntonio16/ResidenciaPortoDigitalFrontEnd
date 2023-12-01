function OffCanvas(){
    return(
        <>
            <div class="offcanvas offcanvas-start bg-black" tabindex="-1" id="sidebar" aria-labelledby="sidebar-label">
                <div class="offcanvas-header">
                    <div class="offcanvas-title" id="sidebar-label"><h1 class="text-white">Functions</h1></div>
                </div>
                <div class="">
                    <ul class="nav d-block">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/Lista" role="button">Lista</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#" role="button">Agenda</a>
                        </li>
                        <li class="nav-item">
                            <button className="btn btn-danger" href="/">Sair</button>
                        </li> 
                    </ul>
                </div>
            </div>
        </>
    );
}

export default OffCanvas;