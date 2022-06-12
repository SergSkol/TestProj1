import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class test2 {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        //Scanner in=new Scanner(System.in);
        //String s=in.next();
        String s = "Hacker";
        for(int i = 0; i<s.length(); i++){
            System.out.print(s.charAt(i));
            i++;
        };
        System.out.print(" ");
            for(int i = 1; i<s.length(); i++){
            System.out.print(s.charAt(i));
            i++;
        }
    }
}