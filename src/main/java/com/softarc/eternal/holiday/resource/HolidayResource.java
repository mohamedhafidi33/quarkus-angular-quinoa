package com.softarc.eternal.holiday.resource;

import com.softarc.eternal.holiday.dto.HolidayDTO;
import com.softarc.eternal.holiday.exception.HolidayNotFoundException;
import com.softarc.eternal.holiday.service.HolidayService;
import io.smallrye.common.constraint.NotNull;
import jakarta.ws.rs.*;

import java.util.List;
import java.util.Optional;

@Path("/api/holidays")
public class HolidayResource {
    HolidayService holidayService;

    HolidayResource (HolidayService holidayService){
        this.holidayService = holidayService;
    }
    @GET
    @Path("/{id}")
    public HolidayDTO getHoliday(@PathParam("id") Long id){
        return holidayService.findById(id);
    }

    @GET
    public List<HolidayDTO> getHolidays(){
        return holidayService.findAll();
    }
    @POST
    public HolidayDTO createHoliday(@NotNull HolidayDTO holidayDTO){
        return holidayService.add(holidayDTO);
    }

    @PUT
    @Path("/{id}")
    public HolidayDTO updateHoliday(@PathParam("id")Long id, @NotNull HolidayDTO holidayDTO){
        var holiday = Optional.ofNullable(holidayService.findById(id)).orElseThrow(HolidayNotFoundException::new);
        return holidayService.update(holidayDTO);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id")Long id){
        holidayService.remove(id);
    }
}
