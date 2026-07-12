"use strict";

export default function inventory() {

    return `

<section class="page">

    <header class="page-header">

        <div>

            <h2>

                Inventario

            </h2>

            <p>

                Consulta y administración de los productos registrados.

            </p>

        </div>

    </header>

    <section class="cards inventory-layout">

        <article class="card">

            <div class="card-header">

                <h3>

                    Filtros

                </h3>

            </div>

            <div class="filters">

                <div class="input-group">

                    <label for="filter-name">

                        Nombre

                    </label>

                    <input
                        id="filter-name"
                        type="text"
                        placeholder="Buscar producto">

                </div>

                <div class="input-group">

                    <label for="filter-type">

                        Tipo

                    </label>

                    <select id="filter-type">

                        <option selected>Todos</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-stock">

                        Existencias

                    </label>

                    <select id="filter-stock">

                        <option selected>Todas</option>
                        <option>Con existencias</option>
                        <option>Bajo mínimo</option>
                        <option>Sin existencias</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-provider">

                        Proveedor

                    </label>

                    <select id="filter-provider">

                        <option selected>Todos</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-crop">

                        Cultivo

                    </label>

                    <select id="filter-crop">

                        <option selected>Todos</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-plague">

                        Plaga

                    </label>

                    <select id="filter-plague">

                        <option selected>Todas</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-illness">

                        Enfermedad

                    </label>

                    <select id="filter-illness">

                        <option selected>Todas</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-weed">

                        Maleza

                    </label>

                    <select id="filter-weed">

                        <option selected>Todas</option>

                    </select>

                </div>

                <div class="input-group">

                    <label for="filter-ingredient">

                        Ingrediente activo

                    </label>

                    <select id="filter-ingredient">

                        <option selected>Todos</option>

                    </select>

                </div>

            </div>

            <div class="card-header">

                <button class="btn btn-secondary">

                    Limpiar filtros

                </button>

                <span>

                    57 productos encontrados

                </span>

            </div>

        </article>

        <article class="card">

            <div class="card-header">

                <h3>

                    Productos

                </h3>

            </div>

            <div class="inventory-list">

                <button class="inventory-item">

                    <div>

                        <h4>

                            Glifosato 480 SL

                        </h4>

                        <p>

                            Herbicida

                        </p>

                    </div>

                    <div class="inventory-stock">

                        <strong>

                            25

                        </strong>

                        <span>

                            unidades

                        </span>

                    </div>

                </button>

                <button class="inventory-item">

                    <div>

                        <h4>

                            Fertilizante NPK

                        </h4>

                        <p>

                            Fertilizante

                        </p>

                    </div>

                    <div class="inventory-stock">

                        <strong>

                            14

                        </strong>

                        <span>

                            unidades

                        </span>

                    </div>

                </button>

                <button class="inventory-item">

                    <div>

                        <h4>

                            Insecticida A12

                        </h4>

                        <p>

                            Insecticida

                        </p>

                    </div>

                    <div class="inventory-stock">

                        <strong>

                            8

                        </strong>

                        <span>

                            unidades

                        </span>

                    </div>

                </button>

            </div>

        </article>

    </section>

</section>

`;

}