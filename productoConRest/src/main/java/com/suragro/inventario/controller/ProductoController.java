package com.suragro.inventario.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.suragro.inventario.classes.Producto;
import com.suragro.inventario.database.ProductoRepository;

@Controller //for all of the inventory view queries, and pretty much all of it's functions.
@RequestMapping("/productos")
public class ProductoController {
    private final ProductoRepository repository;

    public ProductoController(ProductoRepository repository) {
        this.repository = repository;
    }


    //entry
    @GetMapping
    public String listar(Model model) {

        model.addAttribute("producto", new Producto());
        model.addAttribute("productos", repository.findAll());

        return "productos";
    }


    @PostMapping(params = "action=add")
    public String agregar(@ModelAttribute Producto producto) {
        repository.save(producto);

        return "redirect:/productos";
    }


    @PostMapping(params = "action=delete")
    public String eliminar(@RequestParam Integer idProducto) {
        repository.deleteById(idProducto);

        return "redirect:/productos";
    }


    //Right now it only searches by name. Quite possibly an inminent refactor with specifications... if i ever care to understand them
    @PostMapping(params = "action=search")
    public String buscar(@ModelAttribute Producto producto, Model model) {
        List<Producto> productos;

        if (producto.getNombre() != null &&
            !producto.getNombre().isBlank()) {

            productos = repository.findByNombreContainingIgnoreCase(
                    producto.getNombre());

        }
        else {
            productos = repository.findAll();
        }

        model.addAttribute("producto", producto);
        model.addAttribute("productos", productos);

        return "productos";
    }

}