package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Answer;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/2/3 14:14
 */
public interface AnswerService {
    int addAnswer(Answer answer);

    List<Answer> findAnswer();
}
