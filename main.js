$(document).ready(function(){

	let music = new Audio('music.mp3')


	$('.game').click(function(){
		$('.start').slideUp()
		music.play()

	})

	let muted = false

	$('#img').click(function(){
		if(muted == false){
			$(this).attr('src', 'images/13.png')

			music.pause()

			muted = true

		}
		else{
			$(this).attr('src', 'images/12.png')

			music.play()

			muted = false	
		}
		

	})


	let images = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7]

	let count = 0

	images.sort(function(){
		return Math.random() - 0.5 
	})


	for(let i = 0; i < images.length; i++){
		$('.ocean').append(`
			<div class="ocean_baby" id="num${i}">
				<img src="images/${images[i]}.png" class="fish">
				<img src="images/bubbles.png" class="bubbles">
			</div>
			`)
	}


	let card1 = undefined

	let card2 = undefined


	$('.ocean_baby').click(function(){


		if(card1 == undefined){

			card1 = $(this)

			$(this).addClass('flip')

		}
		else if(card2 == undefined && card1.attr('id') != $(this).attr('id')){


			card2 = $(this)

			$(this).addClass('flip')




			let img1 = card1.children('.fish').attr('src')
			let img2 = card2.children('.fish').attr('src')


			setTimeout(function(){

				if(img1 == img2){

					count++

					card1 = undefined

					card2 = undefined

					console.log(count)

					if(count == images.length/2){

						$('.win').slideDown()

					}
				}
				else{
					card1.removeClass('flip')
					card2.removeClass('flip')
					card1 = undefined
					card2 = undefined

				}


			}, 1000)
			


		}
	

	})


})


