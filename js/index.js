'use strict'

// + інкапсуляція (абстракція)
// + наслідування
// + поліморфізм

class Figure3D {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error('You cannot create instans in abstract class')
    }
    this.name = name
  }
  theVolume() {
    throw new Error('you call method absract class')
  }
}

class Sphere extends Figure3D {
  //сфера
  /**
   * @param {number} _radius
   * @param {number} diametr
   */
  constructor(diametr) {
    super('Sphere')
    this.diametr = diametr
  }
  set diametr(diametr) {
    if (typeof diametr !== 'number') {
      throw new TypeError('Diametr must be number!')
    }
    if (typeof diametr <= 0) {
      throw new RangeError('Diametr must > 0!')
    }
    this._diametr = diametr
    this._radius = diametr / 2
  }
  getVolume() {
    return `${this.name}\n${
      (4 / 3) * Math.PI * (this._radius * this._radius * this._radius)
    }`
  }
}

class Cube extends Figure3D {
  //куб
  /**
   *
   * @param {number} side
   */
  constructor(side) {
    super('cube')
    this.side = side
  }
  set side(side) {
    if (typeof side !== 'number') {
      throw new TypeError('Diametr must be number!')
    }
    if (typeof side <= 0) {
      throw new RangeError('Diametr must > 0!')
    }
    this._side = side
  }
  getVolume() {
    return `${this.name}\n${this._side * this._side * this._side}`
  }
}

class Cylinder extends Figure3D {
  //циліндр
  /**
   *
   * @param {number} side
   * @param {number} height
   */
  constructor(side, height) {
    super('cylinder')
    this.side = side
    this.height = height
  }
  set side(side) {
    if (typeof side !== 'number') {
      throw new TypeError('Diametr must be number!')
    }
    if (typeof side <= 0) {
      throw new RangeError('Diametr must > 0!')
    }
    this._side = side
    this._radius = side / 2
  }
  set height(height) {
    if (typeof height !== 'number') {
      throw new TypeError('Diametr must be number!')
    }
    if (typeof height <= 0) {
      throw new RangeError('Diametr must > 0!')
    }
    this._height = height
  }
  getVolume() {
    return `${this.name}\n${
      Math.PI * this._radius * this._radius * this._height
    }`
  }
}

function getVolume3DFigure(obj) {
  if (obj instanceof Figure3D) {
    return obj.getVolume()
  }
  throw new TypeError('Object must be figure')
}

try {
  const figure1 = new Sphere(10) //діаиетр
  const figure2 = new Cube(10) //сторона
  const figure3 = new Cylinder(10, 5) //сторона на висоту
  console.log(getVolume3DFigure(figure1))
  console.log(getVolume3DFigure(figure2))
  console.log(getVolume3DFigure(figure3))
} catch (error) {
  console.log(error)
}
