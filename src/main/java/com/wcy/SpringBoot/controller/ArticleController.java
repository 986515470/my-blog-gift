package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Article;
import com.wcy.SpringBoot.service.ArticleService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/2/1 21:39
 */
@Controller
@RequestMapping
public class ArticleController
{
    @Resource
    private ArticleService articleService;

    @RequestMapping("/article")
    @ResponseBody
    public ModelAndView addAdvice(HttpServletRequest request, String advice,String name,String title){

        Article bt=new Article();
        if(advice!=""&&name!=""&&title!="") {
            bt.setWords(advice);
            Date d = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
            String dateNowStr = sdf.format(d);
            bt.setTime(dateNowStr);
            bt.setAuthor(name);
            bt.setTitle(title);
            int nums = articleService.addArticle(bt);
//        System.out.println("Article 添加成功");
        }
        return new ModelAndView("Article");
    }


    @ResponseBody
    @RequestMapping("/queryArticle")
    public List<Article> queryAdvice()
    {

        List<Article> advices=articleService.findArticle();
//        System.out.println("开始载入意见");
        return advices;
    }
}
