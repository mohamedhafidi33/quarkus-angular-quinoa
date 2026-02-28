package com.softarc.eternal.holiday.dto;

public record HolidayDTO(
        Long id,
        String name,
        String description,
        Boolean coverPath) {
}
