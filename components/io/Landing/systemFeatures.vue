<template>
  <div class="container">
    <div class="header_container">
      <h2 class="main_text">And some features beside that</h2>
      <p class="sub_text">
        EATTE restaurant management software is your all-in-one solution to
        successfully run your restaurant. We provide payment processing, point
        of sale and valuable insights to boost margins while saving you time.
      </p>
      <h1 class="font-montse dark:text-white font-semibold">
        Our platform is easy to implement and use.
      </h1>
    </div>
    <div class="features_section">
      <div class="features_side">
        <h3 class="font-montse">Customer Engagement</h3>
        <p class="font-montse">
          At EATTE, we believe in customer engagement. We strive to create a
          positive, meaningful and valuable experience for each of our
          customers. We believe that providing the best customer service means
          taking the time to understand your needs and offering helpful
          solutions that make you feel taken care of.
        </p>
        <ul>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Loyalty</p>
          </li>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Gift Cards</p>
          </li>
          <li class="font-montse">
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">SMS Marketing</p>
          </li>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Customer Online Reservations</p>
          </li>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Coupons</p>
          </li>
        </ul>
        <a href="#test" class="font-montse">
          Learn more about Customer Engagement
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <div class="features_side img_side">
        <img src="../../../assets/images/features/landing/one.svg" alt="img" />
      </div>
   
    </div>

    <div class="features_section reverse">
      <div class="features_side">
        <h3 class="font-montse">Employee Management</h3>
        <p class="font-montse pb-12">
          Our system is easy to use and provides you with a secure platform to
          store and access data. You can create employee profiles and assign
          them to teams, roles, and tasks. You can also utilize our
          time-tracking feature to accurately monitor productivity and
          attendance.
        </p>

        <a href="#test" class="font-montse">
          Learn more about Employee Management
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <div class="features_side img_side">
        <img src="../../../assets/images/features/landing/two.svg" alt="img" />
      </div>
    </div>

    <div class="features_section">
      <div class="features_side">
        <h3 class="font-montse">Back-Office Management</h3>
        <p class="font-montse">
          We are here to help you make sure your operations run smoothly and
          efficiently. From automating administrative processes to developing
          custom integrations, we have the resources and expertise to help you
          streamline your operations.
        </p>
        <ul>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Floor Management</p>
          </li>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Table Management with Server Rotation</p>
          </li>
          <li>
            <i class="bx bx-check-circle"></i>
            <p class="font-montse">Reports and analytics</p>
          </li>
        </ul>
        <a href="#test" class="font-montse">
          Learn more about Back-Office Management
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <div class="features_side img_side">
        <img src="../../../assets/images/features/landing/three.svg" alt="img" />
      </div>
    </div>

    <div class="features_section reverse">
      <div class="features_side">
        <h3 class="font-montse">Point Of Sale (POS)</h3>
        <p class="font-montse pb-12">
          With EATTE POS, you'll be able to solve your daily operations with
          ease. Our intuitive Point of Sale system is designed to be
          user-friendly, with a simple and straightforward interface that makes
          it easy for anyone to get up and running quickly. Plus, you'll have
          access to all the features you need to stay organized, such as
          managing inventory, employee scheduling, customer data and more.
        </p>

        <a href="#test" class="font-montse">
          Learn more about Payment Processing
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <div class="features_side img_side">
        <img src="../../../assets/images/features/landing/four.svg" alt="img" />
      </div>
    </div>

    <div class="features_section">
      <div class="features_side">
        <h3 class="font-montse">Kitchen Display System (KDS)</h3>
        <p class="font-montse pb-12">
          EATTE KDS stands for “Eliminate, Automate, Test, Track, Evaluate, and
          Take Action”. It’s a comprehensive strategy that can help you achieve
          your goals and maximize results.
        </p>
        <a href="#test" class="font-montse">
          Learn more about Customer Support
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
      <div class="features_side img_side">
        <img src="../../../assets/images/features/landing/five.svg" alt="img" />
      </div>
    </div>

    <IoButton :primary="true" :title="'View all features'" />
  </div>
</template>

<script setup></script>

<style scoped>
.header_container {
  @apply space-y-2 text-center mb-16;
}

.main_text {
  @apply text-3xl font-bold text-primary-color font-montse;
}

.sub_text {
  @apply text-xl text-font-color font-normal font-montse dark:text-white;
}

.view_button {
  @apply flex flex-wrap justify-center my-8;
}

.get_started {
  @apply font-montse flex w-72 self-baseline items-center justify-evenly rounded-lg px-8 py-3 m-2 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6137] to-[#CC4D2C];
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .container {
    max-width: 992px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 768px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 576px;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }
}

.features_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 100px;
  z-index: 1;
}

.features_section.reverse {
  flex-direction: row-reverse;
}

.features_section .features_side {
  position: relative;
  width: calc(100% / 2 - 25px);
}

.features_section .features_side h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.features_section .features_side p {
  font-size: 18px;
}

.features_section .features_side ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin: 40px 0px;
  align-items: center;
}

.features_section .features_side ul li {
  width: calc(100% / 2 - 10px);
  display: flex;
  align-items: center;
  gap: 10px;
}

.features_section .features_side ul li i {
  font-size: 20px;
  color: var(--primary);
}

.features_section .features_side ul li p {
  font-size: 16px;
  font-weight: 600;
}

.features_section .features_side a {
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features_section .features_side.img_side::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 110%;
  top: -5%;
  left: -3%;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #ff6137, #cc4d2c);
  z-index: 1;
}

.features_section .features_side.img_side img {
  position: relative;
  width: 100%;
  height: auto;
  object-fit: contain;
  z-index: 10;
}

@media (max-width: 992px) {
  .features_section .features_side {
    width: 100%;
  }
}
</style>
