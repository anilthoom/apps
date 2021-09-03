package com.anilt.kafka.producer.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class LibraryEvent {

    @NotNull
    private Integer libraryEventId;

    private LibraryEventType libraryEventType;

    @NotNull
    @Valid
    private Book book;
}
