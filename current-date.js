const current = new Date();
const mm = String(current.getMonth() + 1).padStart(2, '0');
const dd = String(current.getDate()).padStart(2, '0');
const yyyy = current.getFullYear();
console.log('${mm}-${dd}-${yyyy}');
console.log('${mm}/${dd}/${yyyy}');
console.log('${dd}-${mm}-${yyyy}');
console.log('${dd}/${mm}/${yyyy}');
