package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Communicate;
import com.wcy.SpringBoot.service.CommentService;
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
public class CommentController {

    @Resource
    private CommentService commentService;

    @RequestMapping("/addComment")
    @ResponseBody
    public ModelAndView addComment(HttpServletRequest request, String comment, String name){


        Communicate bt=new Communicate();
        bt.setComment(comment);
        Date d = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("MM-dd--HH:mm:ss");
        String dateNowStr = sdf.format(d);
        bt.setTime(dateNowStr);
        bt.setName(name);
        int num = commentService.addCommunicate(bt);
//        System.out.println("Comment 添加成功");
        return new ModelAndView("Comments");
    }


    @ResponseBody
    @RequestMapping("/queryComment")
    public List<Communicate> queryComment()
    {

        List<Communicate> advices=commentService.findCommunicate();
//        System.out.println("开始载入Comment评论");
        return advices;
    }

}
