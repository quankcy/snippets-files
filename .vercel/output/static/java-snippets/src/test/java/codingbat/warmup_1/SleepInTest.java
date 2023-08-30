package codingbat.warmup_1;

class SleepInTest {
    // https://codingbat.com/prob/p187868
    public boolean sleepIn(boolean weekday, boolean vacation) {
        return !weekday || vacation;
    }

    /*
    sleepIn(false, false) → true
    sleepIn(true, false) → false
    sleepIn(false, true) → true
    sleepIn(true, true) → true
     */


}