package com.keenable.hackathon;

import org.apache.camel.Exchange;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import org.apache.camel.processor.aggregate.AggregationStrategy;

class Mails implements AggregationStrategy {

    public Exchange aggregate(Exchange oldExchange, Exchange newExchange) {
		
		String mail = newExchange.getIn().getHeader("mailList").toString();
		//EmpMail
		System.out.println("mail" + mail);
		
		  if (oldExchange == null) {
	  			newExchange.getIn().setBody(mail);
	            return newExchange;
	        }
		  
		 // List<String >oldlist =new ArrayList(oldExchange.getIn().getBody(List.class));

	        String listM = oldExchange.getIn().getBody(String.class); 

		  System.out.println("oldlist" + listM);

		  //oldlist.add(mail);
		  listM = listM + ","+ mail;

		  System.out.println("oldlist updated" + listM);

	        oldExchange.getIn().setBody(listM);
	        return oldExchange;
}
          
}