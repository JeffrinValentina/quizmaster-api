package com.example.quizsystem.controller;

import com.example.quizsystem.entity.Quiz;
import com.example.quizsystem.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz){
        return quizService.createQuiz(quiz);
    }

    @GetMapping
    public List<Quiz> getQuiz(){
        return quizService.getAllQuiz();
    }
    
    
    }

