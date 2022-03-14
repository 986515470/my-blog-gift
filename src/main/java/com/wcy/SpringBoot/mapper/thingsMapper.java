package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.model.things;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:03
 */
@Mapper
public interface thingsMapper {

    int delete(int id);

    List<things> select();
    things selectId(int id);
}
