package com.bugtracker.bugtracker.exception.handlers;

import com.bugtracker.bugtracker.exception.NoItemsException;
import com.bugtracker.bugtracker.exception.SavingException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class ExceptionController {
    @ExceptionHandler(NoItemsException.class)
    public String NoItemsExceptionHandler(NoItemsException noItemsException) {
        return noItemsException.getMessage();
    }

    public String SavingErrorExceptionHandler(No) {

    }
}
