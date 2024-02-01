package com.sleepy.todo.Repository;

import com.sleepy.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

    /**
     * Takes in a uid, returns a list of todos for that user
     * @param uid - String
     * @return List of Todo items
     */
    public List<Todo> findByUid(String uid);

    /**
     * Takes in a uid and tid, deletes todos based on those params
     * @param uid - String
     * @param tid - int
     * @return True if successful deletion, else false
     */
    public boolean deleteTodosByUidAndTid(String uid, int tid);

//    /**
//     * TODO: To be tested, assumption is it deletes all tids in the list
//     * @param uid - String
//     * @param tids - int
//     * @return True if successful deletion, else false
//     */
//    public boolean deleteTodosByUidAndTid(String uid, List<Integer> tids);

    void deleteById(int id);

}
