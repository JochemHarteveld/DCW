<div class="container">
	<h1>Koplopers</h1>
	<div class="scoreboard">
		<div class="placement">
			<h3 class="name">1. Corduroy</h3>
			<img src="logos/corduroy.svg" alt="" />
			<h3>120</h3>
		</div>
		<div class="placement">
			<h3 class="name">2. Witte wieven</h3>
			<img src="logos/wieven.svg" alt="" />
			<h3>120</h3>
		</div>
		<div class="placement">
			<h3 class="name">3. Kobra</h3>
			<img src="logos/kobra.svg" alt="" />
			<h3>120</h3>
		</div>
	</div>
</div>

<div class="schedule">
	<!-- each day as -->
	<div class="container">
		<div class="day">
			<h1>Maandag</h1>
			<h2>Opdrachten</h2>
            <div class="assignment">
                <h3>10:00</h3>
                <h4>Knutselopdracht</h4>
                <img src="icons/arrow.svg" alt="">
            </div>
            <div class="assignment">
                <h3>19:00</h3>
                <h4>Moddergevecht</h4>
                <img src="icons/arrow.svg" alt="">
            </div>
            <div class="divider"></div>
            <div class="title-bar">
                <h2>Dagqueeste</h2>
                <img src="icons/arrow.svg" alt="">
            </div>
            <div class="quest">
                <h3>1.</h3>
                <p>Vertel je beste strijdverhaal</p>
            </div>
            <div class="quest">
                <h3>2.</h3>
                <p>Bouw een vikingschip</p>
            </div>
            <div class="quest">
                <h3>3.</h3>
                <p>Maak een sea shanty</p>
            </div>
            <div class="quest">
                <h3>4.</h3>
                <p>Drink uit een hoorn</p>
            </div>
            <div class="quest">
                <h3>5.</h3>
                <p>Zet een tattoo</p>
            </div>
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		margin: 0;
	}

	.container {
		margin: 25px auto;
		width: 70%;
		margin-top: 25px;
		background-color: rgba(0, 0, 0, 0.8);
		border-radius: 40px;
        padding: 20px;

	}


	.name {
		width: 160px;
	}

	.placement {
		display: flex;
		justify-content: space-around;
	}

    h3, h4{
        margin: 6px 0;
        padding: 0;
    }

	.scoreboard {
		padding-bottom: 20px;
	}

    .assignment{
        display: flex;
        justify-content: space-around;
    }

    img{
        height: 25px;
        width: 25px;
        margin: auto 0;
    }

    .divider{
        width: 300px;
        height: 1px;
        margin: auto;
        margin: 12px;
        background-color: #ffffff33;
    }

    .title-bar{
        display: flex;
        justify-content: space-between;
    }

    .title-bar img{
        margin-right: 20px;
    }

    .quest{
        display: flex;
    }

    p{
        margin: 8px;
    }
</style>
