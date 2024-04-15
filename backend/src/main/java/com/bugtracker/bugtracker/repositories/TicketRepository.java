package com.bugtracker.bugtracker.repositories;


import com.bugtracker.bugtracker.models.ticket.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    Page<Ticket> findAllByProjectId(long id, Pageable page);
}
