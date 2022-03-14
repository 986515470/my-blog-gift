package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Communicate;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/31 12:25
 */
public interface CommentService {
    int addCommunicate(Communicate advice);

    List<Communicate> findCommunicate();
}
