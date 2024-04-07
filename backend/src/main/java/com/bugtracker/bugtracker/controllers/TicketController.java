package com.bugtracker.bugtracker.controllers;

import com.bugtracker.bugtracker.dto.ProjectDto;
import com.bugtracker.bugtracker.dto.TicketDto;
import com.bugtracker.bugtracker.services.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@AllArgsConstructor
public class TicketController {
    private final TicketService _ticketService;
    @PostMapping("/ticket")
    ResponseEntity<TicketDto> addTicket(@RequestBody TicketDto ticketDto) {
        return ResponseEntity.ok(this._ticketService.addTicket(ticketDto));
    }

}
