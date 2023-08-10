import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rodenttube';
song: any;
}



const song: String [] =  [
  "../assets/muziek/10.000-beukennoten.ogg",
 "../assets/muziek/Cupido.mp3",
 "../assets/muziek/De Beverdans.mp3",
 "../assets/muziek/Dit is Rodenttube.mp3",
 "../assets/muziek/eet sla.ogg",
 "../assets/muziek/Hij knaagt de mooiste.mp3",
 "../assets/muziek/Iemand waar ik bomen mee kan knagen.mp3",
 "../assets/muziek/Ik ben Ricardo.mp3",
 "../assets/muziek/Ik knaag hout met achtergrond muziek.mp3",
 "../assets/muziek/Kerstbever.ogg",
 "../assets/muziek/Knagen.ogg",
 "../assets/muziek/Leve het knaagdierleven.mp3",
 "../assets/muziek/Nibble Again.ogg",
 "../assets/muziek/Niemand kan beter knagen dan ik.mp3",
 "../assets/muziek/O Beverburcht 2.ogg",
 "../assets/muziek/Rodenttube Rap.ogg",
 "../assets/muziek/Uiteindelijk maakt geld niks uit.mp3",
 "../assets/muziek/Vrede wereldwijd.mp3",
 "../assets/muziek/We gaan naar een bos.mp3",
 "../assets/muziek/Wedden.mp3",
 "../assets/muziek/Wie knaagt er aan die boom.mp3",
 "../assets/muziek/Wood.ogg",
 "../assets/muziek/Zoek de connectie.mp3",
 "../assets/muziek/O Beverburcht 2.mp3",
 "../assets/muziek/Zonder mama.mp3",
];
// Current index of the files arrayy
// Get the audio element

function getRandomsong() {
  let audio = document.getElementById('audio') as HTMLAudioElement;
  audio.src = song[Math.floor(Math.random() * 25)].toString();
  audio.autoplay = true;
  audio.load();
  audio.play();
}
//Load on run
window.onload = () => {
  let audio = document.getElementById('audio') as HTMLAudioElement;
  audio.src = song[Math.floor(Math.random() * 25)].toString();
  audio.autoplay = true;
  audio.load();
  audio.play();
}
let audio = document.getElementById('audio') as HTMLAudioElement;
audio.addEventListener('ended', getRandomsong);

function parseString(arg0: number) {
throw new Error("Function not implemented.");
}
