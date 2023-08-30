package codingbat.warmup_1;

public class PosNeg {

    // https://codingbat.com/prob/p159227
    public boolean posNeg(int a, int b, boolean negative) {
        if (negative) return a < 0 && b < 0;
        return (a < 0 && b >= 0) || (a >= 0 && b < 0);
    }

}
