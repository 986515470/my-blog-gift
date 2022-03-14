package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.QuestionMapper;
import com.wcy.SpringBoot.mapper.thingsMapper;
import com.wcy.SpringBoot.model.things;
import com.wcy.SpringBoot.service.thingsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:11
 */
@Service
public class thingsServiceImpl implements thingsService {

    @Resource
    private thingsMapper thingsMapper;

    public void setMapper(thingsMapper thingsMapper) {
        this.thingsMapper = thingsMapper;
    }

    @Override
    public int deleteThings(int id) {
        int nums=thingsMapper.delete(id);
        return nums;
    }

    @Override
    public List<things> findthings() {
        return thingsMapper.select();
    }

    @Override
    public things findthingsId(int id) {
        return thingsMapper.selectId( id);
    }
}
