'use strict';

const rectangle = {
  width: 30,
  height: 50,

  set setWidth(newWidth) {
      if (Number.isFinite(num)) {
        this.width = newWidth;
     } else (this.width = 5);
  },

  set setHeight(newHeight) {
    if (Number.isFinite(newHeight)) {
      this.height = newHeight;
    } else (this.height = 5);

  },

  get getPerimeter() {
    return `${(this.width + this.height) * 2} см`
  },
  get getSquare() {
    return `${this.width * this.height} см`
  }

};

console.log(rectangle.getPerimeter);
console.log(rectangle.getSquare);
