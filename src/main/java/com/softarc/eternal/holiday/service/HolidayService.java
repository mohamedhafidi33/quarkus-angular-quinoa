package com.softarc.eternal.holiday.service;

import com.softarc.eternal.holiday.exception.HolidayNotFoundException;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import com.softarc.eternal.holiday.dto.HolidayDTO;
import com.softarc.eternal.holiday.entity.Holiday;
import com.softarc.eternal.holiday.mapper.HolidaysMapper;
import com.softarc.eternal.holiday.repository.HolidayRepository;

import java.util.List;

@ApplicationScoped
public class HolidayService {
    private final HolidayRepository holidayRepository;
    private final HolidaysMapper holidaysMapper;

    public HolidayService(HolidayRepository holidayRepository, HolidaysMapper holidaysMapper) {
        this.holidayRepository = holidayRepository;
        this.holidaysMapper = holidaysMapper;
    }

    @Transactional
    public HolidayDTO add(HolidayDTO holidayDTO) {
        var holiday = holidaysMapper.holidayDTOToHoliday(holidayDTO);
        holidayRepository.persist(holiday);
        return holidaysMapper.holidayToHolidayDTO(holiday);
    }

    public List<HolidayDTO> findAll(){
        return holidayRepository.findAll().stream().map(holidaysMapper::holidayToHolidayDTO).toList();
    }

    public HolidayDTO findById(long id){
        return holidaysMapper.holidayToHolidayDTO(holidayRepository.findById(id));
    }

    @Transactional
    public HolidayDTO update(HolidayDTO holidayDTO) {
        var holiday = holidayRepository.findById(holidayDTO.id());
        holiday.setName(holidayDTO.name());
        holiday.setDescription(holidayDTO.description());
        holidayRepository.persist(holiday);
        return holidaysMapper.holidayToHolidayDTO(holiday);
    }

    @Transactional
    public void remove(Long id) {
        var holiday = holidayRepository.findById(id);
        holidayRepository.delete(holiday);
    }
}
