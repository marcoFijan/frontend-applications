<script>
    export let src;
    export let alt;
</script>

<style>
    img{
        width: 100%;
        height: 50vh;
        position: absolute;
        /* filter: grayscale(100%); */
        filter: contrast(70%);
        object-fit: cover;
    }
</style>

<img {src} {alt}/>