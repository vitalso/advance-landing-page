<template>
    <form action="#" class="mt-14 flex flex-col sm:flex-row items-start gap-4" @submit.prevent="subscribe">
        <input type="text" name="email" v-model="email" placeholder="Enter your email here..." class="border-b border-b-white border-opacity-50 w-full h-[38px] sm:max-w-[410px] bg-transparent outline-none focus:border-opacity-100" required>
        <button type="submit" class="bg-primary-light rounded-[36px] py-2.5 px-[30px] uppercase text-base leading-4">
            <span v-if="!subscribed">Subscribe</span>
            <span v-else class="flex gap-2.5 items-center">
                <nuxt-icon name="icon-check" filled />
                Subscribed
            </span>
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const subscribed = ref(false);

const subscribe = async () => {

    try {
        
        const { data: respData } = await useFetch('https://connect.mailerlite.com/api/subscribers' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGJhMDg2N2FlYTQ5ZWI5ZTZkYTQ5ZGJiOGIxM2Y3ZTYyMGRiYjY5MjgwMjAzN2JiZWM5ZGEwNzhlMWMzZDYzYzJkMWIyMGViMTI1ZmFjNzAiLCJpYXQiOjE3MDU4NTEzMDMuMzc2Mzc1LCJuYmYiOjE3MDU4NTEzMDMuMzc2Mzc4LCJleHAiOjQ4NjE1MjQ5MDMuMzczLCJzdWIiOiI3ODY3NTIiLCJzY29wZXMiOltdfQ.TjS8N8_veHFjm0uNCBlpSFrVWeUweEmT5cZJxrL2yzc5zhbS5kN5Xot3ISMr82-4EO5ZD9jqZvf-GcgJq21GKXZp7bExrdClpYYiaer1m5yK1sEFV39WxR4BJu6QrJXV64UeJx2DdPufncCuos4_Z99A9RM6YktTjWAtGdvEGLQV_gqtAz3ThYISFmoh_YR-3ZI_8R13eA9xsvHnfsf-OkW_jZOttG1zV1AkEMqQIGdhfT_-ILJmVQHbj_JW8G7QEYndj6gKpiUR2LW1hB3rvpmb8KkthYzOvp4TZB7bVW4tyaQLaCWTz81wsBewjc5VKVCLpkG2CTkNRcejXHCbSFX4rdYDrrQZ1A5mzrhlFWYNvZMlwdQh3a5mY3_R18xgZcv2WUc0SBM31Oqrdjjpci6pi3DwCy26h6npH4IVk-9RDM3cy7aAZWBiFJQdIGCvd6C9AHCGoJ96wh66NBuMKUfn3Hr6PUyVyJC9MZ9o3Q8tbDYZLGGRl9sCvWVKi9xO-TmbHTPRqYvV9SckA6K0ii7tOZ4EzoI5QGEUm8-RTKcqfg413dlz1ToiOX-KaTrmNuCLcYHBxxK15G4WveR8MLFvT1ym2MG_zog_jeHoqDkTJTKQpW4F59-EKrGoBC4lC16oNBXSemZDIb-ZLwcPdNHx0uOSv2wbCgir1jWDckI',
            },
            body: {
                email: email.value,
            }
        });

        //console.log(respData);

        email.value = 'Thank you for subscribing!'
        subscribed.value = true;

    } catch (error) {
        //console.log(error);

        email.value = 'Sorry. Something wrong.'
    }

}
</script>