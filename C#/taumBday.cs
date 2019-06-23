public static long taumBday(int b, int w, int bc, int wc, int z)
{
    if(bc > (wc + z)){

        bc = wc + z;

    }else if(wc > (bc + z)){

        wc = bc + z;
    }

    return (long) b*bc + (long) w*wc;
}