package com.softarc.eternal.holiday.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Optional;

@Entity
public class Holiday {
    @Id
    @GeneratedValue
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
