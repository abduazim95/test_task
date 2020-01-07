<template>
	<div class="container">
		<table class="table">
			<thead class="thead-light">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Avatar</th>
					<th scope="col">Title</th>
					<th scope="col">Text</th>
					<th scope="col">Created at</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="message in messages" :key="message.id">
					<th scope="row">{{message.id}}</th>
					<td>
                        <img :src="message.avatar" :alt="message.text" class="img-rounded">
                    </td>
					<td>{{message.text}}</td>
					<td>{{message.title}}</td>
					<td>{{message.createdAt}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import axios from "axios";

const url =
	"https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles";

export default {
	data() {
		return {
			messages: []
		};
	},
	methods: {
		async getMessages() {
			let resp;
			try {
				resp = await axios.get(url);
			} catch (e) {
				e.response
					? alert(e.response.data.message)
					: alert("Не удается соединиться с сервером!");
				this.messages = [];
				return;
			}
			this.messages = resp.data;
		}
	},
	created() {
		this.getMessages();
	}
};
</script>