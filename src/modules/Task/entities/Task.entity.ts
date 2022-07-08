import {Importance, State} from "@/modules/Task/entities/enums";

export default interface Task {
    date: Date;
    state: State;
    title: string;
    description: string;
    importance: Importance
}