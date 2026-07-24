package com.suragro.inventario.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//first handler for main page. Basically a landing page
@Controller
public class IndexController {
    @GetMapping("/")
    public String home() {
        return "index"; // resolves to templates/index.html
    }
}