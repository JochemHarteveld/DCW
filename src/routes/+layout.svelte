<script>
	import BottomNav from '../components/BottomNav.svelte';
	import TopBar from '../components/TopBar.svelte';

	export const prerender = true;
	export const ssr = false;

</script>

<img src="images/norway.jpeg" alt="">
<TopBar></TopBar>
<div class="container">
    <slot />
</div>
<div class="nav-wrapper">
	<BottomNav />
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


    :root(){
        --primary-color: #02C39A;
        --secondary-color: #D7ECFD;
    }


	:global(body, html) {
		margin: 0;
        height: 0;
    }

    :global(a, h1, h2, h3, h4, p){
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: white;
    }

    
    
    :global(h1){
        color: #02C39A;
    }

    :global(a){
        color: black;
    }

    img{
        display: block;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        filter: contrast(130%) brightness(0.8) saturate(1.2);
        position: fixed;
        top: 0;
        z-index: -1;
    }

    .container{
        margin-bottom: 100px;
    }
    

	.nav-wrapper {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

  

</style>
