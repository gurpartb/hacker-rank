#include <vector>
#include <string>

using namespace std;

vector<string> split_string(string);

// Complete the acmTeam function below.
vector<int> acmTeam(vector<string> topic) {

    char one = '1';

    vector<int> res;
    res.push_back(0);
    res.push_back(0);

    for(int i = 0; i < topic.size() - 1; i++){

        string s1 = topic[i];

        for(int j = i+1; j < topic.size(); j++){

            string s2 = topic[j];

            int count = 0;

            for(int k = 0; k < s1.size(); k++){

                if(s1[k] == one || s2[k] == one){

                    count++;
                }
            }

            if(count > res[0]){

                res[0] = count;
                res[1] = 0;
            }

            if(count == res[0]){

                res[1]++;
            }
        }
    }

    return res;
}