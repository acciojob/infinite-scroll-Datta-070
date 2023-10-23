//your code here!
const infilist=document.getElementById('infi-list');
for(let i=1;i<=10;i++){
	const li=document.createElement('li');
	li.textContent=`List item ${i}`;
	infilist.appendChild(li);
}

windows.addEventListener('scroll', ()=>{
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	if(scrollTop + clientHeight >= scrollHeight-7){
		for(let i=1;i<=2;i++){
			const li=document.createElement('li');
			li.textContent=`List item ${i+infilist.children.length}`;
			infilist.appendChild(li);
		}
	}
	});