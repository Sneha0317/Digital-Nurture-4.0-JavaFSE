CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept IN VARCHAR2, bonus IN NUMBER
)
IS
 cnt number :=0;
 BEGIN
    UPDATE EMPLOYEES SET 
    Salary = SALARY +(Salary * bonus/100)
    WHERE Department = dept;
    
    cnt:= SQL%ROWCOUNT;
    DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || cnt || ' employees in department: ' || dept);
END;

BEGIN
    UpdateEmployeeBonus('IT',30);
END;