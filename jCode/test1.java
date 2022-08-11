package jCode;

import java.util.*;

public class test1 {

    public static List<Integer> stringToListInteger(String input)
    {
        String[] arrayString = input.split(" ");
        List<Integer> arr = new ArrayList<Integer>();

        for(String e:arrayString){
            arr.add(Integer.parseInt(e.trim()));
        }
        return arr;
    }

    public static void main(String[] args) {
        // String input = "1 4 4 4 5 3";
        // List<Integer> arr = stringToListInteger(input);

        // String input1 = "295 294 291 287 287 ";
        // List<Integer> a = stringToListInteger(input1);
        
        // String input2 = "5 5 6 14 19 20 23 25 ";
        // List<Integer> b = stringToListInteger(input2);
        
        //start
        
        int a =100;
        int b =1000;

        int n = 0;
        int start = (int)Math.sqrt(a);
        int end = (int)Math.sqrt(b);
        n = end - start;
        if(start*start == a) {n++;};
        System.out.println(n);

        // String formatted = String.format("%02d", 1);
        // System.out.println(formatted);

        //System.out.println(divs);
        // System.out.println(a);
        // System.out.println(b);
    }   
}