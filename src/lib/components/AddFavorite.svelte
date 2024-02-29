<script lang="ts">
	import type { PageData, ActionData } from "./$types";
	import { page } from "$app/stores";

	let data: PageData;
	let form: ActionData = $page.form;

	let disabled: boolean = false;
</script>

<form method="POST" action="/favorites?/add">
	<label>
		Type
		<input name="type" type="text" value="youtube" readonly />
	</label>
	<label>
		Path
		<input name="path" type="text" minlength={0} />
	</label>
	<label>
		Blurb
		<textarea name="blurb" placeholder="Say something about this"></textarea>
	</label>

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
		border: 1px solid #000;
		margin-bottom: 1rem;
	}

	label {
		font-size: 1rem;
		display: block;
	}

	.form-actions {
		padding-top: 1rem;
		display: flex;
		justify-content: end;
		align-items: center;
		gap: 1rem;
	}
</style>
