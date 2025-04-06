//option 1

class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };

//option 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//option3
class Labrador extends Dog {
    constructor(size) {
      super(name); // 'name' is undefined here
      this.size = size;
    }
  };

//option4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name; // This directly assigns 'name', skipping the parent class constructor
      this.size = size;
    }
  };
  