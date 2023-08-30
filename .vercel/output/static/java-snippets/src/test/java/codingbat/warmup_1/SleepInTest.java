package codingbat.warmup_1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SleepInTest {
// https://codingbat.com/prob/p187868
    public boolean sleepIn(boolean weekday, boolean vacation) {
        return !weekday || vacation;
    }

}