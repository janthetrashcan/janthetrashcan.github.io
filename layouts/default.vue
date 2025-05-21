<template>
    <div class="flex flex-row w-screen h-screen bg-primary-bg">
        <div class="flex flex-col w-1/5">
            <Sidebar />
        </div>

        <div class="flex flex-col w-4/5 bg-primary-bg p-8 text-on-primary-bg">
            <slot />
        </div>
    </div>  
</template>