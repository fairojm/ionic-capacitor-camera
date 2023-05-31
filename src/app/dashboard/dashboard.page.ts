import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Filesystem } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  @ViewChild('imagesCmp') ImagesPage: any
  base64Base: string = 'data:image/png;base64,'
  constructor(private router: Router, private toastService: ToastService) {}

  browseFiles = async () => {
    try{
      //Requesting permission to access the built-in file manager
      await Filesystem.requestPermissions();
      //Opening file exporer
      const {files} = await FilePicker.pickFiles({
        readData: true,
      });
      //Validate result and add the image to existing array if it is image type
      if(files && files[0].mimeType.includes('image') && files[0].data) {
        this.ImagesPage.capturedImgs.push(this.base64Base+files[0].data)
      }
      else{
        this.toastService.presentToast("Selected file is not image");
      }
    }
    catch(e) {
      console.error(e);
    }
  }

  logOut() {
    localStorage.removeItem('login_details');
    this.ImagesPage.capturedImgs = []
    this.router.navigate(['/login']);
  }

}
