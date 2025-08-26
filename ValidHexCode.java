import java.util.Scanner;

public class ValidHexCode {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String givenCode = sc.next();
        System.out.println(is_valid_hex_code(givenCode));
    }

    public static boolean is_valid_hex_code(String code){
        code = code.toUpperCase();
        if(!(code.charAt(0) == '#' && code.length() == 7)){
            return false;
        }
        for(int i = 1; i < code.length(); i++){
            if(!(code.charAt(i) >= '0' && code.charAt(i) <= '9' || code.charAt(i) >= 'A' && code.charAt(i) <= 'F')){
                return false;
            }
        }
        return true;
    }

}