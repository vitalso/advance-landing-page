<template>
    <footer class="container mx-auto pb-6 px-5 absolute bottom-0 left-1/2 -translate-x-1/2">

        <div class="flex flex-wrap lg:flex-nowrap md:gap-10 items-start justify-between pt-8 border-t border-t-white border-opacity-20">
            <NuxtLink to="/" class="w-full mb-8 sm:mb-0 sm:max-w-[120px] mt-1 md:w-auto block">
                <NuxtImg src="/images/logo.svg" width="125" />
            </NuxtLink>

            <div class="text-base lg:text-lg w-2/3 sm:w-auto">
                <p class="mb-2 leading-7 font-medium">Get in touch</p>
                <NuxtLink to="mailto: hello@advance.com" class="hover:text-primary-light transition-all">hello@advancefounders.com</NuxtLink>
            </div>

            <div class="text-base lg:text-lg w-1/3 sm:w-auto">
                <p class="mb-3 leading-7 font-medium">Follow Us</p>
                <NuxtLink to="https://www.linkedin.com/company/101489336/admin/feed/posts/?feedType=following" target="_blank">
                    <nuxt-icon name="linked-in" filled class="fill-white hover:fill-primary-light transition-all" />
                </NuxtLink>
            </div>

            <div class="text-base lg:text-lg w-full max-w-xl my-16 lg:my-0">
                <p class="mb-3 leading-7 font-medium">Sign up to Advance newsletter</p>

                <Subscribe />
            </div>
        </div>
        
        <div class="text-base flex gap-10 lg:mt-8">
            <p>© Advance™ 2024</p>
        </div>
    </footer>
</template>

<script setup>

</script>