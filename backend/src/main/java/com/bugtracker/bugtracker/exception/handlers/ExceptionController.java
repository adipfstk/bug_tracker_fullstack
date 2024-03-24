package com.bugtracker.bugtracker.exception.handlers;

import com.bugtracker.bugtracker.exception.NoItemsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {
    @ExceptionHandler(NoItemsException.class)
    public String NoItemsExceptionHandler(NoItemsException noItemsException) {
        return noItemsException.getMessage();
    }
}
