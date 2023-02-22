<script setup>

</script>


<template>
    <div class="container">

        <h3 class="plan_title">Pricing that works for you.</h3>
        <div class="plan_section">
            <div class="plan_side">
                <h1>Try EATTE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elemen.
                </p>
                <ul>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            Loyalty
                        </p>
                    </li>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            Gift Cards
                        </p>
                    </li>
                    <li>
                        <i class='bx bx-check-circle'></i>
                        <p>
                            SMS Marketing
                        </p>
                    </li>
                </ul>
            </div>
            <div class="plan_side">
                <div class="plan">
                    <div class="plan_icon">
                        <i class='bx bx-check text-[#93A3B0CC]'></i>
                    </div>
                    <div class="plan_info">
                        <h4>Monthly</h4>
                        <p>Pay Monthly for software and devices.</p>
                    </div>
                </div>
                <div class="plan active_plan">
                    <div class="plan_icon">
                        <i class='bx bx-check'></i>
                    </div>
                    <div class="plan_info">
                        <h4>Pay as you go</h4>
                        <p>No upfront cost. No monthly subscription</p>
                    </div>
                    <p class="plan_best">Best Value</p>
                </div>
                <button class="plan_btn">
                    <p>Try</p>
                    <i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
        </div>

    </div>
</template>



<style scoped>
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

.plan_title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
    color: var(--primary);
}

.plan_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 100px;
}

.plan_section .plan_side {
    width: calc(100%/2 - 25px);
}

.plan_section .plan_side h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 15px;
}

.plan_section .plan_side p {
    font-size: 18px;
    margin-bottom: 35px;
}

.plan_section .plan_side ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin: 40px 0px;
}

.plan_section .plan_side ul li {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.plan_section .plan_side ul li i {
    font-size: 20px;
    color: var(--primary);
}

.plan_section .plan_side ul li p {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0;
}

.plan_section .plan_side .plan {
    position: relative;
    width: 100%;
    height: 110px;
    padding: 25px 15px;
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
}

.plan_section .plan_side .plan .plan_icon {
    width: 55px;
    height: 55px;
    background-color: #93A3B029;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.plan_section .plan_side .plan .plan_icon i {
    font-size: 40px;
}

.plan_section .plan_side .plan .plan_info h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--font);
}

.plan_section .plan_side .plan .plan_info p {
    font-size: 16px;
    margin: 0;
    color: #3F4440;
}

.plan_section .plan_side .plan .plan_best {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 12px;
    font-weight: 700;
    background: linear-gradient(90deg, #FF6137, #CC4D2C);
    padding: 5px 10px;
    border-radius: 20px;
    color: #fff;
    margin: 0;
}

.plan_section .plan_side .plan.active_plan {
    border-color: var(--primary);
}

.plan_section .plan_side .plan.active_plan .plan_icon {
    background-color: var(--primary);
}

.plan_section .plan_side .plan.active_plan .plan_icon i {
    color: #fff;
}

.plan_section .plan_btn {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    background-image: linear-gradient(90deg, #FF6137, #CC4D2C);
}

.plan_section .plan_btn p {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
}

.plan_section .plan_btn i {
    font-size: 26px;
    color: #ffffff;
}

@media (max-width:992px) {
    .plan_section .plan_side {
        width: 100%;
    }
}
</style>