import java.util.Scanner;

public class FinancialForecasting {

    //Recursive method
    static double predict(double amount, double[] growth, int year) {
        // Base case
        if (year == growth.length) {
            return amount; 
        }

        //Recursive step
        return predict(amount * (1 + growth[year]), growth, year+1); 
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter starting amount: ");
        double initial = sc.nextDouble();

        //Past growth rates
        double[] rates = {0.5, 0.4, 0.6};

        double result = predict(initial, rates, 0);

        System.out.printf("Predicted amount after %d years: %.2f\n", rates.length, result);

    }
}

