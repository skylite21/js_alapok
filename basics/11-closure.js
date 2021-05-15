
// ---------------------- closure  
// warning: a closure az egyik legnehezebben megérthető dolog
// a js-ben, ha ez kevés, olvass utána!! (ez mondjuk a többi dologra is igaz...)


const outer = () => {
  let counter = 0;
  // closure: egy függvény mindíg hozzáfér ahhoz a scope-hoz amiben létre lett hozva.
  // akkor is ha már lefutott!
  // Persistent Lexical Scope Referenced Data
  // BACKPACK!
  const incrementCounter = () => {
    counter++;
    console.log(counter);
  };

  return incrementCounter;
};

const newFunction = outer();
newFunction(); // ez itt 1-et fog kiírni
newFunction(); // ez itt 2-t fog kiírni. Miért? Mert a scopeját az incrementCounter megőrzi a program futása alatt!
