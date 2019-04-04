import { Component, OnInit } from '@angular/core';
import { DilemmaService } from '../dilemma.service';
import { Dilemma } from '../models/Dilemma';

@Component({
  selector: 'dilemma-component',
  templateUrl: './dilemma.component.html',
  styleUrls: ['./dilemma.component.scss']
})
export class DilemmaComponent implements OnInit {
  public answered: boolean = false;
  public dilemma: Dilemma = null;
  public totalVotes: number;
  constructor(private service: DilemmaService) {}

  ngOnInit() {
    this.getNextDilemma();
    console.log(this);
  }

  public getNextDilemma(): void {
    var buffer = this.service.getDilemmaBuffer();
    if (buffer.length === 0) {
      this.service.getDilemmas().subscribe((dilemmas: Dilemma[]) => {
        for (var i = 0; i < dilemmas.length; i++) {
          console.log('adding to buffer:', dilemmas[i]);
          this.service.addDilemmaToBuffer(dilemmas[i]);
        }
      });
    }

    this.dilemma = this.service.getNextDilemmaFrombuffer();

    this.totalVotes =
      this.dilemma.red_votes.length + this.dilemma.blue_votes.length;
  }

  public onAnswered(isAnswered: boolean): void {
    console.log('onAnswer hit!');
    this.answered = isAnswered;
  }

  private fetchDilemmas() {}
}
