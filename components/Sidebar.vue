<template>
    <div class='flex flex-col w-full h-fit items-start justify-center'>
        <NuxtImg
            src="/img/logo-white.png"
            class="w-16 object-cover mb-8 mt-8 ml-4"
        />
        <nav id='navigation' class='flex flex-col w-full h-full items-start gap-1'>
            <NavigationButton label="Home" to="/" iconDefault="mingcute:home-2-line" iconSelected="mingcute:home-2-fill" />
            <NavigationButton label="About" to="/about" iconDefault="mingcute:profile-line" iconSelected="mingcute:profile-fill" />
            <NavigationButton label="Projects" to="/projects" iconDefault="mingcute:documents-line" iconSelected="mingcute:documents-fill" />
            <NavigationButton label="Contact" to="/contact" iconDefault="mingcute:contacts-4-line" iconSelected="mingcute:contacts-4-fill" />
        </nav>
    </div>
</template>