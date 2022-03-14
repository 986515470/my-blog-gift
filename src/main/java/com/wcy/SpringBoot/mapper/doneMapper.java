package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.model.doneThings;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:36
 */
@Mapper
@Repository
public interface doneMapper {

    int insertDone(doneThings doneThings);

    List<doneThings> selectDone();
}
