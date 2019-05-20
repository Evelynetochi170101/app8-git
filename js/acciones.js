 // JavaScript Document

 $(document).ready(function (e) {
  document.addEventListener("deviceready" , onDeviceReady,false);
  
 });
 
         function onDeviceReady(){
		  $('#posicion')on ('click',function (){
			  getPosition ();
		  });
		 }
		 
		 
		    function getPosition() {
				var options={
				enableHighAccuracy : true,
				maximumAge:3600000
				}
				
			var watchID=navigator.geolocation.getCurrentPosition(on Success,onError,options);
			function onSuccess(position) {
				alert('latitude;'      + position.coords.latitude  +'\n'+
				    'longitude:'        + position.coords.longitude +'\n');
					
			};
			 
			function on Error(error) {
				alert('code:' + error.code  + '\n'+ 'message:' + error.message + '\n');
			
			}
		}
			