<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand" @click="$router.push('/')">Realty</a>
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
						<a class="nav-link" @click="$router.push('/catalog')">Каталог</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/services')">Услуги</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/Contacts')">Контакты</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" @click="$router.push('/AboutCompany')">О компании</a>
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
.navbar {
	min-width: 200px;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
}

.navbar-brand {
	color: var(--TopPanel-color);
	text-shadow: 0 0 10px var(--TopPanel-color-shadow);
	transition: 1s;
	cursor: pointer;
}

.navbar-brand:hover {
	color: var(--TopPanel-color);
}

.navbar-nav .nav-link {
	color: var(--TopPanel-color);
	text-shadow: 0 0 10px var(--TopPanel-color-shadow);
	transition: 0.5s;
	cursor: pointer;
}

.navbar-nav .nav-link:hover {
	text-shadow: 0 0 10px red;
	color: red;
	transform: translateY(-4px);
}

.navbar-toggler {
	background-color: var(--TopPanel-color);
}
</style>