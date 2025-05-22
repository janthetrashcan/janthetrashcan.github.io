<template>
    <div class="font-display absolute z-50">
        <div class="flex flex-row w-screen h-screen">
            <div class="flex flex-col w-1/5 p-4">
                <Sidebar />
            </div>

            <div class="flex flex-col w-4/5 p-8 text-on-primary-bg">
                <slot />
            </div>
        </div>  
    </div>

    <!-- <div id="content-body" class="absolute w-screen h-screen mix-blend-color-dodge hue-rotate-150 opacity-40 z-10"></div> -->
    <div class="bg-primary-bg absolute w-screen h-screen z-0"></div>
</template>

<style scoped>
    #content-body {
        background-image: url('/svg/halftone.jpg');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        /* background-position-x: -50%;
        background-position-y: 400%; */
    }
</style>