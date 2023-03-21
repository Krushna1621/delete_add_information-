var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');


form.addEventListener('submit',additem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterList);

function additem(e)
{
       e.preventDefault();
      
       var newItem=document.getElementById('item').value;
       
       var li=document.createElement('li');

       li.className='list-group-item';

       li.appendChild(document.createTextNode(newItem));

       var deletebtn=document.createElement('button');

       deletebtn.className="btn btn-danger btn-sm float-right delete";

       deletebtn.appendChild(document.createTextNode('X'));

       li.appendChild(deletebtn);

       itemlist.appendChild(li);
}
function removeItem(e)
{
     e.preventDefault();
     if(e.target.classList.contains('delete')){
       if(confirm('Are you sure?')){
         var li=e.target.parentElement;
         itemlist.removeChild(li);

       }
     }
}

function filterList(e)
{
    var text=e.target.value.toLowerCase();

    var items=itemlist.getElementsByClassName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }

    });
}