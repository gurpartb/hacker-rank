SELECT
    CASE WHEN A + B > C AND B + C > A AND C + A > B THEN 
            CASE WHEN A = B THEN
                    CASE WHEN B = C THEN 
                            "Equilateral"
                    ELSE
                            "Isosceles"
                    END
            ELSE 
                    CASE WHEN B = C THEN
                            "Isosceles"
                    ELSE 
                            CASE WHEN A = C THEN 
                                    "Isosceles"
                            ELSE 
                                    "Scalene"
                            END
                     END
            END
    ELSE
            "Not A Triangle" 
    END
FROM TRIANGLES;