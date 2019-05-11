#include <vector>
#include <string>

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