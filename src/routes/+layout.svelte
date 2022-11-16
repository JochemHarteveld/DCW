<script>
	import BottomNav from '../components/BottomNav.svelte';

	export const prerender = true;
	export const ssr = false;

</script>

<div class="background" />
<img src="images/norway.jpeg" alt="">
<slot />
<div class="nav-wrapper">
	<BottomNav />
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(body, html) {
		margin: 0;
        height: 0;
    }

    :global(a, h1){
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }

    img{
        display: block;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        filter: contrast(130%) brightness(0.8) saturate(1.2);
        position: absolute;
        z-index: -1;
    }

	.nav-wrapper {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

  

</style>
