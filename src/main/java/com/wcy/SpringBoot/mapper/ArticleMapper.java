package com.wcy.SpringBoot.mapper;

import com.wcy.SpringBoot.model.Article;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface ArticleMapper {


    int insert(Article record);
    List<Article> select();


}