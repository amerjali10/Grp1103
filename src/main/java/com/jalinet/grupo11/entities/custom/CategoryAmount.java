/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jalinet.grupo11.entities.custom;

import com.jalinet.grupo11.entities.Category;

/**
 *
 * @author JaliNet
 */
public class CategoryAmount {
    Category category;
    Long amountCat;

    public CategoryAmount(Category category, Long amountCat) {
        this.category = category;
        this.amountCat = amountCat;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getAmountCat() {
        return amountCat;
    }

    public void setAmountCat(Long amountCat) {
        this.amountCat = amountCat;
    }

    
 
    
    
}
