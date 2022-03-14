package com.wcy.SpringBoot.service;

import com.wcy.SpringBoot.model.Article;
import com.wcy.SpringBoot.model.BlogComment;

import java.util.List;

/**
 * @author Wcy
 * @Date 2021/2/1 21:34
 */
public interface ArticleService {
    int addArticle(Article advice);

    List<Article> findArticle();
}
