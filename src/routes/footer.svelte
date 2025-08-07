<script>
</script>

<div class="footerContainer">
    <div class="contacts">
        <a href="https://github.com/ThePikachuDev" class="contactLink">
            <img
                src="../../github-logo-duotone.svg"
                alt="github-logo"
                class="logo"
            />
        </a>
        <a
            href="https://discordapp.com/users/1237395043669639233"
            class="contactLink"
        >
            <img
                src="../../discord-white-logo.png"
                alt="discord-logo"
                class="logo"
            />
        </a>
        <a href="https://x.com/ThePikachuDev" class="contactLink">
            <img src="../../x-logo-duotone.svg" alt="X-logo" class="logo" />
        </a>
    </div>
    <div class="madeWith">
        Made With <a href="https://svelte.dev/">Svelte</a>
    </div>
</div>

<style>
    .footerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* bottom: 0;
        left: 0; */
        width: 100vw;
        padding: 1vw 2vw;
    }
    .contacts {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }
    .contactLink {
        width: 2rem;
    }
    .contactLink img {
        width: 1.5rem;
        /* color: white;
        background-color: rgb(226, 218, 218);
        padding: 2px;
        border-radius: 5px; */
    }

    .madeWith a {
        text-decoration: none;
        color: rgb(181, 181, 181);
    }
</style>

