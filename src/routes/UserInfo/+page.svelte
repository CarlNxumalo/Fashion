<script>
    import FirstTime from "./FirstTime.svelte";
    import Summary from "./Summary.svelte";
    var yesNo = true;
    

</script>
<body style="background-color: darkolivegreen;">
    {#if yesNo}
        <FirstTime/>
    {/if}
    {#if !yesNo}
        <Summary/>
    {/if}

</body>