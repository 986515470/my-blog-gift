package com.wcy.SpringBoot.controller;

import com.wcy.SpringBoot.model.things;
import com.wcy.SpringBoot.service.thingsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Wcy
 * @Date 2021/3/9 14:16
 */
@Controller
@RequestMapping
public class thingsController {

    @Resource
    private thingsService thingsService;

    @ResponseBody
    @RequestMapping("/queryThings")
    public List<things> queryThings()
    {
        //        System.out.println("开始载入things");
        return thingsService.findthings();
    }

    @ResponseBody
    @RequestMapping("/deleteThings")
    public void deleteThings(int id)
    {
     thingsService.deleteThings(id);
//        System.out.println("删除已完成事件成功");

    }

    @ResponseBody
    @RequestMapping("/queryThingsId")
    public things queryThingsId(int id)
    {
        //        System.out.println("开始载入things");
        return thingsService.findthingsId(id);
    }
}

