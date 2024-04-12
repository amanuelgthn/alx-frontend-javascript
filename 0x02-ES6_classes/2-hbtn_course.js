class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    }
    if (typeof (length) === 'number') {
      this._length = length;
    }
    if (Array.isArray(students)) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof (name) === 'string')
    {
      this._name = name;
    }
    else {
      throw new Error(Error)
    }
  }

  set length(length) {
    if (typeof (length) === 'number') {
      this._length = length;
    }
    else {
      throw new Error(Error)
    }
  }

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    }
    else {
      throw new Error(Error)
    }
  }
}

export default HolbertonCourse;
