package com.bugtracker.bugtracker.exception;

public class NoProjectFoundException extends RuntimeException {
    public NoProjectFoundException(String message) {
        super(message);
    }
}
