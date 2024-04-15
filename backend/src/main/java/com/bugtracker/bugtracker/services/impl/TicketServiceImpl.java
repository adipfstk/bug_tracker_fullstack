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
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TicketServiceImpl implements TicketService {

    private final TicketRepository _ticketRepository;
    private final UserRepository _userRepository;
    private final ProjectRepository _projectRepository;
    private final ModelMapper modelMapper;

    @Override
    public TicketDto addTicket(TicketDto ticketDto) {
        var ticket = this.toEntity(ticketDto);
        this._ticketRepository.save(ticket);
        return ticketDto;
    }
    @Override
    public Page<TicketDto> getAllTicketsByProjectName(String projectName, Pageable page) {
        return this._ticketRepository.findAllByProjectId(this.getProjectIdByProjectName(projectName), page)
                .map(this::toDto);
    }

    private long getProjectIdByProjectName(String projectName) {
        var projectDb = this._projectRepository
                .findByName(projectName)
                .orElseThrow(() -> new NoProjectFoundException(Constants.NO_PROJECT_DB));

        return projectDb.getId();
    }

    public TicketDto toDto(Ticket ticket) {
        return modelMapper.map(ticket, TicketDto.class);
    }

    public Ticket toEntity(TicketDto ticketDto) {
        return modelMapper.map(ticketDto, Ticket.class);
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
