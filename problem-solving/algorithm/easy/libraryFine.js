// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {

    // console.log(d2, d1)
 
     const yearLate = 10000;
     const perMonth = 500;
     const perDay = 15;
     const onTime = 0;
 
 
     if (y2 < y1) {
 
         return yearLate;
     } else if (y1 < y2) {
 
         return onTime;
     }
 
     if (m2 < m1) {
 
         return (m1 - m2) * perMonth;
 
     } else if (m1 < m2) {
 
         return onTime;
     }
 
     if (d2 < d1) {
 
         return (d1 - d2) * perDay;
     }
 
     return onTime;
 }