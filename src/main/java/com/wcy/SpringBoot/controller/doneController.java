package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Question;
import com.wcy.SpringBoot.model.doneThings;
import com.wcy.SpringBoot.model.things;
import com.wcy.SpringBoot.service.QuestionService;
import com.wcy.SpringBoot.service.doneService;
import com.wcy.SpringBoot.service.thingsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:52
 */
@RestController
@RequestMapping
public class doneController {

    @Resource
    private doneService doneService;

    @Resource
    private thingsService thingsService;



    @RequestMapping("/addDoneThings")
//    @ResponseBody
    public ModelAndView addDone(HttpServletRequest request, String describe, String name){
        String str=request.getParameter("label");
        if(str!="") {
            System.out.println("label:" + str);
            System.out.println("describe:" + describe);
            System.out.println("name:" + name);
            int label = Integer.parseInt(str);

            doneThings doneThings = new doneThings();
            String thing = (thingsService.findthingsId(label)).getThings();
            doneThings.setId(label);
            doneThings.setThings(thing);
            doneThings.setName(name);
            doneThings.setDescribe(describe);

            Date d = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
            String dateNowStr = sdf.format(d);
            doneThings.setTime(dateNowStr);

//         things thing11=new things();
//         thing11.setId(label);


            doneService.addDone(doneThings);
            thingsService.deleteThings(label);
            System.out.println(doneThings.toString());
            System.out.println("打卡成功");
        }
        return new ModelAndView("daka");
    }


//    @ResponseBody
    @RequestMapping("/queryDoneThings")
    public List<doneThings> queryDoneThings()
    {
        //        System.out.println("开始载入已打卡内容");
        return doneService.findDoneThings();
    }
}
