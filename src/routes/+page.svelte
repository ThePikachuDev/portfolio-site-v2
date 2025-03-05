<script lang="ts">
</script>


<main class="homeContainer">
  <span class="yetAnotherContainer">

    <div class="headlineContainer">
      <img src="/captain pikachu.png" alt="pikachu Face" class="pfpImg">
      
      
      <h2>ThePikachu</h2>
      <h4>17M (He/Him)</h4>
    </div>
    <br>
    
    <p>Hey Visitor 👏 , I am a High School student doing Coding as a hobby. I like using and living inside CLI and TUI's apps . Sometimes i would be trying out a new tech or watching anime in my cool Terminal. when i am not doing the above stuff, i would be cycling with my cycling bros, brainstroming some new ideas, doing workout and ofcourse studying my academic stuff. </p>
    
    <br>
    <h3>I use Arch , neovim , kitty and many other crazy tools.</h3>
  </span>

  
</main>





<style>

  .homeContainer{
    font-family: "IBM Plex Mono", monospace;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: calc(100vh - 5rem);

  }
  
  .yetAnotherContainer{
    display: inline-block;
    position: relative;
    width: 60vw;
    border: 1.5px solid white;
    padding: 2vw;
    border-radius: 10px;
  }


  .headlineContainer{
    margin-top: 2vw;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 400;
  }

  p{
    line-height: 1.3rem;
    word-spacing: 2px;
  }

  h4{
    color: rgb(163, 167, 171);
  }

  h2{
    color: rgb(222, 225, 228);
  }

  h3{
    color: rgb(196, 185, 185);
    font-size: 14px;
  }

  .pfpImg {
    height: 2.5rem;  /* 40px */
    width: 2.5rem;   /* 40px */
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

@media(max-width: 600px){
  .homeContainer{
   
    display: block;
    width: 100vw;
    height: calc(100vh - 5rem);

  }
  
  .yetAnotherContainer{
    display: inline;
    position: static;
    width: 100%;
    border: 0;
    padding: 0;
    border-radius:0;
  }
}

  @media(max-width: 440px){
    p{
    line-height: 1.3rem;
    word-spacing: 1px;
    font-size: small;
  }

  h4{
    font-size: small;
    color: rgb(163, 167, 171);
  }

  h2{
    font-size: 14px;
    color: rgb(222, 225, 228);
  }

  h3{
    color: rgb(196, 185, 185);
  }

  .pfpImg {
    height: 2.5rem;  /* 40px */
    width: 2.5rem;   /* 40px */
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
  }


@media (min-width: 768px) {
    .pfpImg {
        height: 3rem;
        width: 3rem; 
    }
}






:global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "IBM Plex Mono", monospace;
    font-style: normal;
  }

  :global(*::selection){
    background-color:black;
    color: rgb(188, 179, 179);
  }

  :global(main) {
    background-color: rgb(31, 27, 27);
    color: azure;
    font-family: "IBM Plex Mono", monospace;
    font-style: normal;
    padding: 0 2rem;
    overflow: hidden;
  }

  :global(html, body) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: rgb(31, 27, 27);
    color: azure;
    font-family: "IBM Plex Mono", monospace;
    font-style: normal;
  }
</style>
