const searchForm = document.querySelector("#microfono");
function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
    document.getElementById("img").src = reader.result;
    const imagen=document.getElementById("img"); }}}
    $("#url").change(function(){
    var url = $(this).val();    
    document.getElementById("img").src = url;
    $("#img").html('<img src="'+ url +'" alt="imagen">')    })

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if(SpeechRecognition){
    console.log("Your Browwser supports speech Recognition");
    searchForm.insertAdjacentHTML("beforeend", '<center><button type="button"><i class="fas fa-microphone"></i></button></center>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-MX";
    recognition.start(); 
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        if(micIcon.classList.contains("fa-microphone")) {
            recognition.start();
        }
        else{
            recognition.stop();
        }
    }
    recognition.addEventListener("start", startSpeechRecognition); 
    function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    console.log("Speech Recognition Active");   }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    console.log("Speech Recognition Disconnected");   }

    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition() {
    const currentResultIndex = event.resultIndex;
    const transcript = event.results[currentResultIndex][0].transcript;


/*----Comienzo de comandos----- */

/*COMANDO CONTRAER IMAGEN */
        if (transcript.toLowerCase().trim() === "contraer imagen") {
            var t1 = just.animate({
                targets: "#img",
                duration: 4500,
                web: {
                   transform: [
                    { offset: 0, value: "scale(1, 1)" },
                    { offset: 0.3, value: "scale(.60, .60)" },
                    { offset: 0.4, value: "scale(.50, .50)" },
                    { offset: 0.5, value: "scale(.25, .25)" },
                    { offset: 0.5, value: "scale(.150, .150)" },
                    { offset: 1, value: "scale(1, 1)" }
                    ]
                }
            });
            t1.play();
        }

/*COMANDO AMPLIAR IMAGEN */
        else if (transcript.toLowerCase().trim() === "ampliar imagen") {
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
               transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(1.5, 1.5)" },
          { offset: 0.4, value: "scale(1.20, 1.20)" },
          { offset: 0.5, value: "scale(1.35, 1.35)" },
          { offset: 0.65, value: "scale(1, 1)" },
          { offset: 0.75, value: "scale(4, 4)" },
          { offset: 1, value: "scale(1, 1)" }
                ],
              }
            });
            t1.play();
        }


 /*COMANDO REVENTAR IMAGEN */       
        else if (transcript.toLowerCase().trim() === "reventar imagen") {
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
               transform: [
                { offset: 0, value: "scale(1, 1)" },
                { offset: 0.3, value: "scale(1.10, 0)" },
                { offset: 0.4, value: "scale(0, 1.10)" },
                { offset: 0.5, value: "scale(1, 1)" },
                { offset: 0.65, value: "scale(2, 2)" },
                { offset: 0.75, value: "scale(3, 3)" },
                { offset: 0.90, value: "scale(1, 1)" },
                { offset: 1, value: "scale(0, 0.30)" },
                { offset: 1.2, value: "scale(1, 1)" }
                ],
              }
            });
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "mover imagen") {
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
               transform: [
                
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1.25, 4)" },
         { offset: 0.4, value: "scale(4, 1.25)" },
         { offset: 0.5, value: "scale(1.25, 4)"},
         { offset: 0.65, value: "scale(4, 1.25)" },
         { offset: 0.75, value: "scale(1.25, 4)" },
         { offset: 0.90, value: "scale(4, 1.25)" },
         { offset: 1, value: "scale(1.25, 4)" },
         { offset: 1.3, value: "scale(4, 1.25)" },
         { offset: 1.4, value: "scale(1.25, 4)"},
         { offset: 1.5, value: "scale(4, 1.25)" },
         { offset: 1.65, value: "scale(1.25, 4)" },
         { offset: 1.75, value: "scale(4, 1.25)" },
         { offset: 2, value: "scale(1, 1)" }
                ],
              }
            });
            t1.play();
        }

