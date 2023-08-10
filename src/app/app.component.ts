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



const song: Array<string> =  [
  "assets/muziek/10.000 beukennoten.ogg",
 "assets/muziek/Cupido.mp3",
 "assets/muziek/De Beverdans.mp3",
 "assets/muziek/Dit is Rodenttube.mp3",
 "assets/muziek/eet sla.mp3",
 "assets/muziek/Hij knaagt de mooiste.mp3",
 "assets/muziek/Iemand waar ik bomen mee kan knagen.mp3",
 "assets/muziek/Ik ben Ricardo.mp3",
 "assets/muziek/Ik knaag hout met achtergrond muziek.mp3",
 "assets/muziek/Kerstbever.ogg",
 "assets/muziek/Knagen.mp3",
 "assets/muziek/Leve het knaagdierleven.mp3",
 "assets/muziek/Nibble Again.mp3",
 "assets/muziek/Niemand kan beter knagen dan ik.mp3",
 "assets/muziek/O Beverburcht 2.mp3",
 "assets/muziek/Rodenttube Rap.ogg",
 "assets/muziek/Uiteindelijk maakt geld niks uit.mp3",
 "assets/muziek/Vrede wereldwijd.mp3",
 "assets/muziek/We gaan naar een bos.mp3",
 "assets/muziek/Wedden.mp3",
 "assets/muziek/Wie knaagt er aan die boom.mp3",
 "assets/muziek/Wood.mp3",
 "assets/muziek/Zoek de connectie.mp3",
 "assets/muziek/O Beverburcht 2.mp3",
 "assets/muziek/Zonder mama.mp3",
 "assets/muziek/Uiteindelijk maakt geld niks uit.mp3",
 "assets/muziek/We gaan naar een bos.mp3",
 "assets/muziek/Wedden.mp3",
 "assets/muziek/Wie knaagt er aan die boom.mp3",
 "assets/muziek/Wood.mp3",
 "assets/muziek/Zoek de connectie.mp3",
 "assets/muziek/Zonder mama.mp3",
];
// Current index of the files arrayy
// Get the audio element

  let audio = new Audio();
  audio.src = "../assets/muziek/10.000-beukennoten.ogg";
  audio.load();
  audio.play();
//Load on run
if (document.readyState !== 'loading') {
}

function parseString(arg0: number) {
throw new Error("Function not implemented.");
}
