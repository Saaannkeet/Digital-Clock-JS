function clock(){
    var hours = document.getElementById("hrs");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
     var am_pm = document.getElementById("am");
    var time=new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c ;
  }
  setInterval(clock, 1000);

 

  function changeText(value) {
   
        document.getElementById('good').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!" + value;
        document.getElementById('grab').innerHTML = "LETS HAVE SOME LUNCH !!" + value;
        document.getElementById('nap').innerHTML = "Wake Up Time :default" + "<br>" + "Lunch Time : default"+ "<br>"+"Nap Time :default"+ "<br>"+" Night Time :default" + value;
    
      }
 
    
  
 

