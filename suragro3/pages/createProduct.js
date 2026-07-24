"use strict";

export default function CreateProduct() {
    return `
        <section class="page">

            <header class="page-header">
                <div>
                    <h2>Crear producto</h2>
                    <p>Registrar un nuevo producto agrícola.</p>
                </div>

                <button class="button-primary">
                    Guardar producto
                </button>
            </header>

            <form class="page">

                <section class="card">

                    <div class="card-header">
                        <h3>Información general</h3>
                    </div>

                    <div class="filters">

                        <div class="input-group">
                            <label for="name">Nombre comercial</label>
                            <input id="name" type="text" placeholder="Ej. Roundup">
                        </div>

                        <div class="input-group">
                            <label for="ingredient">Ingrediente activo</label>
                            <input id="ingredient" type="text">
                        </div>

                        <div class="input-group">
                            <label for="category">Categoría</label>
                            <select id="category">
                                <option>Herbicida</option>
                                <option>Insecticida</option>
                                <option>Fungicida</option>
                                <option>Fertilizante</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        <div class="input-group">
                            <label for="manufacturer">Fabricante</label>
                            <input id="manufacturer" type="text">
                        </div>

                        <div class="input-group">
                            <label for="presentation">Presentación</label>
                            <input id="presentation" type="text" placeholder="Ej. Frasco de 1 L">
                        </div>

                        <div class="input-group">
                            <label for="unit">Unidad de medida</label>
                            <select id="unit">
                                <option>Litros</option>
                                <option>Mililitros</option>
                                <option>Kilogramos</option>
                                <option>Gramos</option>
                                <option>Unidades</option>
                            </select>
                        </div>

                        <div class="input-group">
                            <label for="description">Descripción</label>
                            <textarea id="description" rows="4"></textarea>
                        </div>

                    </div>

                </section>

                <section class="card">

                    <div class="card-header">
                        <h3>Información agrícola</h3>
                    </div>

                    <div class="filters">

                        <div class="input-group">
                            <label for="crops">Cultivos</label>
                            <input
                                id="crops"
                                type="text"
                                placeholder="Separados por comas">
                        </div>

                        <div class="input-group">
                            <label for="pests">Plagas</label>
                            <input
                                id="pests"
                                type="text"
                                placeholder="Separadas por comas">
                        </div>

                        <div class="input-group">
                            <label for="diseases">Enfermedades</label>
                            <input
                                id="diseases"
                                type="text"
                                placeholder="Separadas por comas">
                        </div>

                        <div class="input-group">
                            <label for="weeds">Malezas</label>
                            <input
                                id="weeds"
                                type="text"
                                placeholder="Separadas por comas">
                        </div>

                    </div>

                </section>

                <div style="display:flex;justify-content:flex-end;gap:12px;">

                    <button type="button" class="btn btn-secondary">
                        Cancelar
                    </button>

                    <button type="submit" class="button-primary">
                        Guardar producto
                    </button>

                </div>

            </form>

        </section>
    `;
}