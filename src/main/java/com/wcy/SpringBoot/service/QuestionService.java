package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Communicate;
import com.wcy.SpringBoot.model.Question;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/31 12:25
 */
public interface QuestionService {
    int addQuestion(Question advice);

    List<Question> findQuestion();
}
