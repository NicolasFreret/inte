<?php
 require 'header.php';
?>
	<main>
		<section id="hero">
			<div class="container">
				<h1 class="h1">
					Challenges
				</h1>
				<p class="strong">Les challenges de code te permettent de mettre à l'épreuve tes compétences en programmation.</p>
			</div>
		</section>
		<div class="triangle"></div>

		<section id="challenges">
			<div class="container title">
				<div class="filters">
					<a href="#" data-filter="card" class="active btn">
						Tous
					</a>
					<a href="#" data-filter="starter" class="btn starter">
						Starter
					</a>
					<a href="#" data-filter="debutant" class="btn debutant">
						Débutant
					</a>
					<a href="#" data-filter="intermediaire" class="btn intermediaire">
						Intermédiaire
					</a>
					<a href="#" data-filter="avance" class="btn avance">
						Avancé
					</a>
				</div>			
				<div class="grid col-3">
					
					<article class="card">
						<div class="level avance">
							<span>Avancé</span>
						</div>
						<figure>
							<img src="https://wp.tainix.fr/wp-content/uploads/2024/06/REQUIN_TRIATHLON_TAINIX-scaled.jpg" alt="">
						</figure>
						<div class="content">
							<h1 class="h3 line-clamp clamp-2">
								Un requin pendant le triathlon
							</h1>
							<p class="line-clamp clamp-3">
								Des athlètes dans un fleuve pour épreuve sportive, et un requin qui a très faim ...
							</p>
							<a href="#" class="btn blue">
								<span class="icon-code small"></span> Je code
							</a>
						</div>
					</article>
					<article class="card">
						<div class="level avance">
							<span>Avancé</span>
						</div>
						<figure>
							<img src="https://wp.tainix.fr/wp-content/uploads/2024/06/REQUIN_TRIATHLON_TAINIX-scaled.jpg" alt="">
						</figure>
						<div class="content">
							<h1 class="h3 line-clamp clamp-2">
								Un requin pendant le triathlon
							</h1>
							<p class="line-clamp clamp-3">
								Des athlètes dans un fleuve pour épreuve sportive, et un requin qui a très faim ...
							</p>
							<a href="#" class="btn blue">
								<span class="icon-code small"></span> Je code
							</a>
						</div>
					</article>
				</div>
			</div>
		</section>
	</main>
	<?php require 'footer.php';
