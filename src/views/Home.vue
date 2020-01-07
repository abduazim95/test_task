<template>
	<div class="container">
		<div class="jumbotron">
			<h1 class="display-4">Приветствуем Вас, дорогой гость!</h1>
			<p class="lead">
                Наслажлайтесь, читайте! Наш ДОМ ждет ВАС!
            </p>
			<hr class="my-4" />
			<p>Администрация делает всё, чтобы Вам было у нас комфортно и уютно.</p>
			<router-link to="/messages" class="btn btn-primary btn-lg" href="#" role="button">Начать</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	}
};
</script>