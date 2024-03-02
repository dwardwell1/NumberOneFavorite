<script lang="ts">
	import type { PageData, ActionData } from "./$types";
	import { page } from "$app/stores";

	let data: PageData;
	let form: ActionData = $page.form;

	let disabled: boolean = false;
</script>

<form method="POST" action="/favorites?/add">
	<fieldset class="form-group">
		<label for="type">
			Type
		</label>
		<input id="type" name="type" type="text" value="youtube" readonly />
	</fieldset>
	<fieldset class="form-group">
		<label for="path">
			Path
		</label>
		<input id="path" name="path" type="text" minlength={0} />
	</fieldset>
	<fieldset class="form-group">
		<label for="blurb">
			Blurb
		</label>
		<textarea id="blurb" name="blurb" placeholder="Say something about this"></textarea>
	</fieldset>

	<div class="form-actions">
		<button type="submit" {disabled}>Add Favorite</button>
	</div>
</form>

{#if form?.success}
	<p>Added a favorite!</p>
{/if}

<style>
	form {
		padding: 1rem 1rem;
		border: 1px solid var(--link);
		margin-bottom: 1rem;
	}

	.form-group {
		display: block;
		margin-bottom: 0.5em;
	}

	label {
		font-size: 1rem;
		margin-bottom:0.25em;
		display: block;
	}

	.form-group :where(input, textarea) {
		display: block;
		width: 100%;
	}

	.form-actions {
		padding-top: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
