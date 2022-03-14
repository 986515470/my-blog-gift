package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.BlogComment;
import com.wcy.SpringBoot.service.BDFService;
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
 * @Date 2021/1/28 20:14
 */
@Controller
@RequestMapping
public class BDFCommentController {
    @Resource
    private BDFService adviceService;


    @RequestMapping("/addBdfComment")
    @ResponseBody
    public ModelAndView addComment1(HttpServletRequest request, String comment, String name){


        BlogComment bt=new BlogComment();
        bt.setComment(comment);
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("MM-dd HH:mm:ss");
        String dateNowStr = sdf.format(d);
        bt.setTime(dateNowStr);
        bt.setName(name);
        int nums = adviceService.addComment(bt);
//        System.out.println("blog-details-fullwidth-Comment 添加成功");

        return new ModelAndView("blog-details-fullwidth");
    }


    @ResponseBody
    @RequestMapping("/queryBdfComment")
    public List<BlogComment> queryComment1()
    {

        List<BlogComment> advices=adviceService.findComment();
//        System.out.println("开始载入BDF评论");
        return advices;
    }
}
