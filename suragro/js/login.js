export class Login
{
    constructor() {};
    title = "Inicio De Sesion";
    
    static LoadPage(sidebar, main_content, top_nav)
        {
            sidebar.innerHTML = '<div class="card"><h1 class="title">SurAgro Solutions</h1><h2 class="title">Sistema de visualizacion de inventario</h2></div><img src="icon.png" alt="Logo de la empresa suragro"/>';
            main_content.innerHTML = '<h1 class="title">Por favor, ingrese sus credenciales</h1><div class="card"><div><h2 class="title">Usuario</h2><input type="number"/></div><div><h2 class="title">Contraseña</h2><input type="text"/></div><div class="btn_vlist"><button type="submit" data-action="login" class="btn_standard auth_action">Confirmar</button></div></div><div class="spacer"></div>';
            top_nav.innerHTML = "";

            return title
        } 

    static AuthAction(usr_key)
    {
        usr_key = title

        return "dashboard"
    }
}