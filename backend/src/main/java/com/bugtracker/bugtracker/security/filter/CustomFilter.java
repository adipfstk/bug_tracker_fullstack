package com.bugtracker.bugtracker.security.filter;

import com.bugtracker.bugtracker.security.utils.JwtUtil;
import com.bugtracker.bugtracker.services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@AllArgsConstructor
@Component
public class CustomFilter extends OncePerRequestFilter {
    private final JwtUtil jwtUtil;
    private final UserService userDetailsService;
    private final AuthenticationManager authenticationManager;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    @NonNull
                                    HttpServletResponse response,
                                    @NonNull
                                    FilterChain filterChain) throws ServletException, IOException {
        var token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer")) {
            token = token.substring(7);
            var username = this.jwtUtil.extractUsername(token);
            if (username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
                var user = this.userDetailsService.loadUserByUsername(username);
                Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);

    }


}
