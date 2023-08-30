package codingbat.warmup_1;

public class NotStringTest {

    // https://codingbat.com/prob/p191914
    public String notString(String str) {
        if (str.startsWith("not")) return str;
        return "not " + str;
    }

}
