package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Advice;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdviceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Advice record);

    int insertSelective(Advice record);

    List<Advice> select();

    Advice selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Advice record);

    int updateByPrimaryKey(Advice record);
}