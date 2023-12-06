<template>
    
    <section class="py-20">
        <div class="container mx-auto px-5">

            <div class="mx-10">
                <h3 class="uppercase text-[34px] leading-10 pb-8 border-b border-b-white border-opacity-20">FAQ</h3>

                <div class="flex flex-col gap-6">
                    <!-- Faq item -->
                    <div
                        v-for="item in faqData" :key="item.id"
                        class="border-b border-b-white border-opacity-20 py-6 relative"
                        @click="toggleFaq(item.id)"
                    >
                        <h4
                            class="text-[22px] leading-[56px] cursor-pointer"
                        >
                            {{ item.title }}
                        </h4>
                        <p
                            class="text-lg leading-7 overflow-hidden transition-all"
                            :class="{ 'h-full mt-6' : item.open , 'h-0 mt-0' : !item.open }"
                        >
                            {{ item.content }}
                        </p>

                        <button type="button" class="rounded-full border w-[56px] h-[56px] border-white border-opacity-20 p-5 flex flex-col justify-center items-center hover:bg-primary-light transition-all absolute right-0 top-6">
                            <nuxt-icon name="icon-plus" filled v-if="!item.open" />
                            <nuxt-icon name="icon-minus" filled v-else />
                        </button>
                    </div>
                    <!-- End Faq iten -->

                </div>
            </div>

        </div>
    </section>

</template>

<script setup>

import { ref } from 'vue';

const faqData = ref([
    { id: 0, open: true, title: 'Thrive within a vibrant founder community, building deep, lasting connections' , content: 'We want you to get results fast. Our goal is to get you a return on your investment within the first 90 days of the program. That way you can reinvest the extra profit in your business to scale faster whilst unlocking more freedom for yourself.' },
    { id: 1, open: false, title: 'Thrive within a vibrant founder community, building deep, lasting connections' , content: 'We want you to get results fast. Our goal is to get you a return on your investment within the first 90 days of the program. That way you can reinvest the extra profit in your business to scale faster whilst unlocking more freedom for yourself.' },
    { id: 2, open: false, title: 'Thrive within a vibrant founder community, building deep, lasting connections' , content: 'We want you to get results fast. Our goal is to get you a return on your investment within the first 90 days of the program. That way you can reinvest the extra profit in your business to scale faster whilst unlocking more freedom for yourself.' },
    { id: 3, open: false, title: 'Thrive within a vibrant founder community, building deep, lasting connections' , content: 'We want you to get results fast. Our goal is to get you a return on your investment within the first 90 days of the program. That way you can reinvest the extra profit in your business to scale faster whilst unlocking more freedom for yourself.' },
]);

// Toggle FAQ item
const toggleFaq = (id) => {

    // toggle 'open' option
    faqData.value[id].open = !faqData.value[id].open;

}

</script>