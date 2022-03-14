package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.BlogComment;
import com.wcy.SpringBoot.model.Communicate;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface CommunicateMapper {


    int insert(Communicate record);

    List<Communicate> select();
}