import java.util.*;

public class ProductSearch {

    // Step 2:Product class with required attributes
    static class Product {
        int productId;
        String productName;
        String category;

        Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }
    }

    // Linear Search Implementation(Unsorted Array)
    public static int linearSearch(Product[] products, int id) {
        for (int i = 0; i < products.length; i++) {
            if (id == products[i].productId) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search Implementation(Sorted Array)
    public static int binarySearch(Product[] sortedProducts, int id) {
        int low = 0, high = sortedProducts.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (sortedProducts[mid].productId == id) {
                return mid;
            } else if (sortedProducts[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Sample Product Array
        Product[] products = {
            new Product(501, "Smartphone", "Electronics"),
            new Product(205, "Backpack", "Accessories"),
            new Product(312, "Dress", "Clothing"),
            new Product(150, "Notebook", "Stationery")
        };

        while (true) {
            System.out.println("1. Search by Linear Search");
            System.out.println("2. Search by Binary Search");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            if (choice == 1) {
                System.out.print("Enter product id to search(Linear): ");
                int id = sc.nextInt();

                long start = System.nanoTime();
                int found = linearSearch(products, id);
                long end = System.nanoTime();

                if (found != -1) {
                    System.out.println("Product found: " + products[found].productName);
                } else {
                    System.out.println("Product not found.");
                }

                System.out.println("Time taken by Linear Search: " + (end - start) + " ns");

            } else if (choice == 2) {
                System.out.print("Enter product id to search(Binary): ");
                int id = sc.nextInt();

                // Create and sort a copy of the products array
                Product[] sortedProducts = Arrays.copyOf(products, products.length);
                Arrays.sort(sortedProducts, Comparator.comparingInt(p -> p.productId));

                long start = System.nanoTime();
                int found = binarySearch(sortedProducts, id);
                long end = System.nanoTime();

                if (found != -1) {
                    System.out.println("Product found: " + sortedProducts[found].productName);
                } else {
                    System.out.println("Product not found.");
                }

                System.out.println("Time taken by Binary Search: " + (end - start) + " ns");

            } else if (choice == 3) {
                System.out.println("Exiting...");
                break;
            } else {
                System.out.println("Invalid choice.Try again.");
            }
        }
    }
}

