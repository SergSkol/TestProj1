package jCode;
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class test2 {
    

    public static void main(String[] args) {

        String s = "[AZ[a-z](a-z)";
        Pattern pattern = Pattern.compile(s);
        System.out.println(pattern);        
    }
}