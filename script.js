const input=document.querySelector('#input')
const ListeContact=document.querySelector('.Liste-Contact')




const ContactListe=[{
	id:0,
	nom:"KONE",
	prenom:"Ibrahim",
	Numero:62009867
},{
	id:1,
	nom:"TOURE",
	prenom:"Alassane",
	Numero:56890337
},
{
	id:2,
	nom:"SAMASSI",
	prenom:"Mahimouna",
	Numero:8956478
},{
	id:3,
	nom:"OUEDRAOGO",
	prenom:"Djeneba",
	Numero:90987678
},{
	id:4,
	nom:"COULIBALY",
	prenom:"Tinin",
	Numero:4567907
},{
	id:5,
	nom:"CHANTOU",
	prenom:"Ella",
	Numero:568543990
},
{
	id:6,
	nom:"ADAE",
	prenom:"Kouamé Berenger",
	Numero:67543879
},{
	id:7,
	nom:"ALOUFOU",
	prenom:"Bosso Franck",
	Numero:342352576
}
,{
	id:8,
	nom:"BALLO",
	prenom:"Francois Regis",
	Numero:77953344
}
,{
	id:9,
	nom:"BOKA",
	prenom:"Ernest Gregoire",
	Numero:25573537
}

]






input.addEventListener('keyup',function(){
   let value=input.value

	search(value.toUpperCase())
})

template()
function template(){

	for(i=0;i<ContactListe.length;i++){
		

		const temp=`<li class="liste-Item" id="${ContactListe[i].id}">
				<h6 style="font-size:16px"> ${ContactListe[i].nom}
				 <span style="color:blue;font-size:14px">${ ContactListe[i].prenom} </span>
	 			<span style="margin-left:30px;color:#777;font-size:14px";font-weight:bold;margin-left:30px;>${ ContactListe[i].Numero} <span class="fa fa-phone" ><span></span>


				 </h6>


		 		</li>`



		ListeContact.insertAdjacentHTML('beforeEnd',temp)
			
			}
		
		
}





function search(value){

for(i=0;i<ContactListe.length;i++){
	if(ContactListe[i].nom.toUpperCase().indexOf(value)>-1||ContactListe[i].prenom.toUpperCase().indexOf(value)>-1){
		document.getElementById(ContactListe[i].id).style.display="";
	}
	else
	{
		
		document.getElementById(ContactListe[i].id).style.display="none"
	}
}

}

