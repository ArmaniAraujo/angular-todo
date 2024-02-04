package com.sleepy.todo.model;

// Model for adding Todos - does not need tid since its auto generated

public class TodoRequest {

    private String uid;
    private String item;

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }
}