<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");
String callback = request.getParameter("callback");
String name = request.getParameter("0");
String birth = request.getParameter("1");
String mili = request.getParameter("2");
String career = request.getParameter("3");
String gender = request.getParameter("4");
String age = request.getParameter("5");
String email = request.getParameter("6");
String url = request.getParameter("7");
String pay = request.getParameter("8");
System.out.println(name + " " + birth + " " + mili + " " + 
career + " "+ gender + " "+age+" "+email+ " "+url+ " "+pay );
if((name != null && name.length() > 0) && (birth != null && birth.length() > 0) && 
 (mili != null && mili.length() > 0) && (career != null && career.length() > 0) && 
 (email != null && email.length() > 0) && (url != null && url.length() > 0)){
%>
{"success":"정상적으로 처리 되었습니다."}
<%}else{ %>
{"failure":"다시 입력해주세요."}
<%}%>
