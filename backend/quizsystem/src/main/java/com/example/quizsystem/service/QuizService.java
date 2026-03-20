package com.example.quizsystem.service;

import com.example.quizsystem.entity.Quiz;
import com.example.quizsystem.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public Quiz createQuiz(Quiz quiz){
        return quizRepository.save(quiz);
    }

    public List<Quiz> getAllQuiz(){
        return quizRepository.findAll();
    }
}