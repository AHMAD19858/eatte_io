<script setup>
import kdsImage from "../assets/images/kds.svg";
import one from "../assets/images/features/kds/one.svg";
import two from "../assets/images/features/kds/two.svg";
import three from "../assets/images/features/kds/three.svg";
import four from "../assets/images/features/kds/four.svg";
import service1 from "../assets/images/icons/hand.svg";
import service3 from "../assets/images/icons/code.svg";
import service2 from "../assets/images/icons/charts.svg";


const serviceData = [
  {
    img: service2,
    label: "Improve Your Management",
    desc: `Streamline your kitchen management system and simplify your staff's workload.`,
  },
  {
    img: service1,
    label: "Efficient Order Management",
    desc: "Guarantee the precision of every order and automatically route them to their respective stations.",
  },
  {
    img: service3,
    label: "Insights into Kitchen Performance",
    desc: `Monitor your kitchen's service speed and track your staff's performance.`,
  },
];

const featuresData = [
  {
    position: "right",
    img: one,
    title:
      "Our Kitchen Display System can help you save time and money by improving communication and increasing efficiency.",
    sub_title: `Manage your restaurant from anywhere. Dynamic reports in the cloud, accessed from any device, put you in control of your restaurant. Track everything in real time, including weekly category sales, wages and more.`,
    details: [
      {
        main: "Order Ready Notifications",
        details: "Take payments (EMV or Card) tableside.",
      },
      {
        main: "Tableside Payments",
        details: "Take tap, dip, or swipe payments tableside.",
      },
      {
        main: "Guest Feedback",
        details: "Collect and respond to guest feedback immediately.",
      },
    ],
  },
  {
    position: "left",
    img: two,
    title: "Online Ordering & Delivery",
    sub_title: `Grow your business online with your own commission-free ordering channels for takeout and delivery. EATTE point of sale lets you maximize off-premise sales while minimizing any costly 3rd party commissions.`,
    details: [
      {
        main: "Restaurant-grade hardware",
        details:
          "Our Kitchen Display System (KDS) comes equipped with restaurant-grade hardware that boasts a higher temperature rating and greater durability than standard iPad screens.",
      },
      {
        main: "Multiple screen sizes",
        details:
          "Choose from various screen sizes to mount your KDS anywhere in the kitchen without compromising visibility.",
      },
      {
        main: "Digital ordering built-in integration",
        details:
          "With digital ordering integration, items are sent directly to the KDS as soon as the customer orders, enabling the kitchen staff to start preparing the items almost immediately. This seamless integration helps to reduce wait times and improve order accuracy.",
      },
    ],
  },
  {
    position: "right",
    img: three,
    title: "confirm availability, cost, and delivery estimated dates",
    sub_title: `Vendors are able to confirm availability, cost, and delivery estimated dates, providing you with all the information you need to make informed decisions about your inventory`,
    details: [
      {
        main: "streamline the purchasing process",
        details: `This also means that you can streamline the purchasing process and ensure that you're always getting the best deals on the items you need.`,
      },
    ],
  },
  {
    position: "left",
    img: four,
    title: `Customize Your Kitchen Workflow`,
    sub_title: `Empower your kitchen staff with the visibility they need to effortlessly prepare top-notch meals, while enabling waitstaff to send orders as soon as they're taken and dedicate more time to providing customer recommendations.`,
    details: [
      {
        main: "Streamline your kitchen operations with our features",
        details:
          "such as all-day display and production item counts, enabling your staff to focus on preparing food instead of counting tickets.",
      },
      {
        main: "Advance prep station routing",
        details:
          "ensures that orders are routed to the correct station - dine-in, takeout, or delivery - for efficient preparation.",
      },
      {
        main: "Track your kitchen productivity with detailed reporting",
        details:
          "including ticket times by prep station, to identify bottlenecks and optimize your workflow",
      },
    ],
  },
];
</script>

<template>
  <div class="screen_container">
    <IoHeadersRow
      :service="'KDS'"
      :sub_text="'Improve communication between your kitchen and wait staff with our Kitchen Display Screen, enabling your cooks to effortlessly read orders and notes, streamlining the process.'"
      :start_btn="'Get Started'"
      :demo_btn="'Get a demo'"
      :row_img="kdsImage"
      :another_device="true"
    />

    <div class="bg-background-color pt-12 pb-12 dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'How EATTE KDS helps you?'"
        :main="'Key features that can simplify your life'"
        :first_sub_main="`The Kitchen Display System (KDS) facilitates a seamless connection between your front`"
        :second_sub_main="'-of-house and kitchen staff, enabling them to serve exceptional meals..'"
      />
    </div>

    <div class="pos_helps">
      <div class="py-12 bg-background-color dark:bg-dark-background-color">
        <IoServices :items="serviceData" :numbers="3" />
        <div class="bg-white col">
          <IoButton :secondary="true" :title="'See Pricing'" />
        </div>
      </div>
    </div>

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Save Money & Time'"
        :main="'Our Kitchen Display System can help you save time and money by improving communication and increasing efficiency.'"
        :first_sub_main="'With this system, you can enhance order accuracy, streamline the meal preparation'"
        :second_sub_main="'process, and ensure courses are timed perfectly.'"
      />
    </div>

    <IoFeatures :items="featuresData" />

    <div class="py-10 bg-background-color dark:bg-dark-background-color">
      <IoHeadersTripleLines
        :first_line="'Discover More'"
        :main="'All You Require, Conveniently Located in One Place.'"
        :first_sub_main="'Find all the restaurant management solutions you need in one place with our seamlessly '"
        :second_sub_main="'integrated software suite, providing unbeatable convenience.'"
      />
    </div>

    <IoCard  />

    <IoButton :secondary="true" :title="'View All Services'" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  /* padding: 0 70px; */
  margin: 0 auto;
}
.pos_helps {
  width: 100%;
  padding: 0 80px;
  margin: 0 auto;

  @apply dark:bg-dark-background-color;
}

.screen_container {
  @apply pt-[100px] bg-background-color min-h-full dark:text-white dark:bg-dark-background-color;
}
@media (max-width: 576px) {
  .small_container {
    width: unset;
  }
  .pos_helps {
    padding: 0 30px;
  }
}
</style>
