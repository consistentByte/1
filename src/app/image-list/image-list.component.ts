import { Component } from '@angular/core';


interface Image {
  id: number;
  src: string;
};

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css',
})
export class ImageListComponent {
  isImageOpened = false;
  imageOpenedData: any = null;
  imageList: Image[] = [
    {
      id: 1,
      src: 'https://shorturl.at/G2nzy',
    },
    {
      id: 1,
      src: 'https://shorturl.at/G2nzy',
    },
    {
      id: 1,
      src: 'https://shorturl.at/G2nzy',
    },
    {
      id: 1,
      src: 'https://shorturl.at/G2nzy',
    },
  ];

  onClickImage(image: Image) {
    this.imageOpenedData = image;
    this.isImageOpened = true;
    document.body.classList.add('blurred-background');
  }
  closeDialog(){
    this.isImageOpened = false;
    document.body.classList.remove('blurred-background');
  }
  dialogClosed() {
    this.imageOpenedData = null;
    this.isImageOpened = false;
    this.closeDialog();
  }
}
