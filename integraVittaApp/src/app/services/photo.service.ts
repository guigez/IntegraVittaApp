import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Storage } from '@ionic/storage';
import {AuthService} from './auth.service'


const TOKEN_KEY = 'jwt-token';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  private url: string = 'http://localhost:3001/api/';
  private options : any = {}

  constructor(private storage: Storage, private http: HttpClient, private authService: AuthService) {

  }


  public async addPhoto() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    
    return await this.readAsBase64(capturedPhoto);

  }

  public async savePhoto(photo) {

    let token = "erro";
    await this.storage.get(TOKEN_KEY).then(res => {token = JSON.parse(res).token})

    this.options = {'Authorization': 'Bearer ' + token}

    return this.http.post<any>(this.url + 'aluno/addPhoto', {photo : photo}, {headers: this.options});
  }

  private async readAsBase64(cameraPhoto: Photo) {
  // Fetch the photo, read as a blob, then convert to base64 format
  const response = await fetch(cameraPhoto.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;
}

convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
}


export interface Picture {
  filepath: string;
  webviewPath: string;
}