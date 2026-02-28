package com.softarc.eternal.holiday.mapper;

import com.softarc.eternal.holiday.dto.HolidayDTO;
import com.softarc.eternal.holiday.entity.Holiday;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = QuarkusMappingConfig.class)
public interface HolidaysMapper {
    Holiday holidayDTOToHoliday(HolidayDTO holidayDTO);
    @Mapping(target = "coverPath", expression = "java(holiday.getCoverPath() != null)")
    HolidayDTO holidayToHolidayDTO(Holiday holiday);
}
