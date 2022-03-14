package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.service.QuestionService;
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
 * @Date 2021/1/31 12:35
 */
@Controller
@RequestMapping
public class QuestionController {

    @Resource
    private QuestionService questionService;

    @RequestMapping("/addQuestion")
    @ResponseBody
    public ModelAndView addComment(HttpServletRequest request, String comment, String name){


        Question bt=new Question();
     if(comment!=""&&name!="") {
         bt.setQuestion(comment);
         Date d = new Date();
         SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
         String dateNowStr = sdf.format(d);
         bt.setTime(dateNowStr);
         bt.setName(name);
         int num = questionService.addQuestion(bt);
//        System.out.println("Comment 添加成功");
     }
        return new ModelAndView("Question");
    }


    @ResponseBody
    @RequestMapping("/queryQuestion")
    public List<Question> queryComment()
    {

        List<Question> advices=questionService.findQuestion();
//        System.out.println("开始载入Comment评论");
        return advices;
    }

}
