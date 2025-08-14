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
        Made With <a class="underline" href="https://svelte.dev/">Svelte</a> and
        Love ♥️
    </div>
</div>

<style>
    .footerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vw 0;
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
    }

    .madeWith a {
        color: rgb(181, 181, 181);
    }

    @media (max-width: 600px) {
        .footerContainer {
            font-size: 0.8rem;
            padding: 1vw 0;
        }
        .contactLink {
            width: 1.3rem;
        }
        .contactLink img {
            width: 1.5rem;
        }

        .madeWith {
            text-align: right;
        }
    }
</style>
