package codingbat.warmup_1;

public class FrontBackTest {

    // https://codingbat.com/prob/p123384
    public String frontBack(String str) {
        if (str.length() > 1)
            return str.substring(str.length() - 1) + str.substring(1, str.length() - 1) + str.charAt(0);
        return str;
    }

}
