"use strict";

export default function Dashboard() {

    return `

<section class="page">
    <header class="page-header">
        <div>
            <h2>

                Dashboard

            </h2>

            <p>

                Resumen general del estado del inventario.

            </p>

        </div>

        <div class="dashboard-site">
            <label for="site-selector">

                Sede

            </label>

            <select id="site-selector">
                <option selected>

                    Villavicencio

                </option>

                <option>

                    Bogotá

                </option>

                <option>

                    Medellín

                </option>

                <option>

                    Cali

                </option>
            </select>
        </div>
    </header>

    <section class="page-body">
        <section class="cards">
            <article class="card stat-card">
                <span class="material-symbols-outlined">

                    warning

                </span>

                <h3>

                    6

                </h3>

                <p>

                    Productos bajo mínimo

                </p>

            </article>

            <article class="card stat-card">
                <span class="material-symbols-outlined">

                    schedule

                </span>

                <h3>

                    2

                </h3>

                <p>

                    Productos próximos a vencer

                </p>

            </article>

            <article class="card stat-card">
                <span class="material-symbols-outlined">

                    inventory

                </span>

                <h3>

                    1

                </h3>

                <p>

                    Productos sin existencias

                </p>
            </article>
        </section>

        <section class="dashboard-grid">
            <article class="card">
                <div class="card-header">
                    <h3>

                        Actividad reciente

                    </h3>

                    <select>
                        <option>

                            Hoy

                        </option>

                        <option selected>

                            Últimos 7 días

                        </option>

                        <option>

                            Últimos 30 días

                        </option>
                    </select>
                </div>

                <div class="activity-list">
                    <article class="activity-item">
                        <div class="activity-date">

                            09/07/2026

                        </div>

                        <div class="activity-content">
                            <h4>

                                Glifosato 480SL

                            </h4>

                            <p>

                                Se registró una entrada de <strong>25 unidades</strong>.

                            </p>
                        </div>
                    </article>

                    <article class="activity-item">
                        <div class="activity-date">

                            09/07/2026

                        </div>

                        <div class="activity-content">
                            <h4>

                                Fertilizante NPK

                            </h4>

                            <p>

                                Se registró una salida de <strong>10 unidades</strong>.

                            </p>
                        </div>
                    </article>

                    <article class="activity-item">
                        <div class="activity-date">

                            08/07/2026

                        </div>

                        <div class="activity-content">
                            <h4>

                                Herbicida X

                            </h4>

                            <p>

                                Se registró una entrada de <strong>8 unidades</strong>.

                            </p>
                        </div>
                    </article>
                </div>
            </article>

            <article class="card">
                <div class="card-header">
                    <h3>

                        Alertas

                    </h3>
                </div>

                <ul class="alerts">
                    <li>
                        <span class="material-symbols-outlined">

                            warning

                        </span>

                        <span>

                            Herbicida X se encuentra por debajo del stock mínimo.

                        </span>
                    </li>

                    <li>
                        <span class="material-symbols-outlined">

                            schedule

                        </span>

                        <span>

                            Fungicida A vence en 12 días.

                        </span>
                    </li>

                    <li>
                        <span class="material-symbols-outlined">

                            inventory

                        </span>

                        <span>

                            El producto Y no tiene existencias disponibles.

                        </span>
                    </li>
                </ul>
            </article>
        </section>
    </section>
</section>
`;

}