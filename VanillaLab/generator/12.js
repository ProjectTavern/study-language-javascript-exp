function* genFunc() {
  throw new Error("new Error caused!");
}

function normalFunc() {
  const gen = genFunc();
  try {
    gen.next();
  } catch (error) {
    console.error('in catch =>', error);
    console.log('=====================');
    console.log('recovery');
    console.log('=====================');
  }
}

normalFunc();
