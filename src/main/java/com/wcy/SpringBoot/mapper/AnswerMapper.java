package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Answer;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;
@Mapper
public interface AnswerMapper {


    int insert(Answer record);

    List<Answer> select();


}