export class EnvValidation {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  required() {
    if (!this.value) {
      throw new Error(
        `Environment variable '${this.name}' should be specified`,
      );
    }
  }

  string() {
    if (typeof this.value !== 'string') {
      throw new Error(
        `Environment variable '${this.name}' should be a string`,
      );
    }
  }
}
