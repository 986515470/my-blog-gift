//package com.wcy.SpringBoot.Handler;
//
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.stereotype.Component;
//import org.springframework.web.servlet.HandlerInterceptor;
//import org.thymeleaf.util.StringUtils;
//
////import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
///**
// * @author Wcy
// * @Date 2021/1/26 20:52
// */
//@Component
//public class PrimessionInterceptor implements HandlerInterceptor {
//
////    @Override
////    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//////        String token=request.getParameter("token");
//////        if(!StringUtils.isEmpty(token)){
//////            Date d = new Date();
//////            SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
//////            String dateNowStr = sdf.format(d);
//////            if(dateNowStr.equals(token)){
//////                return true;
//////            }
//////        }
//////        response.setContentType("text/html;charset=UTF-8");
//////        response.getWriter().print("权限不足！");
//////        return false;
////        return true;
////    }
//
//    @Override
//    public boolean preHandle(javax.servlet.http.HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        return true;
//    }
//}
