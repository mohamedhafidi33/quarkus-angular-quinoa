package com.softarc.eternal.holiday.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import com.softarc.eternal.holiday.dto.HolidayDTO;
import com.softarc.eternal.holiday.entity.Holiday;
import com.softarc.eternal.holiday.mapper.HolidaysMapper;
import com.softarc.eternal.holiday.repository.HolidayRepository;
@ApplicationScoped
public class HolidayService {
    private final HolidayRepository holidayRepository;
    private final HolidaysMapper holidaysMapper;

    public HolidayService(HolidayRepository holidayRepository, HolidaysMapper holidaysMapper) {
        this.holidayRepository = holidayRepository;
        this.holidaysMapper = holidaysMapper;
    }

    @Transactional
    public Holiday add(HolidayDTO holidayDTO) {
        var holiday = holidaysMapper.holidayToHolidayDTO(holidayDTO);
        return holidayRepository.insert(holiday);
    }
}
