"use strict";

export default function UserDetail() {
    return `
        <section class="page">

            <header class="page-header">
                <div>
                    <h2>Detalles Del Usuario</h2>
                </div>
            </header>

            <section class="card">
                <div class="card-header">
                    <h3>Información general</h3>
                </div>

                <div class="activity-item">
                    <div class="activity-content">
                        <h4>Ciudad</h4>
                        <p>Villavicencio</p>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="activity-content">
                        <h4>Administrador</h4>
                        <p>Juan Pérez</p>
                    </div>
                </div>

                <div class="activity-item">
                    <div class="activity-content">
                        <h4>Estado De La Cuenta</h4>
                        <p>Activa</p>
                    </div>
                </div>

                <br>
                <button class="button-primary button-red">
                    Desactivar Cuenta
                </button>
            </section>
        </section>
    `;
}