package com.wcy.SpringBoot.service.Impl;

import com.wcy.SpringBoot.mapper.ArticleMapper;
import com.wcy.SpringBoot.mapper.QuestionMapper;
import com.wcy.SpringBoot.model.Article;
import com.wcy.SpringBoot.service.ArticleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/2/1 21:35
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Resource
    private ArticleMapper articleMapper;

    public void setMapper(ArticleMapper articleMapper) {
        this.articleMapper = articleMapper;
    }


    @Override
    public int addArticle(Article advice) {
        int nums=articleMapper.insert(advice);
        return nums;
    }

    @Override
    public List<Article> findArticle() {
        return articleMapper.select();
    }
}
