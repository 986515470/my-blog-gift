package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Advice;
import com.wcy.SpringBoot.service.AdviceService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/1/25 19:27
 */
@Controller
@RequestMapping
public class AdviceController
{
    @Resource
    private AdviceService adviceService;

    @RequestMapping("/")
    @ResponseBody
    public ModelAndView Index(){
        return new ModelAndView("index");
    }

    @RequestMapping("/advice")
    @ResponseBody
    public ModelAndView addAdvice(HttpServletRequest request, String advice){

        if(advice.equals("")) {
        }
        else {
            Advice advice1ice = new Advice();
            advice1ice.setAdvice(advice);
            int nums = adviceService.addAdvice(advice1ice);
//            System.out.println("添加成功");
        }
        return new ModelAndView("advice");
    }


    @ResponseBody
    @RequestMapping("/queryAdvice")
    public List<Advice> queryAdvice()
    {

        List<Advice> advices=adviceService.findAdvice();
//        System.out.println("开始载入意见");
        return advices;
    }

    @GetMapping("/index.htm")
    public ModelAndView index() {
        return new ModelAndView("index");
    }
    @GetMapping("/index-2.htm")
    public ModelAndView index2() {
        return new ModelAndView("index-2");
    }
    @GetMapping("/index-3.htm")
    public ModelAndView index3() {
        return new ModelAndView("index-3");
    }
    @GetMapping("/Login.htm")
    public ModelAndView Login() {
        return new ModelAndView("Login");
    }
    @GetMapping("/Question.htm")
    public ModelAndView Question() {
        return new ModelAndView("Question");
    }
    @GetMapping("/Writing.htm")
    public ModelAndView Writing() {
        return new ModelAndView("Writing");
    }
    @GetMapping("/contact.htm")
    public ModelAndView contact() {
        return new ModelAndView("contact");
    }
    @GetMapping("/Comments.htm")
    public ModelAndView Comments() {
        return new ModelAndView("Comments");
    }
    @GetMapping("/blog-details-fullwidth.htm")
    public ModelAndView bdf() {
        return new ModelAndView("blog-details-fullwidth");
    }
    @GetMapping("/blog-details.htm")
    public ModelAndView bd() {
        return new ModelAndView("blog-details");
    }
    @GetMapping("/Article.htm")
    public ModelAndView Article() {
        return new ModelAndView("Article");
    }
    @GetMapping("/advice.htm")
    public ModelAndView advice() {
        return new ModelAndView("advice");
    }
    @GetMapping("/about.htm")
    public ModelAndView about() {
        return new ModelAndView("about");
    }


}