<template>
	<nav class="navbar sticky-top navbar-dark bg-dark mb-2">
		<nav class="navbar navbar-expand-lg navbar-dark">
			<router-link to="/" class="navbar-brand" href="#">FORUM</router-link>
		</nav>
		<div class="justify-content-end" id="navbarNav">
			<router-link
				v-if="$route.path != '/login'"
				to="/login"
				class="btn btn-dark"
			>{{!user.authenticated ? 'Войти' : 'Выйти'}}</router-link>
		</div>
	</nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
	computed: {
		...mapGetters({
			user: "user"
		})
	}
};
</script>