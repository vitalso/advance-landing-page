<template>

    <Head>
      <Title>Advance</Title>
      <Meta name="description" content="Advance Landing page" />
      <Meta name="keywords" content="Advance Landing page" />
    </Head>

    <Header />

    <section class="container mx-auto px-5 relative">

        <div class="text-center pt-20">
            <h2 class="text-extra-lg leading-none" data-aos="fade-right">Full-spectrum</h2>
            <h3 class="font-title text-extra-lg leading-none">
                <span class="block" data-aos="fade-left" data-aos-delay="200">Founder</span>
                <span data-aos="fade-right" data-aos-delay="400" class="block"><span class="block -translate-x-12 lg:-translate-x-24">Coaching</span></span>
            </h3>
        </div>

        <div class="max-w-[320px] mx-auto flex flex-col items-center lg:items-start mt-4 lg:mt-0 mb-6 lg:mb-0 lg:text-left lg:ml-auto lg:mr-8 lg:-translate-y-24">
            <p class="mb-8 leading-7 text-base sm:text-lg text-center lg:text-left" data-aos="fade-up" data-aos-delay="600">A 360° coaching program tailored to empower startup founders in their business, body, mind, and network.</p>
            <nuxt-link to="https://calendly.com/dienst-basti/coaching-intro-call" target="_blank" data-aos="fade-up" data-aos-delay="700" class="group/btn px-5 sm:px-[30px] py-3.5 sm:py-5 bg-primary-light rounded-[36px] text-[15px] sm:text-lg !leading-4 uppercase text-white font-medium flex items-center transition-all">
                Book call now
                <nuxt-icon name="arrow-right" class="ml-2.5 transition-all duration-500 group-hover/btn:translate-x-2" filled />
            </nuxt-link>
        </div>

        <button type="button" data-aos="fade-down" class="text-base leading-4 uppercase text-white hidden absolute left-5 xl:-left-5 bottom-1/3 lg:flex">
            <nuxt-icon name="scroll-down" data-aos-delay="2000" class="mr-2 scroll-animation" filled />
            SCROLL
        </button>

        <div class="xs:mx-10 border-t border-t-white border-opacity-20 py-6" data-aos="fade-up" data-aos-delay="1000">
            <div class="flex items-center gap-2 sm:gap-8 justify-center lg:justify-between flex-wrap lg:flex-nowrap">
                <span class="uppercase w-full text-center lg:text-left lg:w-auto">Supporting founders backed by</span>

                <NuxtImg src="images/sequoia.svg" width="162" height="50" />
                <NuxtImg src="images/y-combinator.svg" width="166" height="50" />
                <NuxtImg src="images/gv.svg" width="83" height="50" />
                <NuxtImg src="images/headline.svg" width="138" />
                <NuxtImg src="images/d-capital.svg" width="146" />
            </div>
        </div>

        <!-- Inro light -->
        <NuxtImg src="images/intro-light-animated.svg" width="1160" class="absolute top-0 right-0 sm:right-[20%] -z-10 pointer-events-none" data-aos="fade-up-right" data-aos-delay="400" />
    </section>

    <section class="container mx-auto px-5">
        <div class="xs:mx-10 flex flex-col lg:flex-row gap-8 lg:gap-32 mt-32 md:mt-52">
            <h3 class="uppercase leading-7 text-[22px] md:text-2xl" data-aos="fade-right" data-aos-delay="200">ABOUT <br class="hidden lg:block"> ADVANCE</h3>

            <p class="text-large leading-relaxed max-w-[840px] ml-auto" data-aos="fade-left" data-aos-delay="400">Feeling the weight of startup pressures? Advance is your ally and secret weapon, helping you to transform overwhelming obstacles into stepping stones for success and growth.</p>
        </div>

        <div class="py-20 md:py-36 md:mx-20 flex flex-wrap lg:flex-nowrap justify-center gap-12 md:gap-[76px]">

            <div class="rounded-full w-[126px] h-[126px] sm:w-[218px] sm:h-[218px] text-center flex flex-col justify-center items-center text-base md:text-xl leading-6 relative" data-aos="fade-right" data-aos-delay="400">
                GUIDED <br> GROWTH
                <nuxt-icon name="circle" class="pointer-events-none absolute -z-10 scale-75 sm:scale-100" filled />
            </div>

            <div class="rounded-full w-[126px] h-[126px] sm:w-[218px] sm:h-[218px] text-center flex flex-col justify-center items-center text-base md:text-xl leading-6 relative" data-aos="fade-right" data-aos-delay="200">
                BODY <br> BOOST
                <nuxt-icon name="circle" class="pointer-events-none absolute -z-10 scale-75 sm:scale-100" filled />
            </div>

            <div class="rounded-full w-[126px] h-[136px] sm:w-[218px] sm:h-[218px] text-center flex flex-col justify-center items-center text-base md:text-xl leading-6 relative" data-aos="fade-left" data-aos-delay="200">
                MIND <br> MASTERY
                <nuxt-icon name="circle" class="pointer-events-none absolute -z-10 scale-75 sm:scale-100" filled />
            </div>

            <div class="rounded-full w-[126px] h-[126px] sm:w-[218px] sm:h-[218px] text-center flex flex-col justify-center items-center text-base md:text-xl leading-6 relative" data-aos="fade-left" data-aos-delay="400">
                FOUNDER <br> FELLOWSHIP
                <nuxt-icon name="circle" class="pointer-events-none absolute -z-10 scale-75 sm:scale-100" filled />
            </div>

        </div>
    </section>

    <section class="container mx-auto px-5 py-12 lg:py-36 relative">
        <div class="xs:mx-10">

            <div class="relative">

                <p data-aos="fade-up" data-aos-delay="300" class="text-base sm:text-[22px] leading-6 xl:absolute xl:top-12 right-0 text-center xl:text-left mb-4 xl:mb-0">(1/4)</p>

                <p data-aos="fade-up" data-aos-delay="300" class="text-[22px] sm:text-2xl leading-7 uppercase xl:absolute xl:top-6 left-0 text-center xl:text-left mb-10 xl:mb-0">guided <br class="hidden xl:block"> growth</p>

                <h2 class="text-center leading-none text-sm-extra-lg">
                    <span data-aos="fade-right" data-aos-delay="100" class="block">Where business</span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="block sm:-translate-x-32">strategy meets</span></span>
                    <span data-aos="fade-right" data-aos-delay="100" class="font-title block">personal mastery</span>
                </h2>

            </div>

            <div class="border-t border-t-white border-opacity-20 mt-10 lg:mt-24 pt-10 lg:pt-14" data-aos="fade-left" data-aos-delay="500"></div>
            <div class="flex flex-col gap-8 lg:flex-row pb-10 lg:pb-14" data-aos="fade-up" data-aos-delay="700">

                <ul class="text-lg uppercase leading-7">
                    <li class="flex items-start mb-6">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        In depth coaching calls every two weeks
                    </li>

                    <li class="flex items-start">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        Ongoing Whatsapp, Email and Phone Support
                    </li>
                </ul>

                <div class="text-base md:text-lg lg:max-w-[480px] lg:ml-auto">
                    <p class="leading-7 mb-6">Every startup journey is fraught with unforeseen challenges and self-doubt, where the weight of every business decision bears down heavily. It's a tightrope walk, balancing professional ambition with personal well-being. </p>
                    <p class="leading-7">Guided Growth offers a sounding board for crucial business decisions, as well as a sparring partner to navigate the complexities of leadership and personal growth. This is coaching redefined – where business acumen and personal mastery converge, turning hurdles into stepping stones.</p>
                </div>
            </div>
            

        </div>

        <div>
            <NuxtImg src="images/light-1-4.svg" width="922" class="absolute top-0 -z-10 pointer-events-none left-0 sm:left-1/2 sm:-ml-[420px]" data-aos="fade-up" data-aos-delay="700" />
        </div>
    </section>

    <section class="container mx-auto px-5 py-12 lg:py-36 relative">
        <div class="xs:mx-10">

            <div class="relative">

                <p data-aos="fade-up" data-aos-delay="300" class="text-base sm:text-[22px] leading-6 xl:absolute xl:top-12 right-0 text-center xl:text-left mb-4 xl:mb-0">(2/4)</p>
                
                <p data-aos="fade-up" data-aos-delay="300" class="text-[22px] sm:text-2xl leading-7 uppercase xl:absolute xl:top-6 left-0 text-center xl:text-left mb-10 xl:mb-0">BODY <br class="hidden xl:block"> BOOST</p>

                <h2 class="text-center leading-none text-sm-extra-lg">
                    <span data-aos="fade-right" data-aos-delay="100" class="block sm:-translate-x-40">Tailored</span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="block sm:translate-x-16">training for</span></span>
                    <span data-aos="fade-right" data-aos-delay="100" class="block font-title">peak performance</span>
                </h2>

            </div>

            <div class="border-t border-t-white border-opacity-20 mt-10 lg:mt-24 pt-10 lg:pt-14" data-aos="fade-left" data-aos-delay="500"></div>
            <div class="flex flex-col gap-8 lg:flex-row pb-10 lg:pb-14" data-aos="fade-up" data-aos-delay="700">

                <ul class="text-lg uppercase leading-7">
                    <li class="flex items-start mb-6">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        360° Health Check up via multiple lab tests
                    </li>

                    <li class="flex items-start">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        personalised nutrition, exercise and supplement recommendations
                    </li>
                </ul>

                <div class="text-base md:text-lg lg:max-w-[480px] lg:ml-auto">
                    <p class="leading-7 mb-6">The entrepreneurial grind often sidelines personal health, leaving founders drained and verging on the edge of burn out. </p>
                    <p class="leading-7">Enter Body Boost — not just another fitness regimen, but an extensive, science-based solution. Starting with a series of detailed lab tests, we decode your body's unique needs and imbalances. The result? A tailored roadmap spanning nutrition, exercise, and supplementation. Refuel, re-energize, and rejuvenate with recommendations made just for you.</p>
                </div>
            </div>

        </div>

        <NuxtImg src="images/light-2-4.svg" width="1700" class="absolute top-8 -z-10 pointer-events-none left-0 lg:left-1/2 lg:-ml-[650px]" data-aos="fade-up" data-aos-delay="700" />
    </section>

    <section class="container mx-auto px-5 py-12 lg:py-36 relative">
        <div class="xs:mx-10">

            <div class="relative">

                <p data-aos="fade-up" data-aos-delay="300" class="text-base sm:text-[22px] leading-6 xl:absolute xl:top-12 right-0 text-center xl:text-left mb-4 xl:mb-0">(3/4)</p>
                
                <p data-aos="fade-up" data-aos-delay="300" class="text-[22px] sm:text-2xl leading-7 uppercase xl:absolute xl:top-6 left-0 text-center xl:text-left mb-10 xl:mb-0">MIND <br class="hidden xl:block"> MASTERY</p>

                <h2 class="text-center leading-none text-sm-extra-lg">
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="block sm:-translate-x-8">From blind</span></span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="block sm:translate-x-16">spots to</span></span>
                    <span data-aos="fade-right" data-aos-delay="100" class="block font-title">clarity & strength</span>
                </h2>

            </div>

            <div class="border-t border-t-white border-opacity-20 mt-10 lg:mt-24 pt-10 lg:pt-14" data-aos="fade-left" data-aos-delay="500"></div>
            <div class="flex flex-col gap-8 lg:flex-row pb-10 lg:pb-14" data-aos="fade-up" data-aos-delay="700">

                <ul class="text-lg uppercase leading-7">
                    <li class="flex items-start mb-6">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        Comprehensive Onboarding assessments
                    </li>

                    <li class="flex items-start">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        Personalised exercises, mental models and tools
                    </li>
                </ul>

                <div class="text-base md:text-lg lg:max-w-[480px] lg:ml-auto">
                    <p class="leading-7 mb-6">Feeling stressed, overwhelmed, or constantly running into similar pitfalls? From deep-rooted patterns to hidden blind spots, the startup journey often brings up unresolved issues within ourselves.</p>
                    <p class="leading-7">"Mind Mastery" helps you shed light on these unseen forces. A comprehensive assessment unveils hidden hindrances and paves the way for a personalised program to help you move beyond mere coping to genuine growth. Transforming stress into strength and ambiguity into acute clarity.</p>
                </div>
            </div>

        </div>

        <NuxtImg src="images/light-3-4.svg" width="1280" class="absolute -top-24 sm:top-[15%] lg:-top-[45%] -z-10 pointer-events-none left-6 sm:left-14 lg:left-56" data-aos="fade-left" data-aos-delay="1000" />
    </section>

    <section class="container mx-auto px-5 py-12 lg:py-36 relative">
        <div class="xs:mx-10">

            <div class="relative">

                <p data-aos="fade-up" data-aos-delay="300" class="text-base sm:text-[22px] leading-6 xl:absolute xl:top-12 right-0 text-center xl:text-left mb-4 xl:mb-0">(4/4)</p>
                
                <p data-aos="fade-up" data-aos-delay="300" class="text-[22px] sm:text-2xl leading-7 uppercase xl:absolute xl:top-6 left-0 text-center xl:text-left mb-10 xl:mb-0">FOUNDER <br class="hidden xl:block"> FELLOWSHIP</p>

                <h2 class="text-center leading-none text-sm-extra-lg">
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="block sm:-translate-x-24">From solo</span></span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="block sm:translate-x-24">struggles to</span></span>
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="font-title">collective conquests</span></span>
                </h2>

            </div>

            <div class="border-t border-t-white border-opacity-20 mt-10 lg:mt-24 pt-10 lg:pt-14" data-aos="fade-left" data-aos-delay="500"></div>
            <div class="flex flex-col gap-8 lg:flex-row pb-10 lg:pb-14" data-aos="fade-up" data-aos-delay="700">

                <ul class="text-lg uppercase leading-7">
                    <li class="flex items-start mb-6">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        Monthly masterminds + evening talks
                    </li>

                    <li class="flex items-start">
                        <nuxt-icon name="scroll-down" class="mr-2 -rotate-90 block" filled />
                        Quarterly workshops with guest teachers
                    </li>
                </ul>

                <div class="text-base md:text-lg lg:max-w-[480px] lg:ml-auto">
                    <p class="leading-7 mb-6">Ever felt that pang of loneliness, staring at your screen, wondering if you're the only founder facing this chaos? Here's the truth: you're not alone. But we get it, it sure feels like it. </p>
                    <p class="leading-7">With Founder fellowship, you don’t just join a group. You join a lifeline. An insider club where founders 'get' each other. Swap stories, share nightmares, and celebrate those small victories. It's more than a network; it's your startup safety net.</p>
                </div>
            </div>

        </div>

        <NuxtImg src="images/light-4-4.svg" width="2200" class="absolute -top-1/4 lg:-top-[70%] -z-10 pointer-events-none right-0 sm:-right-8" data-aos="fade-up-right" data-aos-delay="1000" />
    </section>

    <section class="pb-16 lg:pb-52">
        <div class="container mx-auto px-5">

            <div class="xs:mx-10 rounded-lg py-28 text-center leading-none text-sm-extra-lg relative">
                <div class="primary-gradient blur-sm w-full h-full absolute top-0" data-aos="fade-up" data-aos-delay="500"></div>
                <h2 class="mb-12 relative">
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="block -translate-x-10">Ready to</span></span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="font-title block translate-x-10">advance?</span></span>
                </h2>
                
                <div class="relative flex" data-aos="fade-up" data-aos-delay="300">
                    <nuxt-link to="https://calendly.com/dienst-basti/coaching-intro-call" target="_blank" class="group/btn px-5 sm:px-[30px] py-3.5 sm:py-5 mx-auto bg-primary-light rounded-[36px] text-[15px] sm:text-lg !leading-4 uppercase text-white font-medium flex items-center transition-all">
                        Book Discovery Call now
                        <nuxt-icon name="arrow-right" class="ml-2.5 transition-all duration-500 group-hover/btn:translate-x-2" filled />
                    </nuxt-link>
                </div>
            </div>

        </div>
    </section>

    <section class="pb-16 lg:pb-48">
        <div class="container mx-auto px-5">

            <div class="flex flex-col lg:flex-row gap-8 lg:gap-44 pb-16 lg:pb-40 border-b border-b-white border-opacity-20">
                <p class="uppercase text-2xl leading-7 flex-grow shrink-0 basis-auto">SIGN UP FOR <br class="hidden lg:block" /> UPDATES</p>

                <div class="lg:mr-32">
                    <p class="text-large leading-tight">The monthly newsletter for founders <br class="hidden lg:block" />  ready to advance</p>

                    <form action="#" class="mt-14 flex flex-col sm:flex-row items-start gap-4">
                        <input type="text" placeholder="Enter your email here..." class="border-b border-b-white border-opacity-50 w-full h-[38px] sm:max-w-[410px] bg-transparent outline-none focus:border-opacity-100">
                        <button type="submit" class="bg-primary-light rounded-[36px] py-2.5 px-[30px] uppercase text-base leading-4">Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    </section>

    <section class="py-16 lg:py-0">
        <div class="container mx-auto px-5">

            <div class="md:mx-10">

                <h2 class="text-center leading-none text-sm-extra-lg mb-24">
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="block md:-translate-x-20">Advance</span></span>
                    <span data-aos="fade-left" data-aos-delay="300" class="block"><span class="font-title block md:translate-x-20">will help you</span></span>
                </h2>

                <div class="flex gap-4 md:gap-0 flex-wrap justify-around xl:justify-between">
                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-1" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8"><span class="font-bold font-semibold">Effortlessly navigate</span> through business decisions, with newfound clarity and deep insight</p>
                    </div>

                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-2" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8">Radiate health and vitality, <span class="font-bold font-semibold">feel energized</span> and at the peak of your game</p>
                    </div>

                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-3" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8"><span class="font-bold font-semibold">Streamline focus</span> on your core strengths, confidently letting go of non-essentials</p>
                    </div>

                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-4" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8"><span class="font-bold font-semibold">Thrive</span> within a vibrant founder community, building deep, lasting connections</p>
                    </div>

                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-5" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8"><span class="font-bold font-semibold">Break barriers</span> and constantly scale new heights, leaving growth plateaus in the dust</p>
                    </div>

                    <div class="text-center max-w-[345px] mb-10 md:mb-20 duration-500 hover:scale-110" data-aos="fade-up" data-aos-delay="300">
                        <div class="mb-4 flex justify-center">
                            <nuxt-icon name="advance-icon-6" filled />
                        </div>
                        <p class="text-lg md:text-xl leading-8"><span class="font-bold font-semibold">Collaborate harmoniously</span> with your team, turning conflicts into growth opportunities</p>
                    </div>
                </div>

            </div>

        </div>
    </section>

    <section class="py-16 lg:py-52">
        <div class="container mx-auto px-5">

            <div class="xs:mx-10 rounded-lg relative pb-20 lg:pb-0 lg:h-[550px]">
                <div class="primary-gradient blur-sm w-full h-full absolute top-0 left-0 pointer-events-none" data-aos="fade-up" data-aos-delay="100"></div>

                <Carousel ref="feedbackCarousel" v-bind="settings" class="h-full" :wrap-around="true">
                    <Slide key="slide">
                        <div class="carousel__item">

                            <div class="relative p-6 lg:p-[60px] lg:h-[550px] flex flex-col justify-between !text-left">
                                <p class="text-[22px] lg:text-[35px] leading-[140%]" data-aos="fade-up" data-aos-delay="200">“Having been a founder himself, Sebastian truly understands the challenges that Startup founders face and has been an incredible asset to me. I can not recommend him highly enough!”</p>

                                <div class="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-end mt-10 lg:mt-0" data-aos="fade-right" data-aos-delay="300">
                                    <NuxtImg src="images/abuzar.jpeg" class="w-[120px] h-[134px] object-cover rounded-lg" />

                                    <p class="text-base lg:text-lg leading-7 lg:ml-12 mb-2"><span class="block font-bold font-semibold">Abuzar Royesh, </span> Pastel</p>
                                </div>
                            </div>

                        </div>
                    </Slide>
                    <Slide key="slide">
                        <div class="carousel__item">

                            <div class="relative p-6 lg:p-[60px] lg:h-[550px] flex flex-col justify-between !text-left">
                                <p class="text-[22px] lg:text-[35px] leading-[140%]" data-aos="fade-up" data-aos-delay="200">“Sebastian's knack for asking the right questions has consistently led to meaningful reflection, greater self-awareness, and development in my leadership style.”</p>

                                <div class="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-end mt-10 lg:mt-0" data-aos="fade-right" data-aos-delay="300">
                                    <NuxtImg src="images/alex.jpeg" class="w-[120px] h-[134px] object-cover rounded-lg" />

                                    <p class="text-base lg:text-lg leading-7 lg:ml-12 mb-2"><span class="block font-bold font-semibold">Alexander Sloan, </span> Motion</p>
                                </div>
                            </div>

                        </div>
                    </Slide>
                    <Slide key="slide">
                        <div class="carousel__item">

                            <div class="relative p-6 lg:p-[60px] lg:h-[550px] flex flex-col justify-between !text-left">
                                <p class="text-[22px] lg:text-[35px] leading-[140%]" data-aos="fade-up" data-aos-delay="200">“Sebastian has been instrumental in helping me think through a lot of strategic  decisions for the company and myself. His experience as a founder has led him to come from a point of experience that has been invaluable. Amazing coach!”</p>

                                <div class="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start lg:items-end mt-10 lg:mt-0" data-aos="fade-right" data-aos-delay="300">
                                    <NuxtImg src="images/behailu.jpeg" class="w-[120px] h-[134px] object-cover rounded-lg" />

                                    <p class="text-base lg:text-lg leading-7 lg:ml-12 mb-2"><span class="block font-bold font-semibold">Behailu Tekletsadik, </span> Archetype</p>
                                </div>
                            </div>

                        </div>
                    </Slide>
                </Carousel>

                <div class="flex gap-8 mb-2 absolute right-5 bottom-6 lg:right-[60px] lg:bottom-[60px]" data-aos="fade-left" data-aos-delay="400">
                    <button @click="feedbackCarousel.prev()" class="rounded-full border w-[60px] h-[60px] border-white border-opacity-20 p-5 flex flex-col justify-center items-center hover:bg-primary-light transition-all">
                        <nuxt-icon name="arrow-right" class="rotate-180" filled />
                    </button>

                    <button @click="feedbackCarousel.next()" class="rounded-full border w-[60px] h-[60px] border-white border-opacity-20 p-5 flex flex-col justify-center items-center hover:bg-primary-light transition-all">
                        <nuxt-icon name="arrow-right" filled />
                    </button>
                </div>
                
            </div>

            <div class="xs:mx-10 mt-[100px] border-t border-t-white border-opacity-20 py-6" data-aos="fade-up" data-aos-delay="100">
                <div class="flex items-center flex-col sm:flex-row gap-2 sm:gap-8 justify-center lg:justify-between flex-wrap lg:flex-nowrap">
                    <span class="uppercase w-full text-center lg:text-left lg:max-w-[330px]">AS APPEARED IN</span>

                    <NuxtImg src="images/ds.svg" width="108" height="43" />
                    <NuxtImg src="images/es.png" width="196" height="26" />
                    <NuxtImg src="images/forbes.svg" width="128" height="50" />
                    <NuxtImg src="images/gs.svg" width="213" height="50" />
                </div>
            </div>

        </div>
    </section>

    <section>
        <div class="container mx-auto px-5">

            <div class="mx-5 xs:mx-10">

                <h2 class="text-center leading-none text-sm-extra-lg mb-24">
                    <span data-aos="fade-right" data-aos-delay="100" class="block"><span class="block md:-translate-x-32">The team that</span></span>
                    <span data-aos="fade-left" data-aos-delay="200" class="font-title block">helps you advance</span>
                </h2>


                <div class="flex gap-16 items-center md:items-start justify-center flex-col md:flex-row mb-16">

                    <div class="max-w-[380px]">
                        <div class="rounded-lg overflow-hidden relative">
                            <div class="absolute top-0 left-0 w-full h-full radial-gradient"></div>
                            <NuxtImg src="images/Seb.png" width="380" height="360" class="object-cover h-full" />
                        </div>
                        <p class="mt-6 lg:mt-8 text-base lg:text-lg lg:leading-9">
                            <span class="block mb-4 font-bold font-semibold text-xl lg:text-[22px]">Sebastian Dienst</span>
                            Sebastian Dienst is the Founder and Head Coach of Advance. Prior to becoming a coach, he co-founded three companies across eCommerce, B2B SaaS, and Fintech. His expertise lies in scaling businesses and fostering self-awareness and inner alignment in leaders. Sebastian is dedicated to empowering leaders towards professional success and authentic personal transformation.
                        </p>
                    </div>

                    <div class="max-w-[380px]">
                        <div class="rounded-lg overflow-hidden relative">
                            <div class="absolute top-0 left-0 w-full h-full radial-gradient"></div>
                            <NuxtImg src="images/sophia-w.png" width="380" height="360" class="object-cover h-full" />
                        </div>
                        <p class="mt-6 lg:mt-8 text-base lg:text-lg lg:leading-9">
                            <span class="block mb-4 font-bold font-semibold text-xl lg:text-[22px]">Sophia Wachner</span>
                            Dr. Sophia Wachner's practice in Munich focuses on regeneration and prevention, combining functional, orthomolecular, and nutritional medicine. Her holistic approach includes treatments like nutritional therapy, stress management, and bioidentical hormone therapy. She addresses various health concerns such as exhaustion, digestive issues, autoimmune diseases, and chronic pain.For more details, visit her <NuxtLink to="https://www.sophiawachner.de/" target="_blank" class="text-primary-light">website here</NuxtLink>.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>

    <section class="my-[100px] hidden">
        <div class="container mx-auto px-5">

            <div class="xs:mx-10 relative py-[30px] lg:py-[60px] px-5 lg:px-[120px] rounded-lg overflow-hidden">
                <div class="bg-primary-blue bg-opacity-20 blur-sm w-full h-full absolute top-0 left-0 pointer-events-none"></div>

                <div class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 relative">
                    <div class="lg:mx-10 lg:w-full lg:grow" data-aos="fade-right" data-aos-delay="100">
                        <NuxtImg src="images/investments.svg" width="223" />
                    </div>

                    <div  data-aos="fade-left" data-aos-delay="100">
                        <p class="uppercase leading-7 text-2xl mb-4">The Advance Promise</p>
                        <p class="text-lg leading-7">We want you to get results fast. Our goal is to get you a return on your investment within the first 90 days of the program. That way you can reinvest the extra profit in your business to scale faster whilst unlocking more freedom for yourself.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- FAQ section -->
    <FAQ />

    <section class="py-8 md:py-52 mb-52 lg:mb-0 relative overflow-hidden">
        <div class="container mx-auto px-5">

            <div class="xs:mx-10 text-center py-28 mb-56 md:mb-0 leading-none text-sm-extra-lg">
                <h2 class="mb-12">
                    <span data-aos="fade-right" data-aos-delay="100" class="block">Get ready to</span>
                    <span data-aos="fade-left" data-aos-delay="200" class="font-title block -translate-x-8">advance</span>
                </h2>
                
                <div class="flex flex-col justify-center">
                    <nuxt-link to="https://calendly.com/dienst-basti/coaching-intro-call" target="_blank" class="group/btn px-5 sm:px-[30px] py-3.5 sm:py-5 bg-primary-light rounded-[36px] text-[15px] sm:text-lg !leading-4 uppercase text-white font-medium flex items-center transition-all mx-auto" data-aos="fade-up" data-aos-delay="300">
                        Book Discovery Call now
                        <nuxt-icon name="arrow-right" class="ml-2.5 transition-all duration-500 group-hover/btn:translate-x-2" filled />
                    </nuxt-link>
                </div>
            </div>

        </div>

        <NuxtImg src="images/intro-light.svg" width="1160" class="absolute top-0 md:top-36 right-0 md:right-[20%] -z-10 pointer-events-none" data-aos="fade-up-right" data-aos-delay="400" />
    </section>

    <Footer />

</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

import { ref } from 'vue';

const feedbackCarousel = ref(null);
const settings = ref(
    {
        itemsToShow: 1
    }
)
</script>