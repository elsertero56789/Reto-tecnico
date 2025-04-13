/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/RestController.java to edit this template
 */
package com.prueba.bus.backend.controller;

import com.prueba.bus.backend.dto.BusDTO;
import com.prueba.bus.backend.model.Bus;
import com.prueba.bus.backend.services.BusService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author darksgamer
 */
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST}) // Permite solo este origen
@RequestMapping("/bus")
public class BusController {
   @Autowired
   private BusService busservice;
   
    @GetMapping
    public ResponseEntity<Page<BusDTO>> getBus(@RequestParam(defaultValue = "0") int paginacion)
    {
        Page<BusDTO> buses = busservice.obtenerBuses(paginacion);
        return ResponseEntity.ok(buses);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Bus>> getBusById(@PathVariable Long id)
    {
       Optional<Bus> bus = busservice.obtenerBusPorId(id);
        return ResponseEntity.ok(bus);
    }
}
