package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Communicate;
import com.wcy.SpringBoot.model.Question;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface QuestionMapper {


    int insert(Question record);

    List<Question> select();


}