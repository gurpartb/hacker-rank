#include <string>

struct Player
{
    int score;
    std::string name;
};


static int comparator(Player a, Player b){
        
        // ascending order
        if(a.score > b.score){

            return 1;
        }

        if(a.score < b.score){

            return -1;
        }

        // decending order
        if(a.name > b.name){

            return -1;
        }
        
        return 1;
    }