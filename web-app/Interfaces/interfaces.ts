interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

interface Car {
  make: string;
  model: string;
  year: number;
}

interface EngineSpecification extends Car {
  enginType: string;
  horsePower: number;
}
