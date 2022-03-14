package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.AnswerMapper;
import com.wcy.SpringBoot.model.Answer;
import com.wcy.SpringBoot.service.AnswerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/2/3 14:15
 */
@Service
public class AnswerServiceImpl implements AnswerService {

    @Resource
    private AnswerMapper answerMapper;

    public void setAnswerService(AnswerMapper answerMapper) {
        this.answerMapper = answerMapper;
    }

    @Override
    public int addAnswer(Answer answer) {
        int nums=answerMapper.insert(answer);
        return nums;
    }

    @Override
    public List<Answer> findAnswer() {
        return answerMapper.select();
    }
}
