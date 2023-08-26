// const myName = 'mehedi Hasan';
// const age = 22;
// const Address = 'Borishal';
// const Hobi = 'Wed Devlopement hoya';
// const sentense = 'amar name  '+ myName + '\n amar boyos '+ age + 
// '\n amar address '+ Address+ '\n amar hobi  '+ Hobi;
// console.log(sentense);



//------------------------------- ES6   ---------------------------
const myName = 'mehedi Hasan';
const age = 22;
const Address = 'Borishal';
const Hobi = 'Wed Devlopement hoya';


const subjects = ['bangla', 'english', 'math']
const sentense1 =`
amar name ${myName}
amar subjects gula holo ${subjects.map(subjects => subjects).join(' / ')}
 amar boyes ${age}
  amar bari ${Address}
   amar hobi ${Hobi}
    `;
console.log(sentense1);