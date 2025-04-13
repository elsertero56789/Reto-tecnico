/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.prueba.bus.backend.repository;

import com.prueba.bus.backend.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Fabrizio NP.
 */
@Repository
public interface BusRepository extends JpaRepository<Bus, Long>{
}
