function initPlantScript() {
    scriptplant = ["My poor plants. I’m sorry I’ve been neglecting you guys for the last few months.", "Before starting school this place looked like a jungle. But more than a few of them have died since then.", "And to think just a couple of years ago I couldn’t keep a plant alive to save myself!", "Well, progress isn’t linear… or something like that.", "They make me happy even though it’s hard to take care of them sometimes."];
    pscript = new Script(scriptplant, NORMAL);
    return pscript;
}

function initwaterMeter() {
    let meter = []
    for (let i = 0; i < plants.length; i++) {
        meterlengths = [120, 100, 50, 150];
        meter[i] = new waterMeter(meterlengths[i]);
    }
    return meter;
}
function scenePlants() {
    decisionPane2.setVisible(false);
    image(plants[nailN], 0, 0, width, height);
    let txtBx = new textBox();
    txtBx.display();
    PlantScript.display();
    PlantScript.begin(true);
    waterMeters[plantN].display();
    if (PlantScript.isScriptDone()) {
        backButtonDay2.setVisible(true);
        backButtonDay2.display();
    }
}

function plantsMousePressed() {
    //PlantScript.clicked();
}

class waterMeter {
    constructor(meterMax) {
        this.meterMax = meterMax;
        this.meterLength = 0;
        this.xPos = width - 200;
        this.yPos = 50;
        this.h = 20;
        this.r = 20;
    }
    
    display() {
        push();
        stroke(0);
        push();
        fill(200, 200, 255, 128);
        rect(this.xPos, this.yPos, this.meterMax, this.h, this.r);
        pop();
        fill('green');
        rect(this.xPos, this.yPos, this.meterLength, this.h, this.r)
        pop();
    }

    water() {
        if (mouseIsPressed === true) {
            this.meterLength++;
            console.log("this.meterLength " + this.meterLength);
        }
    }
}

function sceneDinner() {

}