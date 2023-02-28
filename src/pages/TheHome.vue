<template>
  <section>
    <div class="right_box">
      <h1>Powerful & Paperless, Yet Simple</h1>
      <p>
        Speed up your business processes and make sure <br />
        your business operations are running smoothly.
      </p>
      <div class="all_checkboxes">
      <div class="checkboxes">
        <input type="checkbox" id="driver" checked />
        <label id="driver" for="driver"
          >Driver <br />
          Mobile</label>
        <div class="line" id="carier"></div>
      </div>
      <div class="second_checkboxes">
        <input type="checkbox" id="carrier" checked />
        <label id="carrier" for="carrier"
          >Carrier <br />
          Portal</label>
        <div class="second_line" id="carier"></div>
      </div>
      <div class="third_checkboxes">
        <input type="checkbox" id="broker" />
        <label id="broker" for="broker"
          >Broker <br />
          Portal</label>
        <div class="thrid_line" id="carier"></div>
      </div>
      <div class="fourth_checkboxes">
        <input type="checkbox" id="vendor" />
        <label id="vendor" for="vendor"
          >Vendor <br />
          Portal</label>
        <div class="fourth_line" id="carier"></div>
      </div>
      <div class="fifth_checkboxes">
        <input type="checkbox" id="rapid" />
        <label id="rapid" for="rapid"
          >Rapid <br />
          System</label>
        <div class="fifth_line" id="carier"></div>
      </div>
      <div class="sixth_checkboxes">
        <input type="checkbox" id="parking" />
        <label id="parking" for="parking"
          >Parking <br />
          Network</label>
      </div>
    </div>
    <h3>Stay informed when new updates are released.</h3>
    <div class="short_form">
        <input type="email" placeholder="Enter Your Email">
        <button>Join Our Waitlist</button>
    </div>
    </div>
    <div class="left_box">
        <img src="../assets/images/Divices.png" alt="">
    </div>
  </section>
</template>

<style scoped>
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
  margin: -6.5rem -6rem;
}
.all_checkboxes {
  display: flex;
  align-items: center;
  margin: 2rem -3rem; 
}
.second_checkboxes,
.third_checkboxes,
.fourth_checkboxes,
.fifth_checkboxes
{
    margin-left: -9rem;
}
.sixth_checkboxes {
    margin-left: -9rem;
    margin-top: 7rem;
}
.checkboxes label, 
.second_checkboxes label,
.third_checkboxes label,
.fourth_checkboxes label,
.fifth_checkboxes label,
.sixth_checkboxes label
 {
  cursor: pointer;
  display: flex;
  margin-top: 31px;
  flex-direction: column;
  margin: 1rem 3rem;
}

.checkboxes input[type="checkbox"],
.second_checkboxes input[type="checkbox"],
.third_checkboxes input[type="checkbox"],
.fourth_checkboxes input[type="checkbox"],
.fifth_checkboxes input[type="checkbox"],
.sixth_checkboxes input[type="checkbox"]
 {
  cursor: pointer;
  position: absolute;
  opacity: 0;
}

.checkboxes label::before,
.second_checkboxes label::before,
.third_checkboxes label::before,
.fourth_checkboxes label::before,
.fifth_checkboxes label::before,
.sixth_checkboxes label::before
 {
  content: "";
  width: 40px;
  height: 40px;
  border: 0.15em;
  margin-right: 0.5em;
  border: 5px solid #c5c5c5;
  border-radius: 50%;
}

/* .paymentcheckbox input[type='checkbox']:hover +label::before{
        background: #003566;
      } */
.checkboxes input[type="checkbox"]:checked + label::before,
.second_checkboxes input[type="checkbox"]:checked + label::before
/*.third_checkboxes input[type="checkbox"]:checked + label::before,
.fourth_checkboxes input[type="checkbox"]:checked + label::before,
.fifth_checkboxes input[type="checkbox"]:checked + label::before,
.sixth_checkboxes input[type="checkbox"]:checked + label::before*/

 {
  content: "\002714";
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3c58a8;
  width: 40px;
  height: 40px;
  border: 5px solid #3c58a8;
}

.line,
.second_line,
.thrid_line,
.fourth_line,
.fifth_line
 {
  width: 80px;
  height: 5px;
  background: #c5c5c5;
  margin: -5.2rem 6rem;
}
.line
{
  background: #3c58a8;
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
    .right_box{
        margin: 10rem 4rem;
    }
    .left_box{
        margin: 14rem -3rem;
    }
    .left_box img{
        width: 60rem;
        height: 46rem;
    }
    
}
</style>
