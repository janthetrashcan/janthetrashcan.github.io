<script setup>

const bodyText = "Hi! I'm Jan. I'm a third-year Computer Science student at Ateneo de Zamboanga University. I am passionate about technology and programming, and I love learning new things along the way. Currently, I am into web development, particularly UI and full-stack frameworks. I also dabble in AI and machine learning, and watch videos on the latest tech updates. \n\nIn addition to tech and programming, I enjoy spending time with my loved ones and friends. I like going to cafes to hang out and draw. I also like playing casual video games and watching 4-hour video essays on said games."

</script>

<template>
    <div class="cursor-default pr-48">
        <div class="flex flex-col gap-8">
            <AboutCard title="About Me">
                <template #content>
                    <p class="text-lg text-justify whitespace-pre-line">
                        {{ bodyText }}
                    </p>
                </template>
            </AboutCard>

            <AboutCard title="Education">
                <template #content>
                    <ul class="list-disc list-inside flex flex-col gap-2">
                        <li>BS Computer Science - Ateneo de Zamboanga University (2022 - 2026)</li>
                        <li>Senior High School - Regional Science High School - IX (2020 - 2022)</li>
                        <li>Junior High School - Regional Science High School - IX (2016 - 2020)</li>
                    </ul>
                </template>
            </AboutCard>
        </div>
    </div>
</template>