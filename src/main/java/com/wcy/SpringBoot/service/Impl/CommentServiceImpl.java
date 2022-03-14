package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.CommunicateMapper;
import com.wcy.SpringBoot.model.Communicate;
import com.wcy.SpringBoot.service.CommentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/31 12:26
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Resource
    private CommunicateMapper communicateMapper;

    public void setMapper(CommunicateMapper communicateMapper) {
        this.communicateMapper = communicateMapper;
    }


    @Override
    public int addCommunicate(Communicate advice) {
        int nums=communicateMapper.insert(advice);
        return nums;

    }
    @Override
    public List<Communicate> findCommunicate() {
        return communicateMapper.select();
    }
}
