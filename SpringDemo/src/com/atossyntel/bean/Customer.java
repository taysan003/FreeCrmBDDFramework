package com.atossyntel.bean;

public class Customer {
	
	int cid;
	String cname,loc;
	
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	
	public void show() {
		System.out.println(cid+":"+cname+":"+loc);
		
	}

}
