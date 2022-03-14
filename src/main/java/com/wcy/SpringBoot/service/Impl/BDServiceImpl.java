package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.BDMapper;
import com.wcy.SpringBoot.model.BlogTalk;
import com.wcy.SpringBoot.service.BDService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/28 20:17
 */
@Service("BDService")
public class BDServiceImpl implements BDService {
    @Resource
    private BDMapper bdMapper;

    public void setBDMapper(BDMapper bdMapper) {
        this.bdMapper = bdMapper;
    }


    @Override
    public int addComment1(BlogTalk advice) {
        int nums=bdMapper.insert(advice);
        return nums;
    }
    @Override
    public List<BlogTalk> findComment1() {
        return bdMapper.select();
    }
}
