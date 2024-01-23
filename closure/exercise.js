function createPetList() {
  const petList = [];
  function addPet(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    console.log(petList);
    return petList;
  }
  return addPet;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();
