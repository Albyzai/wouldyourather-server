import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dilemma-button',
  templateUrl: './dilemma-button.component.html',
  styleUrls: ['./dilemma-button.component.scss']
})
export class DilemmaButtonComponent implements OnInit {
  @Input() color: string;
  @Input() question: string;
  @Input() votes: number;
  @Input('total-votes') totalVotes: number;
  @Input() isAnswered: boolean = false;
  @Output() answered: EventEmitter<boolean> = new EventEmitter<boolean>();
  percentage: number;
  chosen: boolean;
  options = { suffix: '%' };

  constructor() {
    console.log(this);
  }

  ngOnInit() {
    this.percentage = Math.floor((this.votes / this.totalVotes) * 100);
  }

  public submitAnswer(): void {
    if (this.isAnswered) return;
    this.answered.emit(true);
    this.chosen = true;
  }

  private AnimatePercentage(): void {}
}
