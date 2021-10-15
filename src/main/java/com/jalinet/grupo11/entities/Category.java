/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jalinet.grupo11.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author JaliNet
 */
@Entity
@Table(name="category")
public class Category implements Serializable {
        @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
        private String name;

        @OneToMany(cascade={CascadeType.PERSIST},mappedBy= "category")
        @JsonIgnoreProperties("category")
        private List<Custome>  costumes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Custome> getCostumes() {
        return costumes;
    }

    public void setCostumes(List<Custome> costumes) {
        this.costumes = costumes;
    }
    
}
