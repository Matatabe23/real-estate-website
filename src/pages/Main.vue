<template>
<div class="Main">
	<div class="Main-height">
		<div class="Main-BG">
			<h1>Недвижемость по низким ценам!</h1>
		</div>
	</div>
	<div class="Main-center">
		<h1>Hello world!</h1>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.Main-height{
	background-image: url(@/assets/image/Main/MainBg.jpg);
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.Main-BG{
	height: 100vh;
	background-color: rgb(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	text-align: center;
}
.Main-center{
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
