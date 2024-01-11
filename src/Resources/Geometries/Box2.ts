import Geometrie from "./Geometrie";
import Axes from "./Modules/Axes";

export default class Box2 extends Geometrie {
  readonly size: Axes = new Axes();

  constructor(x: number, y: number, sizeX: number, sizeY: number) {
    super();
    this.position.set(x, y);
    this.size.set(sizeX, sizeY);
    this.origin.set(sizeX / 2, sizeY / 2);
  }

  centerX(): number {
    return this.position.x + this.size.x / 2;
  }

  centerY(): number {
    return this.position.y + this.size.y / 2;
  }

  fill(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(
      this.position.x + this.origin.x,
      this.position.y + this.origin.y
    );
    ctx.rotate(this.rotate);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(-this.origin.x, -this.origin.y, this.size.x, this.size.y);
    ctx.restore();
  }
}