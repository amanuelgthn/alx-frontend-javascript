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
    this.name = name;
  }

  set length(length) {
    this.length = length;
  }

  set students(students) {
    this.students = students;
  }
}

export default HolbertonCourse;
