<script>
	import Footer from '$lib/components/custom/Footer.svelte'
	import Header from '$lib/components/custom/Header.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
	import PageTransition from '$lib/components/custom/Transition.svelte'

	export let data
</script>

<div class='layout'>
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
    .layout {
        height: 100%;
        max-inline-size: 1440px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    main {
        padding-block: var(--size-9);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>
