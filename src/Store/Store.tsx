import { makeAutoObservable } from "mobx";

class Store {
  metadata: any = [];
  imageData: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMetadata(metadata: any) {
    this.metadata = metadata;
  }

  setImageData(imageMetaData: any) {
    this.imageData = imageMetaData;
  }
}

export default new Store();
