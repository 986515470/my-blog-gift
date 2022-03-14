package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.model.doneThings;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:47
 */

public interface doneService {
    int addDone(doneThings doneThings);

    List<doneThings> findDoneThings();
}
