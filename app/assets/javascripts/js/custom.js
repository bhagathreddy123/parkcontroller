// img-1
$(document).ready(function(){
	$(".img-1").click(function(){
		$("#myModal").modal('show');
	});
});
// img-2
$(document).ready(function(){
	$(".img-2").click(function(){
		$("#img-2").modal('show');
	});
});
// img-3
$(document).ready(function(){
	$(".img-3").click(function(){
		$("#img-3").modal('show');
	});
});
// img-4
$(document).ready(function(){
	$(".img-4").click(function(){
		$("#img-4").modal('show');
	});
});
// img-5
$(document).ready(function(){
	$(".img-5").click(function(){
		$("#img-5").modal('show');
	});
});
// img-6
$(document).ready(function(){
	$(".img-6").click(function(){
		$("#img-6").modal('show');
	});
});



  	  // for drop down jsonData
		   var jsonData = {
      "Table": [{
          "stateid": "2",
          "statename": "product-1"
      }, {
          "stateid": "3",
          "statename": "product-2"
      }, {
          "stateid": "4",
          "statename": "product-3"
      }, {
          "stateid": "5",
          "statename": "product-4"
      }, {
          "stateid": "6",
          "statename": "product-5"
      },
	  {
          "stateid": "7",
          "statename": "product-6"
      },
	   {
          "stateid": "8",
          "statename": "product-7"
      },
	   {
          "stateid": "9",
          "statename": "product-8"
      },
	  {
          "stateid": "10",
          "statename": "product-9"
      },
	   {
          "stateid": "11",
          "statename": "product-10"
      },
	   {
          "stateid": "12",
          "statename": "product-11"
      },
	  {
          "stateid": "13",
          "statename": "product-12"
      },
	   {
          "stateid": "14",
          "statename": "product-13"
      },
	   {
          "stateid": "15",
          "statename": "product-14"
      },
	  {
          "stateid": "16",
          "statename": "product-15"
      },
	  {
          "stateid": "17",
          "statename": "product-16"
      },
	  {
          "stateid": "18",
          "statename": "product-17"
      },
	   {
          "stateid": "19",
          "statename": "product-18"
      },
	  
	  {
          "stateid": "21",
          "statename": "product-19"
      },
	   {
          "stateid": "22",
          "statename": "product-20"
      },
	  {
          "stateid": "23",
          "statename": "product-21"
      },
	  {
          "stateid": "24",
          "statename": "product-22"
      },
	   {
          "stateid": "25",
          "statename": "product-23"
      },
	  {
          "stateid": "26",
          "statename": "product-24"
      },
	  {
          "stateid": "27",
          "statename": "product-25"
      },
	   {
          "stateid": "28",
          "statename": "product-26"
      },
	  {
          "stateid": "29",
          "statename": "product-27"
      },
	  {
          "stateid": "30",
          "statename": "product-28"
      },
	   {
          "stateid": "30",
          "statename": "product-29"
      }
	  
	  ]
  };
  
   $ (document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Select -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].stateid + "'>" + jsonData.Table[i].statename + "</option>";
         }
 
         $("#select").html(listItems);
     });
	 
	 $(document).ready(function(){
	   $("#select").on('change',function(){
	       var x=$("#select").val();
		    if(x=='2'){
			   window.location = "/homes/sdr.html"; // open url
			
			}
			 else if(x=='3'){
		       window.location = "/homes/feature_icons.html"; // open url	
		  
		  }
		    else if(x=='4'){
		      window.location = "/homes/ampli.html"; // open url	 
		  
		  }
		   else if(x=='5'){
		    window.location = "/homes/combiner.html"; // open url	
		  }
		    else if(x=='6'){
		     window.location = "/homes/low.html"; // open url
		  }
		   else if(x=='7'){
			    window.location = "/homes/down.html"; // open url
		     
		  }
		   else if(x=='8'){
		      window.location = "/homes/modulator.html"; // open url
		  }
		  else if(x=='9'){
		     window.location = "/homes/unit.html"; // open url
		  }
		  else if(x=='10'){
		      window.location = "/homes/recorder.html"; // open url
		  }
		  else if(x=='11'){
		       window.location = "/homes/loader.html"; // open url
		  }
		  else if(x=='12'){
		      window.location = "/homes/mil.html"; // open url
		  }
		  else if(x=='13'){
		      window.location = "/homes/board.html"; // open url 
		  }
		  else if(x=='14'){
		       window.location = "/homes/airbone.html"; // open url 
		  }
		   else if(x=='15'){
		       window.location = "/homes/pcm.html"; // open url 
		  }
		   else if(x=='16'){
		         window.location = "/homes/antenna.html"; // open url 
		  }
		   else if(x=='17'){
		         window.location = "/homes/receiver.html"; // open url 
		  }
		   else if(x=='18'){
		         window.location = "/homes/bit.html"; // open url 
		  }
		  else if(x=='19'){
		         window.location = "/homes/document.html"; // open url 
		  }
		  else if(x=='20'){
			     window.location = "/homes/software.html"; // open url 
			  
			  
		  }
		  else if(x=='21'){
			     window.location = "/homes/video.html"; // open url  
		  }
		   else if(x=='22'){
			     window.location = "/homes/system.html"; // open url   
		  }
      else if(x=='23'){
			   window.location = "/homes/generator.html"; // open url     
		  }	
     else if(x=='24'){  
	       window.location = "/homes/reader.html"; // open url  	  
		  }
    else if(x=='25'){
			window.location = "/homes/display.html"; // open url   
		  }	
    else if(x=='26'){
		    window.location = "/homes/inserter.html"; // open url 	    
		  }	
    else if(x=='27'){
			 window.location = "/homes/power_control.html"; // open url     
		  }	
    else if(x=='28'){
		 window.location = "/homes/engine_control.html"; // open url    
		  }
  else if(x=='29'){
			   window.location = "/homes/generator_control.html"; // open url     
		  }	
     else if(x=='30'){
			   window.location = "/homes/antenna_control.html"; // open url   
			    
		  }			  
		     
	   
	   });
	 });

     











