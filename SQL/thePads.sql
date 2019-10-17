SELECT concat (Name, '(', left( Occupation, 1), ')')
FROM Occupations
ORDER BY Name;
SELECT concat( 'There are a total of ', count( Occupation), ' ', lower( left( Occupation, 1) ), substring( Occupation, 2, len(Occupation) ), 's.' ) 
--[occupation]s.count(Occupation) as OccupationCount, Occupation
FROM Occupations 
GROUP BY Occupation
ORDER BY count( Occupation), Occupation;