<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>ScreenToGif</strong> by
        <a href="https://www.twitter.com/NickeManarin">Nicke Manarin</a>
        <br />
        2013-{{ year }}
      </p>

    </div>
  </footer>
</template>

<script>
  export default {
      name: "Footer",
      computed: {
          year() {
              return new Date().getFullYear();
          }
      }
  };
</script>

<style scoped></style>
