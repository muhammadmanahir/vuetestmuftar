<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/logo.png" alt="" />
        </router-link>
      </div>
      <ul class="links">
        <li>
            <router-link to="/mission">Mission</router-link>
        </li>
        <li>
            <router-link to="/solution">Solutions</router-link>
        </li>
        <li>
            <router-link to="/pricing">Pricing</router-link>
        </li>
        <li>
            <router-link to="/knowledge">Knowledge Bar</router-link>
        </li>
      </ul>
      <ul class="login">
        <li>
            <router-link to="/login">Log in</router-link>
        </li>
        <li class="button">
          <router-link to="/join">Join The Network</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

header a {
  text-decoration: none;
  color: #242021;
  display: inline-block;
  padding: 0.5rem 0.5rem;
  border: 1px solid transparent;
}
.links {
  margin-right: 10rem;
}
.logo img {
  width: 140px;
  height: 50px;
}
.button a {
  padding: 0.5rem 2.5rem;
  background: #3c58a8;
  border-radius: 0.5rem;
  color: white;
}
/*a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}*/

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2.5rem;
}
@media (max-width: 1366px) {
    header {
        margin-left: -13rem;
        width: 112rem;
      }
  header nav {
    width: 70%;
  }

  .links {
    margin-right: 3rem;
  }

}
</style>
