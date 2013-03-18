(function( $ ){

//list of helper functions
	var methods = {

		options: {
			keys : [
			17, //control
			16, //shift
			18 //
			]


		},

		init : function() {

				//setUp event Listner for prompt


				
				


		},


		setKeyUp : function (){

			$(document.body).keydown(function (event){

				var li  = pressedKeys[event.keyCode];
				var check = 0;
				$.each(li, function(value){

					$.each(methods.options.keys, funciton (val){

						if(value == val){
							check++;
						}

					});

				});

				if(check == 3)
					methods.promtpCommand();

			});

		},

		promptCommand : function () {
			function alert("cool");
		}




	}


  $.jPrompt = function() {
  		methods.init();


    };

 
})( jQuery );