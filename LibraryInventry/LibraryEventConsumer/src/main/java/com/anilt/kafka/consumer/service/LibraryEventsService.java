package com.anilt.kafka.consumer.service;

import com.anilt.kafka.consumer.entity.LibraryEvent;
import com.anilt.kafka.consumer.jpa.LibraryEventsRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class LibraryEventsService {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private LibraryEventsRepository libraryEventsRepository;

    public void processLibraryEvent(ConsumerRecord<Integer, String> consumerRecord) throws JsonProcessingException {
        LibraryEvent libraryEvent = objectMapper.readValue(consumerRecord.value(), LibraryEvent.class);
        log.info("library event : {}", libraryEvent);
        switch (libraryEvent.getLibraryEventType()){
            case NEW:
                //Save operation
                save(libraryEvent);
                break;
            case UPDATE:
                //Update
                break;
            default:
                log.info("Invalid LibraryEventType");

        }
    }

    private void save(LibraryEvent libraryEvent) {
        libraryEvent.getBook().setLibraryEvent(libraryEvent);
        libraryEventsRepository.save(libraryEvent);
        log.info("Successfully persisted the library event : {}", libraryEvent);
    }
}
