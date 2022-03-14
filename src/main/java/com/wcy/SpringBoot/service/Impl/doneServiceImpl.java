package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.doneMapper;
import com.wcy.SpringBoot.model.doneThings;
import com.wcy.SpringBoot.service.doneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:49
 */
@Service("doneService")
public class doneServiceImpl implements doneService {

    @Resource
    private com.wcy.SpringBoot.mapper.doneMapper doneMapper;

    public void setDoneMapper(doneMapper doneMapper) {
        this.doneMapper = doneMapper;
    }

    @Override
    public int addDone(doneThings doneThings) {
        return doneMapper.insertDone(doneThings);
    }

    @Override
    public List<doneThings> findDoneThings() {
        return doneMapper.selectDone();
    }
}
