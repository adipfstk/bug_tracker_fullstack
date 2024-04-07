package com.bugtracker.bugtracker.exception;

import lombok.Builder;

@Builder
public class ErrorObject {
    private int statusCode;
    private String message;
}
