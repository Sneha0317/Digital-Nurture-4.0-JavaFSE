BEGIN
  
  FOR cust IN (
    SELECT CustomerID, DOB
    FROM Customers
  ) LOOP

    IF MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12 > 60 THEN

      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = cust.CustomerID;

      DBMS_OUTPUT.PUT_LINE('Applied 1% discount for CustomerID: ' || cust.CustomerID);
    END IF;
  END LOOP;
END;
/