"use strict";

export default function UserList() {
    return `<header class="page-header">
                <div>
                    <h2>Usuarios</h2>
                    <p>Gestione los usuarios registrados.</p>
                </div>
            </header>

            <section class="card">
                <div class="search-box">
                    <input
                        type="text"
                        placeholder="Buscar por ID o nombre">
                </div>

                <div class="card-header">
                    <h3>Usuarios registrados</h3>
                </div>

                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-date">
                            ID: 1001245789
                        </div>

                        <div class="activity-content">
                            <h4>Juan Pérez</h4>
                            <p>
                                Sede: Villavicencio<br>
                                Estado: Activo
                            </p>

                            <br>
                            <button class="button-primary">
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                </div>

            </section>`;
}