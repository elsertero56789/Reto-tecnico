/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.prueba.bus.backend.dto;

import com.prueba.bus.backend.model.Bus;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import lombok.Getter;

/**
 *
 * @author Fabrizio NP.
 */
@Getter
public class BusDTO {
    private Long Id;
    private String numBus;
    private String placa;
    private LocalDateTime fechaCreacion = LocalDateTime.now(ZoneOffset.UTC);; // Solo el nombre, no toda la entidad Marca
    private String caracteristicas;
    private String nomMarca;
    private boolean isActive;
    public BusDTO(Bus bus) {
        this.Id = bus.getId();
        this.numBus = bus.getNumBus();
        this.placa = bus.getPlaca();
        this.fechaCreacion = bus.getFechaCreacion();
        this.caracteristicas = bus.getCaracteristicas();
        this.nomMarca = bus.getMarcaId().getMarca();
        this.isActive = bus.isIsActive();
        
        
        
    }

    public Long getId() {
        return Id;
    }

    public String getNumBus() {
        return numBus;
    }

    public String getPlaca() {
        return placa;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public String getNomMarca() {
        return nomMarca;
    }

    public boolean isIsActive() {
        return isActive;
    }


}

