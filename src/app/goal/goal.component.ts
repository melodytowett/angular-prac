import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
   new Goal (1, 'watch finding Nemo','I need to find nemo', new Date(2022,3,14)),
    new Goal(2, 'buy cookies','buy cookies for lunch', new Date(2022,6,9)),
    new Goal(3, 'buying new phone', 'Buy latest Sumsung Phone', new Date (2022,4,12)),
    new Goal(4, 'visit friends', 'visit my childhood friend', new Date(2022,5,11)),
    new Goal(5, 'code', 'code in javascript', new Date(2022,4,10)),
    new Goal (6, 'sleep','sleep alittle bit before coding again', new Date(2022,2,2))
  ];

   toggleDetails(index :any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete:any, index:number){
    if(isComplete){
      let toDelete = confirm("Are your sure you want to delete ${this.goals[index].name}?")
      this.goals.splice(index,1);
    }
  }
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
