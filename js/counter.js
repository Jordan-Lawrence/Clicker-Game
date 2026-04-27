export class Counter{
    constructor(scoreTxt, highScoreTxt = null) {
        this.scoreTxt = scoreTxt;
        this.highScoreTxt = highScoreTxt
        this.count = 0;
        this.highScore = 0 
    }

    increment(value = 1) {
        this.count += value;
        if (this.count > this.highScore) {
            this.highScore = this.count;
        }
        this.update();
        
    }

    reset() {
        this.count = 0;
        this.update();
    }

    update() {
        this.scoreTxt.textContent = String(this.count);
        this.highScoreTxt.textContent = String(this.highScore)
    }
}
