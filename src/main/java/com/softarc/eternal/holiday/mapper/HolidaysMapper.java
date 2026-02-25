package com.softarc.eternal.holiday.mapper;

import com.softarc.eternal.holiday.dto.HolidayDTO;
import com.softarc.eternal.holiday.entity.Holiday;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "cdi")
public interface HolidaysMapper {
    @Mapping(target = "hasCover", expression = "java(holidayEntity.getCoverPath() != null)")
    Holiday holidayToHolidayDTO(HolidayDTO holiday);
}
