package com.softarc.eternal.holiday.repository;

import jakarta.data.repository.CrudRepository;
import jakarta.data.repository.Repository;
import com.softarc.eternal.holiday.entity.Holiday;

@Repository
public interface HolidayRepository extends CrudRepository<Holiday, Long> {
}
