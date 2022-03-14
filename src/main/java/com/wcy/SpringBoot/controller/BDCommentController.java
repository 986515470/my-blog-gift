package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.BlogTalk;
import com.wcy.SpringBoot.service.BDService;
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
public class BDCommentController {
    @Resource
    private BDService adviceService;


    @RequestMapping("/addBdComment")
    @ResponseBody
    public ModelAndView addComment1(HttpServletRequest request, String comment,String name){


          BlogTalk bt=new BlogTalk();
          bt.setComment(comment);
          Date d = new Date();
          SimpleDateFormat sdf = new SimpleDateFormat("MM-dd--HH:mm:ss");
          String dateNowStr = sdf.format(d);
          bt.setTime(dateNowStr);
          bt.setName(name);
          int nums = adviceService.addComment1(bt);
//          System.out.println("blog-detail-Comment 添加成功");

        return new ModelAndView("blog-details");
    }


    @ResponseBody
    @RequestMapping("/queryBdComment")
    public List<BlogTalk> queryComment1()
    {

        List<BlogTalk> advices=adviceService.findComment1();
//        System.out.println("开始载入BD评论");
        return advices;
    }

}
