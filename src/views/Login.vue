<template>
	<v-container class="fill-height" fluid>
		<v-row align="center" justify="center">
			<v-col cols="12" sm="8" md="4">
				<v-card class="elevation-12" shaped>
					<v-toolbar color="primary" dark flat>
						<v-toolbar-title>Gestion des comptes AS400</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form>
							<v-text-field
								label="Login"
								name="login"
								type="text"
								prepend-icon="mdi-account"
							/>
							<v-text-field
								id="password"
								label="Password"
								name="password"
								type="password"
								prepend-icon="mdi-lock"
							/>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn color="primary" block>Connexion</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {};
</script>

<style></style>
