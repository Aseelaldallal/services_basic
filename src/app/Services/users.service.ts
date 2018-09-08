import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";


@Injectable()

export class UserService {

    private activeUsers = ['Max', 'Anna'];
    private inactiveUsers = ['Chris', 'Manu'];
    private counterService: CounterService;

    constructor(counterService: CounterService) {
        this.counterService = counterService;
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementActions();
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementActions();
    }

}