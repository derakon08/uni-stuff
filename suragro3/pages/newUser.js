"use strict";

export default function NewUser() {
    return `
        <section class="page">

            <header class="page-header">
                <div>
                    <h2>Nuevo usuario</h2>
                    <p>Registre un nuevo usuario en el sistema.</p>
                </div>
            </header>

            <section class="card">

                <div class="card-header">
                    <h3>Información del usuario</h3>
                </div>

                    <div class="input-group">
                        <label for="name">Nombre</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ingrese el nombre del usuario">
                    </div>

                    <div class="input-group">
                        <label for="identification">Identificación</label>
                        <input
                            id="identification"
                            type="text"
                            placeholder="Ingrese el número de identificación">
                    </div>

                    <div class="input-group">
                        <label for="branch">Sede</label>
                        <select id="branch">
                            <option selected disabled>Seleccione una sede</option>
                            <option>Villavicencio</option>
                            <option>Bogotá</option>
                            <option>Yopal</option>
                        </select>
                    </div>

                    <br>
                    <button class="button-primary">
                        Registrar usuario
                    </button>
            </section>

        </section>
    `;
}