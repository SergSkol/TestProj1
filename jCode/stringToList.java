package jCode;

import java.util.*;

public class stringToList {

    public static void main(String[] args) {
        String input = "396285104 573261094 759641832 819230764 364801279";
        String[] arrayString = input.split(" ");
        List<Integer> arr = new ArrayList<Integer>();

        for(String e:arrayString){
            arr.add(Integer.parseInt(e.trim()));
        }
        
        System.out.println(arr.toString());
    }
}