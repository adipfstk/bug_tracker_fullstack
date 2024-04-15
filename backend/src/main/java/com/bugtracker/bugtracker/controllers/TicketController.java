package com.bugtracker.bugtracker.controllers;

import com.bugtracker.bugtracker.dto.ProjectDto;
import com.bugtracker.bugtracker.dto.TicketDto;
import com.bugtracker.bugtracker.services.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {
    private final TicketService _ticketService;
    @PostMapping("/ticket")
    ResponseEntity<TicketDto> addTicket(@RequestBody TicketDto ticketDto) {
        return ResponseEntity.ok(this._ticketService.addTicket(ticketDto));
    }

    @GetMapping("/project-tickets")
    ResponseEntity<Page<TicketDto>> getAllTicketsByProjectName(@RequestParam(required = true) String projectName,
                                                                @RequestParam(required = false, defaultValue = "0") int page,
                                                                @RequestParam(required = false, defaultValue = "5") int size) {
        Pageable pageRequest = PageRequest.of(page, size);
        return ResponseEntity.ok(this._ticketService.getAllTicketsByProjectName(projectName, pageRequest));
    }

}
