<script>
	import { fly } from 'svelte/transition'
	// import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label='Toggle theme'>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<!--			<Sun />-->
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
				 viewBox='0 0 24 24' fill='none' stroke='currentColor'
				 stroke-width='2' stroke-linecap='round' stroke-linejoin='round'
				 class='lucide lucide-sun'>
				<circle cx='12' cy='12' r='4' />
				<path d='M12 2v2' />
				<path d='M12 20v2' />
				<path d='m4.93 4.93 1.41 1.41' />
				<path d='m17.66 17.66 1.41 1.41' />
				<path d='M2 12h2' />
				<path d='M20 12h2' />
				<path d='m6.34 17.66-1.41 1.41' />
				<path d='m19.07 4.93-1.41 1.41' />
			</svg>
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<!--			<Moon />-->
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'
				 viewBox='0 0 24 24' fill='none' stroke='currentColor'
				 stroke-width='2' stroke-linecap='round' stroke-linejoin='round'
				 class='lucide lucide-moon'>
				<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
			</svg>
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
    button {
        padding: 0;
        font-weight: inherit;
        background: none;
        border: none;
        box-shadow: none;
        overflow: hidden;
    }

    button > * {
        display: flex;
        gap: var(--size-2);
    }
</style>
