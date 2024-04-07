package com.bugtracker.bugtracker.models.ticket;

import com.bugtracker.bugtracker.models.project.Project;
import com.bugtracker.bugtracker.models.ticket.properties.TicketPriority;
import com.bugtracker.bugtracker.models.ticket.properties.TicketStatus;
import com.bugtracker.bugtracker.models.ticket.properties.TicketType;
import com.bugtracker.bugtracker.models.user.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Enumerated(EnumType.STRING)
    TicketType type;

    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private TicketStatus status;

    @Enumerated(EnumType.STRING)
    private TicketPriority ticketPriority;

    @ManyToOne
    private UserEntity user;

    @ManyToOne
    Project project;

}
