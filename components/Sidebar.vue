<template>
    <div class='flex flex-col w-full h-fit items-start justify-center px-4 py-4'>
        <NuxtImg
            src="../public/img/logo-white.png"
            class="w-16 object-cover mb-8 mt-8 ml-4"
        />
        <nav id='navigation' class='flex flex-col w-full h-full items-start gap-1'>
            <NavigationButton label="Home" to="/" />
            <NavigationButton label="About" to="/about" />
            <NavigationButton label="Projects" to="/projects" />
            <NavigationButton label="Contact" to="/contact" />
        </nav>
    </div>
</template>