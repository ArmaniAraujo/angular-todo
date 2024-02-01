package com.sleepy.todo.Service;

import com.sleepy.todo.Repository.TodoRepository;
import com.sleepy.todo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepo;


    public List<Todo> getAllTodos(String uid) { return todoRepo.findByUid(uid); }

//    @PostMapping("")
    public ResponseEntity<String> saveTodo(Todo todo) {
        todoRepo.save(todo);
        String statusMessage = "Todo added successfully.";
        return ResponseEntity.ok(statusMessage);
    }

    public ResponseEntity<String> deleteTodo(int tid) {

        Optional<Todo> item = todoRepo.findById(tid);
        String statusMessage;
        if (item.isPresent()) {
            todoRepo.deleteById(tid);
            statusMessage = "Todo with ID " + tid + " deleted successfully.";
            return ResponseEntity.ok(statusMessage);
        }
        // Defaults to this if the previous stuff doesn't work
        statusMessage = "Todo with ID " + tid + " not found.";
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(statusMessage);
    }
}
