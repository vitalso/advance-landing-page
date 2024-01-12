<template>
    
    <section class="py-8 lg:py-20">
        <div class="container mx-auto px-5">

            <div class="xs:mx-10">
                <h3 class="uppercase text-[28px] md:text-[34px] leading-10 pb-8 border-b border-b-white border-opacity-20"  data-aos="fade-up" data-aos-delay="100">FAQ</h3>

                <div class="flex flex-col gap-6"  data-aos="fade-up" data-aos-delay="200">
                    <!-- Faq item -->
                    <div
                        v-for="item in faqData" :key="item.id"
                        class="border-b border-b-white border-opacity-20 py-6 pr-20 lg:pr-0 relative"
                        @click="toggleFaq(item.id)"
                    >
                        <h4
                            class="text-lg leading-6 md:text-[22px] md:leading-[56px] cursor-pointer"
                        >
                            {{ item.title }}
                        </h4>
                        <p
                            class="text-base md:text-lg leading-7 overflow-hidden transition-all"
                            :class="{ 'h-full mt-2 md:mt-6' : item.open , 'h-0 mt-0' : !item.open }"
                        >
                            {{ item.content }}
                        </p>

                        <button type="button" class="rounded-full border w-[35px] h-[35px] md:w-[56px] md:h-[56px] border-white border-opacity-20 p-5 flex flex-col justify-center items-center hover:bg-primary-light transition-all absolute right-0 top-6">
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
    { id: 0, open: true, title: 'Who can benefit from Advance?' , content: 'Our program is tailored for founders of tech startups who are seeking to grow their business, develop personal leadership skills, maintain their health under pressure, and build a supportive community of like-minded entrepreneurs.' },
    { id: 1, open: false, title: 'How is the program structured?' , content: 'The program is a blend of personalized coaching, group sessions, health check ups and self-guided learning materials. It"s designed to be flexible, accommodating the busy schedules of startup founders while providing comprehensive support in all key areas.' },
    { id: 2, open: false, title: 'What kind of commitment is required from participants?' , content: 'We understand the time constraints of startup founders. While the program requires a certain commitment to benefit from and apply the learning in your business and personal life, the specific time commitments can be tailored to individual needs.' },
    { id: 3, open: false, title: 'How do I join Advance?' , content: 'Interested founders can set up a discovery call through our website. The application process includes a brief questionnaire about your startup and goals, followed by a consultation call to ensure our program aligns with your needs.' },
    { id: 4, open: false, title: 'What results can I expect from participating in the program?' , content: 'Participants will see improvements in the areas that they are currently lagging in. Whether that is in specific aspects of leadership skills, having more clarity and confidence in your business positioning and strategy, or experiencing enhanced personal health - Advance will identify and strengthen your unique areas for growth.' },
    { id: 5, open: false, title: 'What is the cost of Advance? ' , content: 'Pricing depends on your individual needs. Please book a Discovery call to find out more.' },
]);

// Toggle FAQ item
const toggleFaq = (id) => {

    // toggle 'open' option
    faqData.value[id].open = !faqData.value[id].open;

}

</script>