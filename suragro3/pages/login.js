"user strict";

export default function Login() {
    return `<body>

    <main class="login-page">

        <section class="card login-card">

            <h1>SURAGRO</h1>
            <p>Centralized Inventory System</p>


                <div class="input-group">
                    <label for="username">Usuario</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Ingrese su usuario">
                </div>

                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Ingrese su contraseña">
                </div>

                <br>
                <button class="button-primary">
                    Iniciar sesión
                </button>
        </section>

    </main>

    </body>`
}