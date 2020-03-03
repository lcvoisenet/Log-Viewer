<template>
	<v-container class="pa-0 ma-0" fluid fill-height style="align-items:start;">
		<v-app-bar app color="primary" dark>
			<v-col cols="6" class="d-flex">
				<div>
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2"
						contain
						src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
						transition="scale-transition"
						width="40"
					/>
				</div>
				<v-toolbar-title class="mx-auto my-auto">PROJECT</v-toolbar-title>

				<v-btn large color="green" class="mx-auto"
					>Refresh<v-icon dark class="pl-2">mdi-refresh</v-icon></v-btn
				>
				<v-btn large color="red" class="mx-auto"
					>Delete<v-icon dark class="pl-2">mdi-delete</v-icon></v-btn
				>
			</v-col>
			<v-col cols="6"> </v-col>
		</v-app-bar>
		<v-row>
			<v-col cols="6">
				<v-data-table
					:headers="headers"
					:items="desserts"
					:items-per-page="10"
					class="elevation-1"
				></v-data-table>
			</v-col>
			<v-col cols="6">
				<v-tabs centered grow v-model="tab">
					<v-tab>Item One</v-tab>
					<v-tab>Item Two</v-tab>
					<v-tab>Item Three</v-tab>
				</v-tabs>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			tab: 1,
			headers: [
				{
					text: "Dessert (100g serving)",
					align: "start",
					sortable: false,
					value: "name"
				},
				{ text: "Calories", value: "calories" },
				{ text: "Fat (g)", value: "fat" },
				{ text: "Carbs (g)", value: "carbs" },
				{ text: "Protein (g)", value: "protein" },
				{ text: "Iron (%)", value: "iron" }
			],
			desserts: [
				{
					name: "Frozen Yogurt",
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: "1%"
				},
				{
					name: "Ice cream sandwich",
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: "1%"
				},
				{
					name: "Eclair",
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: "7%"
				},
				{
					name: "Cupcake",
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: "8%"
				},
				{
					name: "Gingerbread",
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: "16%"
				},
				{
					name: "Jelly bean",
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: "0%"
				},
				{
					name: "Lollipop",
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: "2%"
				},
				{
					name: "Honeycomb",
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: "45%"
				},
				{
					name: "Donut",
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: "22%"
				},
				{
					name: "KitKat",
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: "6%"
				},
				{
					name: "Frozen Yogurt",
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: "1%"
				},
				{
					name: "Ice cream sandwich",
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: "1%"
				},
				{
					name: "Eclair",
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: "7%"
				},
				{
					name: "Cupcake",
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: "8%"
				},
				{
					name: "Gingerbread",
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: "16%"
				},
				{
					name: "Jelly bean",
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: "0%"
				},
				{
					name: "Lollipop",
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: "2%"
				},
				{
					name: "Honeycomb",
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: "45%"
				},
				{
					name: "Donut",
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: "22%"
				},
				{
					name: "KitKat",
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: "6%"
				}
			]
		};
	},
	computed: {
		tableHeight: () => {
			return window.innerHeight - 123;
		}
	}
};
</script>

<style></style>
