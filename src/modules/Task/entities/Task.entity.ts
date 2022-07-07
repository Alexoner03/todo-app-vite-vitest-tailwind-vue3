import {Importance, State} from "@/modules/Task/entities/enums";

export default interface Task {
    date: Date;
    state: State;
    name: string;
    importance: Importance
}