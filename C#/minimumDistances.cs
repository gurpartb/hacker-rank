static int minimumDistances(int[] arr)
{

    Dictionary<int, int > map = new Dictionary<int,int >();

    int i = 0;
    int min = arr.Length;

    foreach(int n in arr)
    {

        if(map.TryGetValue(n, out int lastIndex))
        {
            int dist = Math.Abs(lastIndex - i);
            min = Math.Min(min, dist);
            map[n] = i;

        } else {
            
            map.Add(n, i);
        }

        i++;
    }

    return (min == arr.Length)? -1 : min;
}