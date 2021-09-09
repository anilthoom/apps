package com.anilt.kafka.consumer.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class Book {
    private Integer bookId;

    private String bookName;

    private String bookAuthor;
}
