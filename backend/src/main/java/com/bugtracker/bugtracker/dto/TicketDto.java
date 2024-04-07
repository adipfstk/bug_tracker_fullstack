package com.bugtracker.bugtracker.dto;

import com.bugtracker.bugtracker.models.ticket.properties.TicketPriority;
import com.bugtracker.bugtracker.models.ticket.properties.TicketStatus;
import com.bugtracker.bugtracker.models.ticket.properties.TicketType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TicketDto {
    @Enumerated(EnumType.STRING)
    TicketType type;
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private TicketStatus status;
    @Enumerated(EnumType.STRING)
    private TicketPriority priority;
    private String project;
    private String user;
}
