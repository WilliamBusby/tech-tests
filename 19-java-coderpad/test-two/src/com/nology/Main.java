package com.nology;

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public static void main(String[] args) {
        System.out.println(pigLatinize("pig")); // should print out "ig-pay"
    }

    public static String pigLatinize(String phrase) {
        return Arrays.stream(phrase.split(" "))
                .map(word -> word.split("(?i)(?=[aeiou])", 2))
                .map(sets -> punctuate((sets[0].matches("(?i)(?=[aeiou]).*"))
                        ? (sets[0] + sets[1] + "-way")
                        : (sets[1] + "-" + sets[0] + "ay")))
                .collect(Collectors.joining(" "));
    }

    public static String punctuate(String word) {
        for (int i = 0; i < word.length(); i++) {
            if (!Character.isLetterOrDigit(word.charAt(i)) && word.charAt(i) != '-' && word.charAt(i) != '\'') {
                return word.substring(0, i) + word.substring(i + 1) + word.charAt(i);
            }
        }
        return word;
    }

}