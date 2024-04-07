package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.dto.TicketDto;
import com.bugtracker.bugtracker.exception.NoProjectFoundException;
import com.bugtracker.bugtracker.exception.NoUserFoundException;
import com.bugtracker.bugtracker.models.project.Project;
import com.bugtracker.bugtracker.models.ticket.Ticket;
import com.bugtracker.bugtracker.models.user.UserEntity;
import com.bugtracker.bugtracker.repositories.ProjectRepository;
import com.bugtracker.bugtracker.repositories.TicketRepository;
import com.bugtracker.bugtracker.repositories.UserRepository;
import com.bugtracker.bugtracker.services.TicketService;
import com.bugtracker.bugtracker.utils.Constants;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TicketServiceImpl implements TicketService {

    private final TicketRepository _ticketRepository;
    private final UserRepository _userRepository;
    private final ProjectRepository _projectRepository;

    @Override
    public TicketDto addTicket(TicketDto ticketDto) {
        var ticket = this._ticketMapper(ticketDto);
        this._ticketRepository.save(ticket);
        return ticketDto;
    }

    private Ticket _ticketMapper(TicketDto ticketDto) {
        Ticket ticket = new Ticket();

        ticket.setId(0L);
        ticket.setUser(this._findUserDb(ticketDto.getUser()));
        ticket.setProject(this._findProjectDb(ticketDto.getProject()));
        ticket.setTitle(ticketDto.getTitle());
        ticket.setDescription(ticketDto.getDescription());
        ticket.setStatus(ticketDto.getStatus());
        ticket.setTicketPriority(ticketDto.getPriority());
        ticket.setType(ticketDto.getType());
        return ticket;

    }

    private UserEntity _findUserDb(String username) throws NoUserFoundException {
        return this._userRepository
                .findByUsername(username)
                .orElseThrow(() -> new NoUserFoundException(Constants.NO_USER_DB));
    }

    private Project _findProjectDb(String projectName) throws NoProjectFoundException {
        return this._projectRepository
                .findByName(projectName)
                .orElseThrow(() -> new NoProjectFoundException(Constants.NO_PROJECT_DB));
    }
}
