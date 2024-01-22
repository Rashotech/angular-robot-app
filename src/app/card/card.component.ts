import { Component, Input } from '@angular/core';
import { IRobot } from '../model/robot';
import "tachyons";


@Component({
  selector: 'robot-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true,
  })
  robot: IRobot;

  @Input()
  isOdd: boolean = false;

  @Input()
  isEven: boolean = false;

  @Input()
  isFirst: boolean = false;

  constructor() {
    this.robot = {
      id: 0,
      name: 'Robot',
      username: 'robot',
      email: 'robot@email.com',
    };
    
  }

  onRobotClicked() {
    console.log('onRobotClicked', this.robot?.id);
  }

  applyEvenStyle() {
    return "is-even"
  }

  applyOddStyle() {
    return "is-odd"
  }
}