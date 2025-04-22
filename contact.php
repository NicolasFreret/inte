<?php
 require 'header.php';
?>
	<main>
		<section id="hero">
			<div class="container">
				<h1 class="h1">
					Contact
				</h1>
				<p class="strong">Envoie un message à notre super équipe !</p>
			</div>
		</section>
		<div class="triangle"></div>
		<section id="form">
			<div class="container">
				<form action="POST">

					<div class="group">
						<label for="objet">Quel est l'objet de ce message ? *</label>
						<input type="text" name="objet" list="objet">
						<datalist id="objet">
						  <option value="Edge">
						  <option value="Firefox">
						  <option value="Chrome">
						  <option value="Opera">
						  <option value="Safari">
						</datalist>
					</div>	

					<div class="group">
						<label for="message">Qu'est-ce qu'on peut faire pour t'aider ? *</label>
						<textarea required name="message" id=""></textarea>
					</div>	

					<div class="group">
						<label for="email">Email *</label>
						<input type="email" required name="email">
					</div>	

					<div class="group">
						<label for="nom_premnom">Nom et Prénom *</label>
						<input type="text" required name="nom">
					</div>	
					<a href="" class="btn black">
						Envoyer mon super message <span class="icon-arrow-right"></span>
					</a>			
				</form>

			</div>
		</section>
	</main>
	<?php require 'footer.php';