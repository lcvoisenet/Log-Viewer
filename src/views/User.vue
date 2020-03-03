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
				<v-toolbar-title class="mx-auto my-auto">User</v-toolbar-title>

				<v-btn large color="black" class="mx-auto">
					Add User<v-icon dark class="pl-2">mdi-account-plus</v-icon></v-btn
				>

				<v-btn large color="grey" class="mx-auto">
					Unlock User<v-icon dark class="pl-2">mdi-lock-open</v-icon></v-btn
				>
			</v-col>
			<v-col cols="6"></v-col>
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
export default {};
</script>

<style></style>
