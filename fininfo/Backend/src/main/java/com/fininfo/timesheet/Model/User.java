package com.fininfo.timesheet.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Users")
// @Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "email")
    private String email;

    @Column(name = "date_de_naissance")
    private String date_de_naissance;

    // @Column(name = "mot_de_passe")
    // private String mot_de_passe;

    @Column(name = "num_tel")
    private int num_tel;

    @Column(name = "solde")
    private int solde;

    @Column(name = "age")
    private int age;

    @Column(name = "date_embauche")
    private String date_embauche;

    @Enumerated(EnumType.STRING)
    private Role roles;

    @Enumerated(EnumType.STRING)
    private Type_contrat type_contrat;

    @Enumerated(EnumType.STRING)
    private Sexe sexe;

}
