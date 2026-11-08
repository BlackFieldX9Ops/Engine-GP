/**
 * Scene
 * Representa uma cena.
 * Status: Skeleton.
 */
export class Scene {
  constructor(name) {
    this.name = name;
    this.objects = [];
  }

  addObject(obj) {
    this.objects.push(obj);
  }
}
