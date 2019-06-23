static void kaprekarNumbers(int p, int q) {

    int i = p;
    int kapreKarCount = 0;

    while(i <= q)
    {
        if(isKaprekarNumber(i))
        {
            Console.Write(i + " ");
            kapreKarCount++;
        }
        i++;
    }

    if(kapreKarCount == 0)
    {
        Console.WriteLine("INVALID RANGE");
    }
}

static bool isKaprekarNumber(int n){

    long m = (long) n*n;
    String mStr = m.ToString();

    int half = (int) Math.Floor( (double) mStr.Length/2 );

    String rStr = mStr.Substring(half);
    String lStr = mStr.Substring(0, half);

    int lrSum = Int32.Parse(rStr) + ( (lStr !="") ? Int32.Parse(lStr) : 0 );
    
    return lrSum == n;
}