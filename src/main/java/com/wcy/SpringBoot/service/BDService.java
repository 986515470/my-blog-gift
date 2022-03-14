package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.BlogTalk;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/28 20:15
 */
public interface BDService {
    int addComment1(BlogTalk advice);

    List<BlogTalk> findComment1();
}
