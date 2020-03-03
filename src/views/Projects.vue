<template>
	<v-container class="pa-0 ma-0" fluid fill-height style="align-items:start;">
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
					transition="scale-transition"
					width="40"
				/>
			</div>
			<v-toolbar-title>PROJECTS</v-toolbar-title>

			<v-spacer></v-spacer>
		</v-app-bar>
		<v-card class="mx-auto my-auto" max-width="300">
			<v-img
				class="white--text align-end"
				height="200px"
				src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
			>
				<v-card-title>Projet AS400</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

			<v-card-text class="text--primary">
				<div>IDK</div>
			</v-card-text>

			<v-card-actions>
				<v-btn color="blue" text width="50%">
					Logs
				</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="blue" text width="50%">
					Client
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
export default {};
</script>

<style></style>
