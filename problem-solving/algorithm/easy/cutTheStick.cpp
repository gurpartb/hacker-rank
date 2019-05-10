#include <bits/stdc++.h>

using namespace std;

vector<string> split_string(string);

int min(vector<int> v){

    int smallest = v[0];

    for(int i = 0; i < v.size(); i++){

        if(v[i] < smallest){

            smallest = v[i];
        }
    }

    return smallest;
}

vector<int> subtract(vector<int> v, int num){

    vector<int> v2;

    for (int i = 0; i < v.size(); i++) {

        int diff = v[i] - num;

        v2.push_back(diff);
    }

    return v2;
}

vector<int> remove(vector<int> v, int num){

    vector<int> v2;

    for (int i = 0; i < v.size(); i++) {

        if(v[i] != num){

            v2.push_back(v[i]);
        }

    }

    return v2;
}

// Complete the cutTheSticks function below.
vector<int> cutTheSticks(vector<int> arr) {

    vector<int> res;

    do {

        res.push_back(arr.size());
        int vmin = min(arr);
        vector<int> vsub = subtract(arr, vmin);
        arr = remove(vsub, 0);
        
    } while (arr.size() > 0);

    return res;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split_string(arr_temp_temp);

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }

    vector<int> result = cutTheSticks(arr);

    for (int i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

vector<string> split_string(string input_string) {
    string::iterator new_end = unique(input_string.begin(), input_string.end(), [] (const char &x, const char &y) {
        return x == y and x == ' ';
    });

    input_string.erase(new_end, input_string.end());

    while (input_string[input_string.length() - 1] == ' ') {
        input_string.pop_back();
    }

    vector<string> splits;
    char delimiter = ' ';

    size_t i = 0;
    size_t pos = input_string.find(delimiter);

    while (pos != string::npos) {
        splits.push_back(input_string.substr(i, pos - i));

        i = pos + 1;
        pos = input_string.find(delimiter, i);
    }

    splits.push_back(input_string.substr(i, min(pos, input_string.length()) - i + 1));

    return splits;
}