const student = [
    {id: 22, namee: 'fahim'},
    {id: 30, namee: 'rahim'},
    {id: 33, namee: 'karim'},
    {id: 34, namee: 'rana'}

];

const names = student.map(s =>s.namee);
 const IdNew = student.map(s => s.id);
 console.log(IdNew);