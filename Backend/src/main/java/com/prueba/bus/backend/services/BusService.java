/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.prueba.bus.backend.services;

import com.prueba.bus.backend.dto.BusDTO;
import com.prueba.bus.backend.model.Bus;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.prueba.bus.backend.repository.BusRepository;
import java.util.stream.Collectors;

/**
 *
 * @author darksgamer
 */
@Service
public class BusService {
    
    
    @Autowired
    private BusRepository busrepository;
    
    
    public Page<BusDTO> obtenerBuses(int paginacion)
    {
        Pageable pageable = PageRequest.of(paginacion, 6);
        Page<Bus> busesPage = busrepository.findAll(pageable);
        
        return busesPage.map(bus -> new BusDTO(bus));
    }
    
    public Optional<Bus> obtenerBusPorId(Long id)
    {
        return busrepository.findById(id);
    }
    
}
