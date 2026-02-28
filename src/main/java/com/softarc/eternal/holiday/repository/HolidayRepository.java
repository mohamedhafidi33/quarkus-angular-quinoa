package com.softarc.eternal.holiday.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import com.softarc.eternal.holiday.entity.Holiday;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class HolidayRepository implements PanacheRepository<Holiday> {
}
