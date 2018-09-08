


export class CounterService {

    private actions = 0;

    incrementActions() {
        this.actions++;
        console.log('Total Number of Actions: ', this.actions);
    }
}