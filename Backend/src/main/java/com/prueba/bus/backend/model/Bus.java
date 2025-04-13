/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.prueba.bus.backend.model;

 
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import lombok.Setter;
import lombok.Getter;

/**
 *
 * @author Fabrizio NP.
 */


@Entity
@Table(name = "Bus", schema = "busDB")
public class Bus {
    
    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    
    @Column(name = "Numero_de_Bus")
    private String numBus;
    
    @Column(name = "Placa", unique = true)
    @Size(max = 6)
    private String placa;
    
    @Column(name = "FechaCreacion", columnDefinition = "DATETIME")
    private LocalDateTime fechaCreacion = LocalDateTime.now(ZoneOffset.UTC);
    
    @Column(name = "Caracteristicas")
    private String caracteristicas;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MarcaBusId")
    @JsonBackReference
    private Marca marcaId;
    
    @Column(name = "esActivo")
    private boolean isActive;

    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public String getNumBus() {
        return numBus;
    }

    public void setNumBus(String numBus) {
        this.numBus = numBus;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Marca getMarcaId() {
        return marcaId;
    }

    public void setMarcaId(Marca marcaId) {
        this.marcaId = marcaId;
    }

    public boolean isIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}
