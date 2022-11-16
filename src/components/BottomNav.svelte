<script>
    const url = "/DCW";

</script>


<div class="container">
    <a href="{url}">
        <img src="icons/Hut.svg" alt="">
        <span>Home</span>
    </a>
    <a href="{url}/jokers">
        <img src="icons/Viking Helmet.svg" alt="">
        <span>Jokers</span>
    </a>
    <a href="{url}/bucketlist">
        <img src="icons/Viking Ship.svg" alt="">
        <span>Bucketlist</span>
    </a>
    <a href="{url}/scorebord">
        <img class="leaderboard" src="icons/Leaderboard.svg" alt="">
        <span>Scorebord</span>
    </a>
</div>

<style>
    .container{
        height: 80px;
        background-color: #02C39A;
        width: 100%;
        display: flex;
        justify-content: space-around;
        
    }

    a{
        flex: 1;
        position: relative;
    }

    img{
        height: 45px;
        width: 45px;
        display: block;
        margin: 10px auto 0px auto;
    }

    span{
        text-align: center;
        display: block;
        position: absolute;
        left: 50%;
        bottom: 10px;
        translate: -50%;
        font-size: .9em;
    }

  
</style>
