package com.wcy.SpringBoot.service;


import com.wcy.SpringBoot.model.BlogComment;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/28 20:15
 */
public interface BDFService {
    int addComment(BlogComment advice);

    List<BlogComment> findComment();
}
