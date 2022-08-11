package jCode;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

//https://www.hackerrank.com/challenges/magic-square-forming

class Result {

    /*
     * Complete the 'formingMagicSquare' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY s as parameter.
     */
    public static List<Integer> stringToListInteger(String input)
    {
        String[] arrayString = input.split(" ");
        List<Integer> arr = new ArrayList<Integer>();

        for(String e:arrayString){
            arr.add(Integer.parseInt(e.trim()));
        }
        return arr;
    }
    public static void setValue(List<List<Integer>> list, int row, int column, int value){
        list.get(row).set(column, value);
    }

    public static int compare2dArrayLists(List<List<Integer>> s1, List<List<Integer>> s2)
    {
        int dif = 0;
        for (int i = 0; i < s1.size(); i++) {
            for (int j = 0; j < s1.size(); j++) {
                dif += Math.abs(s1.get(i).get(j) - s2.get(i).get(j));
            }
        }
        return dif;
    }

    public static List<List<Integer>> changeMagicSquare(int reflection, int rotation, List<List<Integer>> s) {
    // reflection horisontal, 1 / 0
    // rotation right = number of rotations

        int x = s.size();
        
        List<List<Integer>> temp = new ArrayList<>(); // temp array
        for (int i =0; i <x; i++){
            List<Integer> temp_row = new ArrayList<>(); 
            for (int j = 0; j < x; j++) {
                temp_row.add(0);
            }
            temp.add(temp_row);
        }
        
        if (reflection == 1) {
            for (int  i = 0; i < x; i++) { // make horisontal reflaction
                for (int  j = 0; j < x; j++) {
                    int i2 = i;
                    int j2 = x - j - 1;
                    int value1 = s.get(i).get(j);
                    setValue(temp, i2, j2, value1);
                }
            }
            for (int i = 0; i < x; i++) { // set back to s array
                for (int j = 0; j < x; j++) {
                    int value1 = temp.get(i).get(j);
                    setValue(s, i, j, value1);
                }
            }
        }

        for (int r = 1; r <= rotation; r++) {
            for (int i = 0; i < x; i++) { // rotate rigth
                for (int j = 0; j < x; j++) {
                    int i2 = j;
                    int j2 = x - i - 1;
                    int value1 = s.get(i).get(j);
                    setValue(temp, i2, j2, value1);
                }
            }
            
            for (int i = 0; i < x; i++) { // set back to s array
                for (int j = 0; j < x; j++) {
                    int value1 = temp.get(i).get(j);
                    setValue(s, i, j, value1);
                }
            }
        }
        return s;    
    }

    public static int formingMagicSquare(List<List<Integer>> s) {
    // Write your code here
        // create magic square
        List<List<Integer>> magic = new ArrayList<>();
        List<Integer> row1 = new ArrayList<>();
        row1.add(8);
        row1.add(1);
        row1.add(6);
        magic.add(row1);
        List<Integer> row2 = new ArrayList<>();
        row2.add(3);
        row2.add(5);
        row2.add(7);
        magic.add(row2);
        List<Integer> row3 = new ArrayList<>();
        row3.add(4);
        row3.add(9);
        row3.add(2);
        magic.add(row3);

        int min = 9999; 
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(0,0,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(1,0,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(0,1,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(1,0,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(0,2,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(1,0,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(0,3,magic)));
        min = Math.min(min, compare2dArrayLists(s, changeMagicSquare(1,0,magic)));
        
        return min;
    }

}

public class magicSquare {
    public static void main(String[] args) throws IOException {
        
        List<List<Integer>> s = new ArrayList<>();
        List<Integer> r1 = Result.stringToListInteger("4 8 2");
        List<Integer> r2 = Result.stringToListInteger("4 5 7");
        List<Integer> r3 = Result.stringToListInteger("6 1 6");
        s.add(r1);
        s.add(r2);
        s.add(r3);

        //System.out.println(s);

        int result = Result.formingMagicSquare(s);
        System.out.println(result);
    }
}
