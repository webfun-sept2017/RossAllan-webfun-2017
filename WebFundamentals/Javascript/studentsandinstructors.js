var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
function nameList(a) {
  for(var i=0;i<a.length;i++){
    console.log(a[i].first_name+" "+a[i].last_name);
  }
}
nameList(students);
