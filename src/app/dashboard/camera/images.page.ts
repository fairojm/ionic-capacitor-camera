import { Component } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera"

@Component({
  selector: 'app-images',
  templateUrl: 'images.page.html',
  styleUrls: ['images.page.scss']
})
export class ImagesPage {
  capturedImgs: (string[] | undefined) = [];

  constructor() {}

  captureImage = async () => {
    console.log("Capture button clicked");
    try{
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
        saveToGallery: true
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      //@ts-ignore
       this.capturedImgs.push(imageUrl);
    }
    catch(e) {
      console.error(e);
    }
    }

} 
