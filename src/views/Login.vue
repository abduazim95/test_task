<template>
	<div class="container">
		<div class="row justify-content-center fill-height">
			<div class="card p-4 col-lg-6 col-md-6 col-10">
				<form @submit.prevent="login($event)">
					<div class="form-group">
						<label for="exampleInputEmail1">Роль</label>
						<select class="custom-select" name="role">
							<option v-for="role in roles" :key="role" :value="role">{{role}}</option>
						</select>
					</div>
					<button type="submit" class="btn btn-primary">Войти</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>

import { mapActions } from 'vuex';

const roles = [
    'Central',
    'District',
    'Human',
    'Chief',
    'Legacy',
    'Lead',
    'International',
    'Regional',
    'Principal',
    'Corporate',
    'Dynamic',
    'Investor',
    'Future',
    'Forward',
    'Customer',
    'Senior',
    'Global',
    'Direct',
    'Product',
];

export default {
	data() {
		return {
            roles
        };
    },
    methods: {
        ...mapActions({
            login: 'login',
            logout: 'logout'
        })
    },
    created() {
        this.logout();
    }
};
</script>