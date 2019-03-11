export default class ProgressRing {
  constructor(args) {
    this.canvas = document.querySelector(args.selector);
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.circleCenterX =
      this.canvas.width % 2 === 0
        ? this.canvas.width / 2
        : this.canvas.width / 2 + 1;
    this.circleCenterY =
      this.canvas.height % 2 === 0
        ? this.canvas.height / 2
        : this.canvas.height / 2 + 1;
    this.circleRadius =
      this.canvasHeight - this.canvasWidth > 0
        ? (this.canvasWidth - 10) * 0.4
        : (this.canvasHeight - 10) * 0.4;
    this.lineWidth = args.lineWidth ? args.lineWidth : 5;
    this.lineColorDefault = "rgb(233,230,230)";
    this.lineColorDraw = "rgb(255,104,45)";
    this.region = [
      { start: 0.775, end: 1.025 },
      { start: 1.075, end: 1.325 },
      { start: 1.375, end: 1.625 },
      { start: 1.675, end: 1.925 },
      { start: 1.975, end: 2.225 }
    ];
    this.total = 100;
    this.step = this.total / 5;
    this.initChart();
  }
  initChart() {
    let context = this.canvas.getContext("2d");
    context.clearRect(0, 0, this.canvasWidth, this.canvasWidth);
    context.fillStyle = "#fff";
    context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.lineColorDefault;
    this.region.forEach(r => {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        r.start * Math.PI,
        r.end * Math.PI
      );
      context.stroke();
      context.closePath();
    });
  }
  drawChart(value) {
    this.initChart();
    let context = this.canvas.getContext("2d");
    context.strokeStyle = this.lineColorDraw;

    var last = value;
    var w = 0;
    if (value >= this.step) {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        this.region[0].start * Math.PI,
        this.region[0].end * Math.PI
      );
      context.stroke();
      last = value - this.step;
      w = 1;
    }
    if (value >= this.step * 2) {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        this.region[1].start * Math.PI,
        this.region[1].end * Math.PI
      );
      context.stroke();
      last = value - this.step * 2;
      w = 2;
    }
    if (value >= this.step * 3) {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        this.region[2].start * Math.PI,
        this.region[2].end * Math.PI
      );
      context.stroke();
      last = value - this.step * 3;
      w = 3;
    }
    if (value >= this.step * 4) {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        this.region[3].start * Math.PI,
        this.region[3].end * Math.PI
      );
      context.stroke();
      last = value - this.step * 4;
      w = 4;
    }
    if (value >= this.step * 5) {
      context.beginPath();
      context.arc(
        this.circleCenterX,
        this.circleCenterY,
        this.circleRadius,
        this.region[4].start * Math.PI,
        this.region[4].end * Math.PI
      );
      context.stroke();
    }
    context.beginPath();
    context.arc(
      this.circleCenterX,
      this.circleCenterY,
      this.circleRadius,
      this.region[w].start * Math.PI,
      ((0.25 * last) / this.step + this.region[w].start) * Math.PI
    );
    context.stroke();
  }
  setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext("2d");
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
  }
}
