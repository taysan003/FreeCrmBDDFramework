package com.atossyntel.bean;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	
	public static void main(String[] args) {
		ApplicationContext c = new ClassPathXmlApplicationContext("bean.xml");
		System.out.println("Spring container created .....");
		Customer m = (Customer) c.getBean("c1");
		m.show();
		Customer m2 = (Customer) c.getBean("m2");
		m2.show();
	}
	

}
