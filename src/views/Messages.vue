<template>
	<div id="messages" class="container">
		<div class="card mb-2 p-2">
			<div class="row m-0 justify-content-between align-items-center">
				<div>
					<date-picker @change="getMessages" v-model="dates" type="datetime" range></date-picker>
				</div>
				<div>
					<button @click="removeAll" type="button" class="btn btn-danger">Удалить все</button>
				</div>
			</div>
		</div>
		<table class="table">
			<thead class="thead-light">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Avatar</th>
					<th scope="col">Title</th>
					<th scope="col">Text</th>
					<th scope="col">Created at</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody v-if="messages.length > 0">
				<tr v-for="message in messages" :key="message.id">
					<th scope="row">{{message.id}}</th>
					<td>
						<img :src="message.avatar" :alt="message.text" class="img-rounded" />
					</td>
					<td>{{message.text}}</td>
					<td>{{message.title}}</td>
					<td>{{message.createdAt | prettyDate}}</td>
					<td>
						<button @click="removeItem(message)" type="button" class="btn btn-danger">Удалить</button>
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td class="text-center" colspan="100%">
						Нет данных!
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import axios from "axios";
import { isAfter, isBefore, format } from 'date-fns';

const url =
	"https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles";

export default {
	data() {
		return {
			messages: [],
			dates: [null, null]
		};
	},
	components: {
		DatePicker
	},
	filters: {
		prettyDate(date) {
			return format(Date.parse(date), 'd MMM yyyy kk:mm');
		}
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

			this.messages = resp.data.filter(message => {
				if(!this.dates[0] || !this.dates[1]) return true;
				if(
					isAfter(Date.parse(message.createdAt), this.dates[0]) && 
					isBefore(Date.parse(message.createdAt), this.dates[1])
				) return true;
				return false;
			});
		},
		removeItem(message) {
			this.messages = this.messages.filter(item => item != message);
		},
		removeAll() {
			this.messages = [];
		}
	},
	created() {
		this.getMessages();
	}
};
</script>