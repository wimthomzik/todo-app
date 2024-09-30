/* 
========================================
Defintion of Todo-item
======================================== 
*/

import { v4 as uuidv4 } from 'uuid';

export default class Todo {
    constructor() {
        this.title = '';
        this.notes = '';
        this.isCompleted = false;
        this.id = uuidv4();
    }
}
