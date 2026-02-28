package com.softarc.eternal.holiday.entity;

import jakarta.persistence.*;

import java.util.Optional;

@Entity
@Table
public class Holiday {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;

    String name;

    String description;

    String coverPath;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Optional<String> getCoverPath() {
        return Optional.ofNullable(coverPath);
    }

    public void setCoverPath(String coverPath) {
        this.coverPath = coverPath;
    }
}
