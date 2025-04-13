/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.prueba.bus.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author darksgamer
 */


@Entity
@Table(name = "Marcas")
public class Marca {
    
    @Id
    @Column(name = "Id")
    private int Id;
    
    
    @Column(name = "Marca")
    private String marca;

    @OneToMany(mappedBy = "marcaId", cascade = {CascadeType.ALL})
    @JsonManagedReference
    private List<Bus> buses = new ArrayList<>();
    
    
    
    public int getId() {
        return Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public List<Bus> getBuses() {
        return buses;
    }

    public void setBuses(List<Bus> buses) {
        this.buses = buses;
    }
    

}
