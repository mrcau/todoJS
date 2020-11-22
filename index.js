const items=document.querySelector('.items');
const input=document.querySelector('input');
const btnadd=document.querySelector('.btnadd');
const today=document.querySelector('.today');
const todo = document.querySelector('.todo');
let id = 0;
const date = new Date();
today.innerHTML =  date.toLocaleDateString();

btnadd.addEventListener('click',onItem);
input.addEventListener('keypress',(e) => {
  e.key=='Enter'&&onItem();
});
function onItem(){
    const content=input.value;
    if(content==''){
      return
    }
    input.value='';
    input.focus();
    const item = createItem(content);
  items.appendChild(item); 
  item.scrollIntoView();    
}

function createItem(content){
  const itemrow=document.createElement('div');
  const btndel=document.querySelector('btndel');
    itemrow.setAttribute('class','itemrow');
  itemrow.setAttribute('data-id',id);
  itemrow.innerHTML = `
  <div class="item">
    <span class="name">${id}순위. ${content}</span>
		<button class="btndel" data-id=${id}>삭제</button>
    </div>
    <hr>
  </div>
  `;
  id++;
 
todo.innerHTML = id;
  return itemrow;
}

items.addEventListener('click',(e) => {
  const ic = e.target.dataset.id;
  if(ic){
    const del=document.querySelector(`.itemrow[data-id="${ic}"`);
    del.remove();
    id--;
todo.innerHTML = id;
  }
})
