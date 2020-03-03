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
								outlined
								clearable
								clear-icon="mdi-close"
							/>
							<v-text-field
								:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:rules="[rules.required, rules.min]"
								:type="show ? 'text' : 'password'"
								name="input-10-2"
								label="Password"
								hint="At least 8 characters"
								class="input-group--focused"
								value=""
								@click:append="show = !show"
								prepend-icon="mdi-lock"
								outlined
								clearable
								clear-icon="mdi-close"
							></v-text-field>
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
export default {
	data() {
		return {
			show: false,
			password: "Password",
			rules: {
				required: (value) => !!value || "Required.",
				min: (v) => v.length >= 8 || "Min 8 characters",
				emailMatch: () => "The email and password you entered don't match"
			}
		};
	}
};
</script>

<style></style>