/*COMANDO ROTAR IMAGEN */
        else if (transcript.toLowerCase().trim() === "rotar imagen") {
            const v = document.querySelector("#img").animate(
                [
                  {transform: "rotate(0)"},
                  {transform: "rotate(-90deg)"}
                ],
                {
                  duration: 1000, fill: "forwards"
                }
              );
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "imagen grande y pequeña") {
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
               transform: [
                
                { offset: 0, value: "scale(1, 1)" },
                { offset: 0.3, value: "scale(2, 2)" },
                { offset: 0.4, value: "scale(3, 3)" },
                { offset: 0.5, value: "scale(4, 4)"},
                { offset: 0.65, value: "scale(5, 5)" },
                { offset: 0.75, value: "scale(6, 6)" },
                { offset: 0.90, value: "scale(5, 5)" },
                { offset: 1, value: "scale(4, 4)" },
                { offset: 1.3, value: "scale(3, 3)" },
                { offset: 1.4, value: "scale(2, 2)"},
                { offset: 1.75, value: "scale(1, 1)" },
                { offset: 1.9, value: "scale(2, 2)" },
                { offset: 2, value: "scale(3, 3)" },
                { offset: 2.2, value: "scale(4, 4)"},
                { offset: 2.4, value: "scale(5, 5)" },
                { offset: 2.5, value: "scale(6, 6)" },
                { offset: 2.65, value: "scale(5, 5)" },
                { offset: 2.8, value: "scale(4, 4)" },
                { offset: 3, value: "scale(3, 3)" },
                { offset: 3.2, value: "scale(2, 2)"},
                { offset: 3.4, value: "scale(1, 1)" }
                ],
              }
            });
            t1.play();
        }
   
 /*COMANDO PARPADEO DE IMAGEN */       
        
        else if (transcript.toLowerCase().trim() === "parpadeo de imagen") {
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
               transform: [
                  { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(0, 0)" },
         { offset: 0.4, value: "scale(1, 1)" },
         { offset: 0.5, value: "scale(0, 0)"},
         { offset: 0.65, value: "scale(1, 1)" },
         { offset: 0.75, value: "scale(0, 0)" },
         { offset: 0.90, value: "scale(1, 1)" },
         { offset: 1, value: "scale(0, 0)" },
         { offset: 1.3, value: "scale(1, 1)" },
         { offset: 1.4, value: "scale(0, 0)"},
         { offset: 1.5, value: "scale(1, 1)" },
         { offset: 1.65, value: "scale(0, 0)" },
         { offset: 1.75, value: "scale(1, 1)" }
                  
                ],
                
                }
          });
            t1.play();
        }

 /*COMANDO ESFUMAR IMAGEN */   

        else if (transcript.toLowerCase().trim() === "esfumar imagen") {
          var t1 = just.animate({
              targets: "#img",
              duration: 4500,
              web: {
                  opacity: [.25, .75]                  
              }
          });
          t1.play(); }
        else if(transcript.toLowerCase().trim()==="rebote de imagen"){
            var t1 = just.animate({
              targets: "#img",
              duration: 1200,
              web: {
                  transform: [
                    { offset: 0, value: "scale(1, 1)" },
                    { offset: 0.3, value: "scale(1.25, .75)" },
                    { offset: 0.4, value: "scale(.75, 1.25)" },
                    { offset: 0.5, value: "scale(1.15, .85)" },
                    { offset: 0.65, value: "scale(.95, 1.05)" },
                    { offset: 0.75, value: "scale(1.05, .95)" },
                    { offset: 1, value: "scale(1, 1)" },
                    { offset: 0, value: "scale(1, 1)" }
                  ]
              }
            });
            t1.play();
        }

 /*COMANDO IMAGEN EN FORMA DE CRUZ*/     
        else if(transcript.toLowerCase().trim()==="imagen en forma de cruz"){
          var t1 = just.animate({
            targets: "#img",
            duration: 4500,
            web: {
                transform: [
                  { offset: 0, value: "scale(3, 1)" },
                  { offset: 0.3, value: "scale(1, 3)" },
                  { offset: 0.4, value: "scale(3, 1)" },
                  { offset: 0.5, value: "scale(1, 3)"},
                  { offset: 0.65, value: "scale(3, 1)" },
                  { offset: 0.75, value: "scale(1, 3)" },
                  { offset: 0.90, value: "scale(3, 1)" },
                  { offset: 1, value: "scale(1, 3)" },
                  { offset: 1.3, value: "scale(3, 1)" },
                  { offset: 1.4, value: "scale(1, 3)"},
                  { offset: 1.5, value: "scale(3, 1)" },
                  { offset: 1.65, value: "scale(1, 3)" },
                  { offset: 1.75, value: "scale(3, 1)" },
                  { offset: 1.90, value: "scale(1, 1)" }
                ]
            }
          });
          t1.play();
      }
      else if(transcript.toLowerCase().trim()==="ayuda del sitio") {
        window.open('archivo_ayuda.html');
      }
      else if (transcript.toLowerCase().trim()==="salir"){
       
        var mensaje;
         var opcion = confirm("¿Deseas culminar tu visita en el sitio?");
        
         if (opcion == true) { 
            window.close();     
       } else {
           mensaje = "No";
       }
         }
        
        info.textContent = 'Comandos de voz:';
        console.log(event);
        }
          }
          else {
              console.log("Your Browser does not support speech Recognition");
          }