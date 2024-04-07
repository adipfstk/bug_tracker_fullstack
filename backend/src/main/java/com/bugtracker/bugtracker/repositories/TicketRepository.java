package com.bugtracker.bugtracker.repositories;


import com.bugtracker.bugtracker.models.ticket.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
