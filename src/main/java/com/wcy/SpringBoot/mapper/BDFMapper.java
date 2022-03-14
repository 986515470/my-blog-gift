package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.BlogComment;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/28 20:00
 */
@Mapper
public interface BDFMapper {
    int insert(BlogComment record);

    List<BlogComment> select();
}
