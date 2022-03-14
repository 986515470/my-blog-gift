package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.Answer;
import com.wcy.SpringBoot.service.AnswerService;
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
 * @Date 2021/2/3 14:17
 */
@Controller
@RequestMapping
public class AnswerController {

    @Resource
    private AnswerService answerService;

    @RequestMapping("/answer")
    @ResponseBody
    public ModelAndView addAnswer(HttpServletRequest request,String id, String message,String name){


          Answer answer = new Answer();
           answer.setAnswer(message);
           answer.setId(Integer.parseInt(id));
           answer.setName(name);
           Date d = new Date();
           SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
           String dateNowStr = sdf.format(d);
           answer.setTime(dateNowStr);
           int num = answerService.addAnswer(answer);
//           System.out.println("回复成功");

        return new ModelAndView("Question");
    }


    @ResponseBody
    @RequestMapping("/queryAnswer")
    public List<Answer> queryAnswer()
    {
        List<Answer> advices=answerService.findAnswer();
//        System.out.println("开始载入回复");
        return advices;
    }

}
