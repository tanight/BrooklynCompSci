<template>
  <div id="event">
    <div class="card">
    <img src="../assets/csparty.jpg" alt="picholder" style="width:25%">
    <div class="eveDescrip">
    <h4 class="eventhead"><b>Computer Science End Of The Year Party</b></h4>
    <p>Join us for the End of the Year Party for Computer Science students!</p>
    <p><a id="rsvp" href="https://tinyurl.com/subocsparty" title="Click here to RSVP for the CS Party!">RSVP Here</a></p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event"
};
</script>
<!-- styling for the component -->
<style>
#event {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>