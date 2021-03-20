package com.anilt.component.library.model;

import javax.persistence.*;

@Entity
@Table(name = "components_library")
public class ComponentLibrary {
    private long id;
    private String contentText;
    private String contentHtml;

    public ComponentLibrary() {

    }

    public ComponentLibrary(String contentText, String contentHtml) {
        this.contentText = contentText;
        this.contentHtml = contentHtml;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "content_text", nullable = false)
    public String getContentText() {
        return contentText;
    }
    public void setContentText(String contentText) {
        this.contentText = contentText;
    }

    @Column(name = "content_html", nullable = false)
    public String getContentHtml() {
        return contentHtml;
    }
    public void setContentHtml(String contentHtml) {
        this.contentHtml = contentHtml;
    }

    @Override
    public String toString() {
        return "Component [id=" + id + ", contentText=" + contentText + ", contentHtml=" + contentHtml
                + "]";
    }
}