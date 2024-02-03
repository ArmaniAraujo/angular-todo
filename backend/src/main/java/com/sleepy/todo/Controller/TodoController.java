package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.TodoService;
import com.sleepy.todo.model.Todo;
import com.sleepy.todo.model.TodoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    @Autowired
    private TodoService ts;

    @GetMapping("/items")
    public List<Todo> test_getAllTodos() {
        return ts.getAllTodos("arm");
    }

    // Not testing for other user verification right now
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get_user_todos")
    public List<Todo> getUserTodos(@RequestParam String user) { return ts.getAllTodos(user); }

    @DeleteMapping("/delete")
    public ResponseEntity<String> test_deleteTodo(@RequestParam int tid) {
        try {
            return ts.deleteTodo(tid);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Enter a valid item ID to delete");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addTodo(@RequestBody TodoRequest todoDetails) {
        try {
            String uid = todoDetails.getUid();
            String item = todoDetails.getItem();

            Todo todo = new Todo();
            todo.setUid(uid);
            todo.setItem(item);

            return ts.saveTodo(todo);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Enter valid todo details to add");
        }
    }
}
