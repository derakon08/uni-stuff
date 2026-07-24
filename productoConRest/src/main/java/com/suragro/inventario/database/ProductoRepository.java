package com.suragro.inventario.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.suragro.inventario.classes.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> { //basic spring boot built-ins

    List<Producto> findByNombreContainingIgnoreCase(String nombre);

    List<Producto> findByProveedor(String proveedor);

    List<Producto> findByTipo(String tipo);

    List<Producto> findByIngredienteActivoContainingIgnoreCase(String ingredienteActivo);

    List<Producto> findByConcentracion(String concentracion);

    List<Producto> findByPresentacion(String presentacion);

}