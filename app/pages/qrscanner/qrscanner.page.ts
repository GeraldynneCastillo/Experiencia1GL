import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {
  scannedResult: any;
  bandera: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true});
      if (status.granted) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      return;
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
  
      document.querySelector('body')?.classList.add('scanner-active');
      this.bandera = false;

      await BarcodeScanner.hideBackground();
  
      const result = await BarcodeScanner.startScan();
      console.log(result);
  
      if (result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground();
  
        document.querySelector('body')?.classList.remove('scanner-active');
        this.bandera = true;
        console.log(this.scannedResult);
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.startScan();
    document.querySelector('body')?.classList.add('scanner-active');
  }
}
