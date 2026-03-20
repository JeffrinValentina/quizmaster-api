package com.example.quizsystem.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.example.quizsystem.entity.Question;
import com.example.quizsystem.exception.ResourceNotFoundException;
import com.example.quizsystem.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    
    public Page<Question> getAllQuestions(Pageable pageable) {
        return questionRepository.findAll(pageable);
    }
    public Question addQuestion(Question question){
        return questionRepository.save(question);
    }
    public Question getQuestionById(Long id) {
        return questionRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "Question not found with id: " + id
            ));
    }
    public List<Question> getAllQuestions(){
        return questionRepository.findAll();
    }

    public void deleteQuestion(Long id){
        questionRepository.deleteById(id);
    }
    public Question updateQuestion(Long id, Question updatedQuestion){

        Question q = questionRepository.findById(id).orElse(null);

        if(q != null){
            q.setQuestion(updatedQuestion.getQuestion());
            q.setOption1(updatedQuestion.getOption1());
            q.setOption2(updatedQuestion.getOption2());
            q.setOption3(updatedQuestion.getOption3());
            q.setOption4(updatedQuestion.getOption4());
            q.setAnswer(updatedQuestion.getAnswer());

            return questionRepository.save(q);
        }

        return null;
    }
}