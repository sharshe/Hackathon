package com.keenable.hackathon;

import org.apache.camel.Exchange;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

class updateField{

    public void showData(Exchange exchange){

        Map <String , Object > map = new HashMap<String , Object > (exchange.getIn().getBody(Map.class));

        System.out.println(" Bean Method : "+map);
        System.out.println(" Bean Method : "+map.keySet() );
        String SecoundKey = map.keySet().toArray()[1].toString();
        String secoundKeyValue = map.get(SecoundKey).toString();
        System.out.println(" Bean key : "+SecoundKey +" Value "+secoundKeyValue );
        exchange.getIn().setHeader("SecoundKey",SecoundKey);

    }

    public void getKey(Exchange exchange){

        Map <String , Object > map = new HashMap<String , Object > (exchange.getIn().getBody(Map.class));

        System.out.println(" Bean Method : "+map);
        System.out.println(" Bean Method : "+map.keySet() );
        String Key = map.keySet().toArray()[0].toString();
        String KeyValue = map.get(Key).toString();
        System.out.println(" Bean key : "+Key +" Value "+KeyValue );
        exchange.getIn().setHeader("key",Key);

    }

}