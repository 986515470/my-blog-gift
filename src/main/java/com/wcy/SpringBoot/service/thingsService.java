package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.model.things;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:10
 */
public interface thingsService {
    int deleteThings(int id);

    List<things> findthings();

    things findthingsId(int id);
}
