package com.bugtracker.bugtracker.exception;

public class NoItemsException extends RuntimeException {
    public NoItemsException(String message) {
        super(message);
    }
}
