<?php
 require 'header.php';
?>
	<main>
		<section id="hero"></section>
		<div class="triangle"></div>
		<section id="quests">
			<div class="container">
				<aside class="profil">
					<div class="photo__name">
						<figure>
							<img src="https://tainix.fr/img/user_default_profile_pic.svg?1722934231" alt="">
						</figure>
						<div class="name">
							<h2 class="h3">
								NicolasF
							</h2>
							<p>151 xp</p>
						</div>
					</div>
					<nav>
						<a href="#"><span class="icon-success small"></span> Succès</a>
						<a href="#"><span class="icon-code small black"></span> Challenges</a>
						<a href="#"><span class="icon-group"></span> Communauté</a>
						<a href="#"><span class="icon-user black"></span> Mes informations</a>
					</nav>
				</aside>
				<div class="form">
					<h1 class="h2">Editer mes informations</h1>
					<form action="">
						<div class="group">
							<label for="peudo">Pseudo</label>
							<input type="text" name="user_nicename">
						</div>
						<div class="group">
							<label for="email">Adresse e-mail</label>
							<input type="email" name="user_email">
						</div>
						<div class="group">
							<label for="prénom">Prénom</label>
							<input type="text" name="user_firstname">
						</div>
						<div class="group">
							<label for="nom">Nom</label>
							<input type="text" name="user_lastname">
						</div>
						<div class="group">
							<label for="peudo">Je vis dans la belle ville de</label>
							<input type="text" name="_town">
						</div>
						<div class="group"></div>
						<div class="group">
							<label for="peudo">Je préfère le</label>
							<select name="_code">
								<option value="PHP">PHP</option>
								<option value="JS">Javascript</option>
								<option value="Python">Python</option>
							</select>
						</div>
						<div class="group">
							<label for="peudo">Je pratique le code depuis</label>
							<select name="_xp">
								<option value="debutant">Moins d'un an</option>
								<option value="intermediaire">1 ou 2 ans</option>
								<option value="expert">3 à 5 ans</option>
								<option value="master">+ 5 ans</option>
							</select>
						</div>
						<div class="group">
							<label for="peudo">Je suis</label>
							<select name="_status">
								<option value="student">Etudiant.e</option>
								<option value="teacher">Formateur.trice</option>
								<option value="dev">Développeur.euse</option>
							</select>
						</div>
					</form>
				</div>
			</div>
	
		</section>
	</main>
	<?php require 'footer.php';