public class enums {
    
    enum Week {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
    }

    public static void main(String[] args) {
        Week week;
        week = Week.SUNDAY;

      //  for (Week day : Week.values()) {
        //    System.out.println(day);
            System.out.println(week.ordinal());
       // }
    }
}
//ordinal says postion of that letter