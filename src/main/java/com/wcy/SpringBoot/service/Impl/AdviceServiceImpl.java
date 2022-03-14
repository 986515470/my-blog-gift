package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.AdviceMapper;
import com.wcy.SpringBoot.model.Advice;
import com.wcy.SpringBoot.service.AdviceService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/25 19:27
 */
@Service("AdviceService")
public class AdviceServiceImpl implements AdviceService {

    public void setAdviceMapper(AdviceMapper adviceMapper) {
        this.adviceMapper = adviceMapper;
    }

    @Resource
    private AdviceMapper adviceMapper;

    @Override
    public int addAdvice(Advice advice) {
        int nums=adviceMapper.insert(advice);
        return nums;
    }

    @Override
    public List<Advice> findAdvice() {
        return adviceMapper.select();
    }


}
