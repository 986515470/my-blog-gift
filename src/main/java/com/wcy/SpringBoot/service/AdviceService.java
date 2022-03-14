package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Advice;


import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/25 19:26
 */

public interface AdviceService {

    int addAdvice(Advice advice);

    List<Advice> findAdvice();
}
