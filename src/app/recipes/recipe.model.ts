export class recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.description = desc;
    this.imagePath = imgPath;
    this.name = name;
  }
}
