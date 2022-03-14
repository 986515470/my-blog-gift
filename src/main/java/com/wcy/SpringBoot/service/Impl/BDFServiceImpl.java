package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.BDFMapper;

import com.wcy.SpringBoot.model.BlogComment;

import com.wcy.SpringBoot.service.BDFService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/28 20:16
 */
@Service("BDFService")
public class BDFServiceImpl implements BDFService {
    @Resource
    private BDFMapper bdMapper;

    public void setBDMapper(BDFMapper bdMapper) {
        this.bdMapper = bdMapper;
    }


    @Override
    public int addComment(BlogComment advice) {
        int nums=bdMapper.insert(advice);
        return nums;
    }
    @Override
    public List<BlogComment> findComment() {
        return bdMapper.select();
    }
}
