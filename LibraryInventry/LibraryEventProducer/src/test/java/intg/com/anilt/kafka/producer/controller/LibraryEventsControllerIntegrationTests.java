package com.anilt.kafka.producer.controller;

import com.anilt.kafka.producer.model.Book;
import com.anilt.kafka.producer.model.LibraryEvent;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LibraryEventsControllerIntegrationTests {
    @Autowired
    TestRestTemplate restTemplate;

    @Test
    void postLibraryEvent(){
        Book book = Book.builder()
                .bookId(123)
                .bookAuthor("Anil")
                .bookName("Cloud Enterprise Architecture")
                .build();
        LibraryEvent libraryEvent = LibraryEvent.builder()
                        .libraryEventId(111)
                        .book(book)
                        .build();
        HttpHeaders headers = new HttpHeaders();
        headers.set("content-type", MediaType.APPLICATION_JSON.toString());
        HttpEntity<LibraryEvent> request = new HttpEntity<>(libraryEvent, headers);
        ResponseEntity<LibraryEvent> responseEntity = restTemplate.exchange("/v1/libraryevent", HttpMethod.POST, request, LibraryEvent.class);

       assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    }

}
