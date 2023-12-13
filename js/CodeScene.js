function initCodeScene() {
    lastscripttext = ["The final presentation for this game is tomorrow and I still haven’t come up with the ending.",

        "Making it has taught me that I really like coding. I could spend hours working on minute details.",

        "But writing the story is more challenging. My character is supposed to come to some sort of meaningful conclusion when I can't even do that in my own life.",

        "Art school is not like engineering school. Assignments never really feel “finished”. It seems like there’s always something more I could be doing.",

        "And I don’t always have the capacity to do it all, so it never feels like I’m doing enough.",

        "I’m looking back to the months I spent working on this and thinking, “did I really need to spend all that time painting my nails or playing video games?",

        "But the fact of the matter is I wouldn’t have been able to produce what I have now if it were not for those times.",

        "I don’t have to feel guilty for any of that. I’m a person as well as a student.",

        "After all the only reason I’m in grad school is for my own benefit.  And that’s something I’m doing to take care of myself just as much as anything else."];
    let lastscript = new Script(lastscripttext, NORMAL);
    return lastscript;
}

function sceneCode(){
    image(laptop, 0, 0, width, height);
    let txtBx = new textBox();
    txtBx.display();
    CodeScript.display();
    CodeScript.begin(true);
}

function codeSceneMousePressed(){
CodeScript.clicked();
}