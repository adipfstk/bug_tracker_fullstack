package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.TicketDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface TicketService {

    TicketDto addTicket(TicketDto ticket);
    Page<TicketDto> getAllTicketsByProjectName(String projectName, Pageable page);

}