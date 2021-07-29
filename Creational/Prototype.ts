class Sheep {
  protected name: string;
  protected category: string;

  constructor(name: string, category: string = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }
  setName= (name: string) => this.name = name;
  

  getName= () => this.name;

  setCategory = (category: string)=> this.category = category;
  

  getCategory = ()=> this.category;
  
}

export default function prototypeSample() {
  const orginal = new Sheep("Jolly");
  console.log(orginal.getName());
  console.log(orginal.getCategory());

  const cloned = { ...orginal };
  cloned.setName('Dolly');
  console.log(cloned.getName());
  console.log(cloned.getCategory());
}

//Typescript clone method :
// const objShallowCopy = Object.assign({}, Obj1);
// const objShallowCopy = {...Obj1};
