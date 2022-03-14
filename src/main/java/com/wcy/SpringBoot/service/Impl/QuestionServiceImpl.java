package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.CommunicateMapper;
import com.wcy.SpringBoot.mapper.QuestionMapper;
import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.service.QuestionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/31 21:24
 */
@Service
public class QuestionServiceImpl implements QuestionService {

    @Resource
    private QuestionMapper questionMapper;

    public void setMapper(QuestionMapper questionMapper) {
        this.questionMapper = questionMapper;
    }

    @Override
    public int addQuestion(Question advice) {
        int nums=questionMapper.insert(advice);
        return nums;
    }

    @Override
    public List<Question> findQuestion() {
        return questionMapper.select();
    }
}
