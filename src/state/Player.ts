import Skills from './Skills';

export default class Player {
  name: string;
  skills: Skills;

  constructor(name: string) {
    this.name = name;
    this.skills = new Skills();
  }

  toJSON() {
    return {
      name: this.name,
      skills: this.skills,
    };
  }
}
