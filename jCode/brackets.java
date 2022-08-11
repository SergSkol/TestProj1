package jCode;

import java.util.*;
import java.util.Scanner;

class Parser{
    static String isBalanced(String s) 
    {
        int op1 = 0;
        int op2 = 0;
        String opens = "";
        boolean isWrongSeq = false;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '{' : 
                    op1++; 
                    opens += c;
                    break;
                case '(' : 
                    op2++; 
                    opens += c;
                    break;
                case '}' : 
                    op1--; 
                    if(op1<0){op1=0;}; 
                    if (opens.charAt(opens.length()-1) == '(') {
                        isWrongSeq = true; break;
                    } else {
                        if (opens.length()>0){
                            opens = opens.substring(0, opens.length() - 1);
                        }
                    };
                    break;
                case ')' : 
                    op2--; 
                    if(op2<0){op2=0;}; 
                    if (opens.charAt(opens.length()-1) == '{') {
                        isWrongSeq = true; break;
                    } else {
                        if (opens.length()>0){
                            opens = opens.substring(0, opens.length() - 1);
                        }
                    };
                    break;                
            }
        }
        if (isWrongSeq) {
            return "false";
        } else if (op1 == 0 && op2 == 0) {
            return "true";
        } else {
            return "false";
        }
    }
}

class brackets {
	public static void main(String[] args) {
        // String s = "}{";
        String s = "({(()())})";

        Parser parser = new Parser();
		System.out.println(parser.isBalanced(s));
	}
}