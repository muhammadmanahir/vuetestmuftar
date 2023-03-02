<template>
  <div class="mob-logo">
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="" />
    </router-link>
  </div>
  <section>
    <div class="right_box">
      <h1>Powerful & Paperless, Yet Simple</h1>
      <p>
        Speed up your business processes and make sure <br />
        your business operations are running smoothly.
      </p>
      <div class="all_checkboxes">
        <img src="../assets/images/process.svg" alt="">
    </div>
    <h3>Stay informed when new updates are released.</h3>
    <div class="short_form">
        <input type="email" placeholder="Enter Your Email">
        <button>Join Our Waitlist</button>
    </div>
    </div>
    <div class="left_box">
        <img src="../assets/images/Divices.svg" alt="">
    </div>
  </section>
</template>

<style scoped>
html,
body{
  overflow: hidden;
}
.mob-logo{
  display: none;
}
section {
  display: flex;
}
.right_box {
  margin: 5rem 12rem;
}
.right_box h1 {
  font-size: 40px;
  font-weight: 400;
  color: #242021;
}
.right_box p{
  color: #666668;
  margin-top: 2.5rem;
  font-size: 22px;
  font-weight: 400;
}
.left_box {
  margin: -7.5rem -6rem;
}
.all_checkboxes {
  display: flex;
  align-items: center;
  margin: 9rem 0rem;
}
.right_box h3{
    color: #666668;
    margin-top: 8rem;
    font-weight: 400;
}
.short_form {
    margin-top: 2rem;
}
.short_form input[type='email']{
    padding: 1rem 2rem;
    font-size: 18px;
    border-radius: 10px;
    width: 25rem;
}
button {
    margin-left: 2rem;
    padding: 1rem 2rem;
    background-color: #3c58a8;
    border: none;
    outline: none;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
}
@media (max-width: 1366px) {
  html,
body{
  overflow: hidden;
}
 .mob-logo {
  display: none;
 }
  section {
    display: flex;
  }
    .right_box{
      margin: 4rem 4rem;
    }
    .left_box{
      margin: -14rem -8rem;
    }
    .left_box img{
        width: 65rem;
        height: 60rem;
    }
    .all_checkboxes {
      display: flex;
      align-items: center;
      margin: 4rem 0rem;
    }
    .right_box h3 {
      margin-top: 1rem;
    }
    .short_form {
      margin-top: 1rem;
  }
}
@media (max-width: 1280px) {
  html,
body{
  overflow: hidden;
}
 .mob-logo {
  display: none;
 }
  section {
    display: flex;
  }
    .right_box{
      margin: 4rem 4rem;
    }
    .left_box{
      margin: -14rem -8rem;
    }
    .left_box img{
        width: 55rem;
        height: 60rem;
    }
    .all_checkboxes {
      display: flex;
      align-items: center;
      margin: 4rem 0rem;
    }
    .right_box h3 {
      margin-top: 1rem;
    }
    .short_form {
      margin-top: 1rem;
  }
}
@media(max-width:700px)

  {
    html,
    body{
      overflow: hidden;
    }
    .mob-logo{
      display: block;
    }
    .mob-logo{
      margin-top: 2.5rem;
      margin-left: 1rem;
    }
    .mob-logo img{
     width: 150px;
    }
    .right_box {
      margin: 2rem 2rem;
      width: 80%;
  }
    .right_box h1 {
      font-size: 25px;
      font-weight: 400;
      color: #242021;
  }
  .right_box p{
       font-size: 13px;
 
}
  .all_checkboxes {
    display: flex;
    align-items: center;
    margin: 4rem 0rem;
    flex-direction: column;
}
.all_checkboxes img{
  width: 100%;
}
.left_box{
  margin: -5rem -27rem;
}
.left_box img {
  width: 30rem;
}
.right_box h3 {
  margin-top: 18rem;
}
.short_form input[type='email'] {
  padding: 0.5rem 1rem;
  font-size: 15px;
  border-radius: 10px;
  width: 19rem;
}
button {
  margin-left: 0rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3c58a8;
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
}
}
</style>
