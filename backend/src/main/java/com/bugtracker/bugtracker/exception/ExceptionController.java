package com.bugtracker.bugtracker.exception;

import com.bugtracker.bugtracker.exception.NoItemsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(NoUserFoundException.class)
    public ResponseEntity<ErrorObject> noUserExceptionHandler(NoUserFoundException noUserFoundException) {
        ErrorObject errorObject = ErrorObject
                .builder()
                .message(noUserFoundException.getMessage())
                .statusCode(HttpStatus.NOT_FOUND.value())
                .build();
        return new ResponseEntity<>(errorObject, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(NoProjectFoundException.class)
    public ResponseEntity<ErrorObject> noItemsExceptionHandler(NoProjectFoundException noItemsException) {
        ErrorObject errorObject = ErrorObject
                .builder()
                .message(noItemsException.getMessage())
                .statusCode(HttpStatus.NOT_FOUND.value())
                .build();
        return new ResponseEntity<>(errorObject, HttpStatus.NOT_FOUND);
    }
}
