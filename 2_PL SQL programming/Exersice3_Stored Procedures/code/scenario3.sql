CREATE OR REPLACE PROCEDURE TransferFunds (
    from_id IN NUMBER,
    to_id IN NUMBER,
    amount IN NUMBER
)
IS
    from_balance NUMBER;
BEGIN
    
    SELECT Balance INTO from_balance
    FROM Accounts
    WHERE AccountID = from_id FOR UPDATE;

    IF from_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient balance');
        RETURN;
    END IF;

    
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_id;

    
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_id;

    DBMS_OUTPUT.PUT_LINE('Amount Transferred Successfully from Account ' || from_id || ' to Account ' || to_id);
END;
/

BEGIN
    TransferFunds(1, 2, 300);
END;
/