<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|DM+Serif+Display&display=swap">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<main>
		<section id="login">
			<div class="container">
				<div class="content">
					<div class="logo">
						<p class="h3">T;</p>
					</div>
					<h1 class="h2">Connecte-toi à ton compte</h1>
					<p>Retrouve ta clé secrète et suis ta progression. Si tu n'as pas encore de compte, tu peux <a href="#">t'inscrire ici</a>.</p>
				</div>
				<form method="post" action="">
					<div class="group">
						<label for="email">Email</label>
						<input type="email" name="email">
					</div>	
					<div class="group">
						<label for="password">Mot de passe</label>
						<input type="password" name="password">
					</div>	
					<p><input type="checkbox" name="remember"> Se souvenir de moi</p>
					<a href="#" class="btn bg-blue">Se connecter</a>
				</form>
				<a href="#" class="btn bg-grey"><span class="icon-github "></span> Se connecter avec github</a>
				<div class="center">
					<a class="lostPass" href="#">Mot de passe oublié ?</a>
				</div>
			</div>
		</section>
	</main>
</body>
</html>