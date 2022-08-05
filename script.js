var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((to)=>to.json()).then((to1)=>foo(to1));

function foo(cas){
cas.forEach((i)=>
   {
    console.log(i);
    var div=document.createElement("div");
    div.innerHTML=`<div class="card" style="width: 18rem; border:2px solid brown;">
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${i.id}</li>
      <li class="list-group-item">Title:${i.title}</li>
      <li class="list-group-item">Body:${i.body}</li>
     
    </ul>
  </div>`
  document.body.append(div);
    
   })
}