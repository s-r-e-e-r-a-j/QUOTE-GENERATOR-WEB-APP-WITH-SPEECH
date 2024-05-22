
			var quote=document.querySelector("#quote");
			var author=document.querySelector("#author");
			var button=document.querySelector("#generate")
			button.addEventListener("click",GetQuote)

			
            function GetQuote(){
            	

			fetch("https://api.quotable.io/random ")
			.then((response)=>response.json())
			
			.then((data)=>{
	
              quote.innerHTML=`"${data.content}"<br>`;
              author.innerHTML=`--${data.author}`;
              console.log(data)
              var speech=new SpeechSynthesisUtterance();
              speech.text=data.content;
              speech.lang="en-GB"||"en-US"||"en-UK";
              speech.pitch=0.8;
              speech.rate=0.8;
              window.speechSynthesis.speak(speech)
			
              

			})
			

			
		};


		

			
			
		