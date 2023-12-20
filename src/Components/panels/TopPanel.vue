<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container">
			<a class="navbar-brand" @click="$router.push('/')">PORTFOLIO</a>
			<button class="navbar-toggler custom-toggler ml-auto" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon custom-icon"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/')">Главная</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/Myinfo')">Информация</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/portfolio')">Проекты</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'TopPanel',
};
</script>

<style scoped>
.navbar{
	min-width: 200px;
}
.navbar-brand {
	color: var(--main-color);
	text-shadow: 0 0 10px var(--main-color-shadow);
	transition: 1s;
	cursor: pointer;
}
.navbar-brand:hover{
	color: var(--main-color);
}

.navbar-nav .nav-link {
	color: var(--main-color);
	text-shadow: 0 0 10px var(--main-color-shadow);
	transition: 1s;
	cursor: pointer;
}

.navbar-nav .nav-link:hover {
	text-shadow: 0 0 10px red;
	color: red;
}

.navbar-toggler {
	background-color: var(--main-color);
}
</style>