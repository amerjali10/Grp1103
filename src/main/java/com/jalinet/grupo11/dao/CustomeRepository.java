/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jalinet.grupo11.dao;

import com.jalinet.grupo11.entities.Custome;
import com.jalinet.grupo11.entities.CustomeCrud;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JaliNet
 */
@Repository
public class CustomeRepository {
  @Autowired
  private CustomeCrud customeCrudRepository;
  
  public List<Custome> getAll() {return (List<Custome>) customeCrudRepository.findAll();};
  
  public Optional<Custome> getCustome(int id) {return customeCrudRepository.findById(id);};
  
  public Custome save(Custome custome) { return customeCrudRepository.save(custome);};
  
  public void delete(Custome custome ) {customeCrudRepository.delete(custome);};

    public List<Object[]> getTopByCategory(){
        return customeCrudRepository.countTotalCustomeByCategory();
    }
  
}

