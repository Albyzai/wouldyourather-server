import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dilemma } from './models/Dilemma';
import { Observable } from 'rxjs';

const DILEMMA_BUFFER = 'dilemmas_buffer';
const DILEMMA_LIBRARY = 'dilemmas_library';

@Injectable({
  providedIn: 'root'
})
export class DilemmaService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = '/api/dilemmas';

  public getDilemmas(): Observable<Dilemma[]> {
    var query = {
      take: '10'
    };

    var lib = this.getDilemmaLirary();

    if (lib !== []) {
      query['ids'] = lib;
    }

    return this.httpClient.get<Dilemma[]>(this.baseUrl, {
      params: query
    });
  }

  public getDilemmaBuffer(): Dilemma[] {
    if (localStorage.getItem(DILEMMA_BUFFER) === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem(DILEMMA_BUFFER));
  }

  public getNextDilemmaFrombuffer(): Dilemma {
    var buffer: Dilemma[] = this.getDilemmaBuffer();
    var dilemma = buffer.shift();
    this.setBuffer(buffer);
    return dilemma;
  }

  public setDilemmaBuffer(dilemmas: Dilemma[]) {
    let buffer = this.getDilemmaBuffer();
    buffer.push(...dilemmas);
    localStorage.setItem(DILEMMA_BUFFER, JSON.stringify(buffer));
  }

  public addDilemmaToBuffer(dilemma: any) {
    let buffer = this.getDilemmaBuffer();
    console.log('buffer before: ', buffer);
    if (!buffer.includes(dilemma)) {
      console.log('pushing');
      buffer.push(dilemma);
      localStorage.setItem(DILEMMA_BUFFER, JSON.stringify(buffer));
    }
    console.log('buffer after: ', buffer);
  }

  public getDilemmaLirary(): Dilemma[] {
    if (localStorage.getItem(DILEMMA_LIBRARY) === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem(DILEMMA_LIBRARY));
  }

  private getBuffer(): Dilemma[] {
    return JSON.parse(localStorage.getItem(DILEMMA_BUFFER));
  }

  private setBuffer(dilemmas: Dilemma[]) {
    localStorage.setItem(DILEMMA_LIBRARY, JSON.stringify(dilemmas));
  }

  private setLibrary(dilemmas: Dilemma[]) {
    localStorage.setItem(DILEMMA_LIBRARY, JSON.stringify(dilemmas));
  }

  private getLibrary(): Dilemma[] {
    return JSON.parse(localStorage.getItem(DILEMMA_LIBRARY));
  }

  public getNext(): Dilemma {
    let buffer = this.getBuffer();
    let dilemma = buffer.shift();
    this.setBuffer(buffer);
    return dilemma;
  }

  public getPrevious(): Dilemma {
    let library = this.getLibrary();
    let dilemma = library.pop();
    return dilemma;
  }
}
